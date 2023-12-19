import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning, faMagicWandSparkles  } from '@fortawesome/free-solid-svg-icons'
import './Student.css'


function Student(props){


  const [editMode, setEditMode] = useState(false);
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[course, setCourse] = useState("");
  const[gradYear, setGradYear] = useState("");
  const[quirk, setQuirk] = useState("");
  const[heroName, setHeroName] = useState("");

  useEffect(() => {
    setFirstName(props.student.firstName);
    setLastName(props.student.lastName);
    setCourse(props.student.course);
    setGradYear(props.student.gradYear);
    setQuirk(props.student.quirk);
    setHeroName(props.student.heroName);
  }, []);

  const saveStudent = () => {
    setEditMode(false);
    const updatedStudent = {firstName:firstName, lastName:lastName, course:course, gradYear:gradYear, quirk:quirk, heroName:heroName, id:props.student.id, image:props.student.image }
    props.updateStudent(updatedStudent);
  }

return(
  <div className='card'>
  <img src={props.student.images} alt='Our Students'className='card-img-top mx-auto' />
 {!editMode && <ul className='list-group list-group-flush'>
    <li className='list-group-item text-center'>{props.student.firstName}</li>
    <li className='list-group-item text-center'>{props.student.lastName}</li>
    <li className='list-group-item text-center'>{props.student.course}</li>
    <li className='list-group-item text-center'>{props.student.gradYear}</li>
    <li className='list-group-item text-center'>{props.student.quirk}</li>
    <li className='list-group-item text-center'>{props.student.heroName}</li>
    <button type='button' className='btn btn-danger' onClick={() => props.removeStudent(props.student) }>Delete Student <FontAwesomeIcon icon={faWarning}/> </button>
    <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faMagicWandSparkles}/> </button>
  </ul>
  }
  {editMode &&
  <ul className='list-group list-group-flush'>
  <li className='list-group-item text-center'><input type='text' className='form-control' value={firstName} onChange={(evt) => setFirstName(evt.currentTarget.value)}/></li>
  <li className='list-group-item text-center'><input type='text' className='form-control' value={lastName} onChange={(evt) => setLastName(evt.currentTarget.value)}/></li>
  <li className='list-group-item text-center'><input type='text' className='form-control' value={course} onChange={(evt) => setCourse(evt.currentTarget.value)}/></li>
  <li className='list-group-item text-center'><input type='text' className='form-control' value={gradYear} onChange={(evt) => setGradYear(evt.currentTarget.value)}/></li>
  <li className='list-group-item text-center'><input type='text' className='form-control' value={quirk} onChange={(evt) => setQuirk(evt.currentTarget.value)}/></li>
  <li className='list-group-item text-center'><input type='text' className='form-control' value={heroName} onChange={(evt) => setHeroName(evt.currentTarget.value)}/></li>


  <li className='list-group-item'><button id='btnSave' className='btn btn-secondary'onClick={saveStudent}>Save</button></li>
</ul>
  }
</div>

)};

export default Student;