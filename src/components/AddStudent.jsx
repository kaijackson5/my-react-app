import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './AddStudent.css';



function AddStudent(props) {
    // id, firstName, lastName, photo
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[course, setCourse] = useState('');
    const[selectedFile, setSelectedFile] = useState();
    const[gradYear, setGradYear] = useState();
    const[quirk, setQuirk] = useState('');
    const[heroName, setHeroName] = useState('');

    const doWork= () => {
        const newStudent = {'id':nanoid(), 'firstName':firstName, 'lastName':lastName, 'course':course, 'gradYear':gradYear, 'quirk':quirk, 'heroName':heroName, 'images':URL.createObjectURL(selectedFile)}
        props.addStudent(newStudent);
    }

    const imageUpdate = (event) => {
        setSelectedFile(event.target.files[0]);
    }

  return (
    <div className='row mt-5'id='addStudent'>
        <h3>Add Your Student!</h3>
        <p>Use this to add as many characters as you want, including yourself! Make sure to fill out all the fields and pick an image similar in size to the others! :3</p>
        <div className='col-md-2'>
            <label htmlFor='txtFirstName' className='form-label'>First Name</label>
            <input type='text' id='txtFirstName' placeholder='Given Name' className='form-control' onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtLastName' className='form-label'>Last Name</label>
            <input type='text' id='txtLastName' placeholder='Family Name' className='form-control' onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtCourse' className='form-label'>Course</label>
            <input type='text' id='txtCourse' placeholder='ex: Gen Ed' className='form-control' onChange={(evt) => setCourse(evt.currentTarget.value)} value={course} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtGradYear' className='form-label'>Graduation Year</label>
            <input type='text' id='txtGradYear' placeholder='Graduation Year' className='form-control' onChange={(evt) => setGradYear(evt.currentTarget.value)} value={gradYear} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtQuirk' className='form-label'>Quirk</label>
            <input type='text' id='txtQuirk' placeholder='ex: Explosion' className='form-control' onChange={(evt) => setQuirk(evt.currentTarget.value)} value={quirk} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtHeroName' className='form-label'>Hero Name</label>
            <input type='text' id='txtHeroName' placeholder='ex: Dynamight' className='form-control' onChange={(evt) => setHeroName(evt.currentTarget.value)} value={heroName} />
        </div>
        <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Student Image</label>
            <input type='file' name='file' id='fileUpload' onChange={imageUpdate} />
        </div>
        <div className='col-md-2'>
        <button type='button' id='btnAdd' className='btn btn-success btn-md' onClick={doWork}>Add Student <FontAwesomeIcon icon={faPlusCircle}/> </button>
        </div>
      
    </div>
  );
}

export default AddStudent;