import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import AddStudent from './components/AddStudent';
import _ from 'lodash';
import Student from './components/Student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() =>{
    if(localStorage){
const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));

if(studentsLocalStorage){
  saveStudents(studentsLocalStorage);
}
else{
  saveStudents(students)
}
    }
  }, [])


  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage){
      localStorage.setItem('students', JSON.stringify(students));
      console.log('saved to local storage');
     }
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents)
}

  const searchStudents = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(gradYear){
      keywordsArray.push(gradYear.toString());
    }

    if(keywordsArray.length > 0){
      const searchResults = allStudents.filter(student => {
        for(const word of keywordsArray){
          if(student.firstName.toLowerCase().includes(word) || 
          student.lastName.toLowerCase().includes(word) || 
          student.gradYear === parseInt(word)){
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allStudents);
    }
  }


const removeStudent = (studentToDelete) => {
//console.table(studentToDelete);
const updatedStudentsArray = allStudents.filter(student => student.id !== studentToDelete.id);
saveStudents(updatedStudentsArray);
}

const updateStudent = (updatedStudent) => {
console.table(updatedStudent);
const updatedStudentsArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student);
saveStudents(updatedStudentsArray);
}


  const students = [{
    id: nanoid(),
    firstName: "Izuku",
    lastName: "Midoriya",
    course: "1-A",
    images:'images/student1.jpg',
    gradYear: 2040,
    quirk: "One for All",
    heroName: "Deku"

  }, {
    id: nanoid(),
    firstName: "Katsuki",
    lastName: "Bakugou",
    course: "1-A",
    images:'images/student2.jpg',
    gradYear: 2040,
    quirk:"Explosion",
    heroName: "Dynamight"
  }, {
    id: nanoid(),
    firstName: "Tenya",
    lastName: "Iida",
    course: "1-A",
    images:'images/student3.jpg',
    gradYear: 2040,
    quirk: "Engine",
    heroName: "Ingenium"
  }, {
    id: nanoid(),
    firstName: "Ochaco",
    lastName: "Uraraka",
    course: "1-A",
    images:'images/student4.jpg',
    gradYear: 2040,
    quirk: "Zero Gravity",
    heroName: "Uravity"
  }, {
    id: nanoid(),
    firstName: "Eijiro",
    lastName: "Kirishima",
    course: "1-A",
    images:'images/student5.jpg',
    gradYear: 2040,
    quirk: "Hardening",
    heroName: "Red Riot"
  }, {
    id: nanoid(),
    firstName: "Hanta",
    lastName: "Sero",
    course: "1-A",
    images:'images/student6.jpg',
    gradYear: 2040,
    quirk: "Tape",
    heroName: "Cellophane"
  }, {
    id: nanoid(),
    firstName: "Denki",
    lastName: "Kaminari",
    course: "1-A",
    images:'images/student7.jpg',
    gradYear: 2040,
    quirk: "Electrification",
    heroName: "Chargebolt"
  }, {
    id: nanoid(),
    firstName: "Kyoka",
    lastName: "Jirou",
    course: "1-A",
    images:'images/student8.jpg',
    gradYear: 2040,
    quirk: "Earphone Jack",
    heroName: "Earphone Jack"
  },  {
    id: nanoid(),
    firstName: "Momo",
    lastName: "Yaoyorozu",
    course: "1-A",
    images:'images/student10.jpg',
    gradYear: 2040,
    quirk: "Creation",
    heroName: "Creati"
  }];
  

  return (

    <div className='container'>
      <div className='row'id='allStudents'>
        <h3>Current Students</h3>
        <p>Use this to add your ocs, edit characters for your headcanons, and more! :3
        </p>
        {searchResults && searchResults.map((student) =>
        (      <div className='col-lg-3'key={student.id}>
       <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
      </div>)
        )}

      </div>
      {!allStudents && <button type="button" className='btn btn-lg btn-success' onClick={() => saveStudents(students)}>Save Students</button>}
      <AddStudent addStudent={addStudent} />
      <h3>Student Search</h3>
      <p>As you add more characters and edits, use this to keep track of them and find them again!</p>
      <div className='row mt-4' id='searchStudents'>
        <div className='col-md-4'>
          <label htmlFor='txtKeyworkds'>Search by First or Last Name</label>
          <input type='text' className='form-control' placeholder='Student Name' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords}/>
        </div>
        <div className='col-md-4'>
          <select value={gradYear} onChange={evt => setGradYear(evt.currentTarget.value)} className='form-select'>
            <option value=''>Select Year</option>
            {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}          </select>
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-primary' onClick={searchStudents}>Search Students <FontAwesomeIcon icon={faSearch}/> </button>
        </div>
      </div> 
    </div>
  )
}

export default App
