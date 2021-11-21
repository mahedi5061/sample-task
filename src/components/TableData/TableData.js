import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import './TableData.css';
import moment from 'moment';
import { courseContext } from './../../App';
import {AiOutlineEye,AiOutlineDelete} from 'react-icons/ai';
import {FaEdit} from 'react-icons/fa';
 
import { Link } from 'react-router-dom';
import ModalForUpdate from './../Shared/ModalForCourse/ModalForUpdate/ModalForUpdate';
 

const TableData = () => {
  const [course,setCourse] =  useContext(courseContext);
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const handleUpdate=()=>{
      setIsOpen(true);
  }
  const closeModal=()=>{
      setIsOpen(false);
    }
    const handleDelete=(id)=>{
     
      fetch(`http://localhost:8000/delete/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
          console.log(data)
          window.location.replace("/")
    })
    
    }
    
    return (
        <>
          <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th className="si">SI</th>
      <th>Course ID</th>
      <th>Curriculum</th>
      <th>Class</th>
      <th>Subjects</th> 
      <th>No of participants</th>
      <th>Vacant Seat</th>
      <th>Course Start Date</th>
      <th>Course End Date</th>
      <th>Class Time</th>
      <th>Fess in BDT</th>
      <th>Actions</th>
    </tr>
  </thead>
  {
    course.map((c,index)=>
 
  <tbody >
      <td>{index+1}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.courseId}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.curriculum}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.class}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.subject}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.participants}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.seat}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.startDate}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.endDate}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{moment().format(c?.course?.classTime)}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{c?.course?.fee}</td>
       
     <td className="d-flex gap-3">
       <Link to={`/view/${c._id}`}>
       <AiOutlineEye style={{ fontSize:"25px",cursor: "pointer",color:"orange"}}  /></Link>
       <Link to={`/update/${c._id}`}><FaEdit style={{ fontSize:"25px",cursor: "pointer",color:"teal"}} onClick={handleUpdate}/> </Link>
        <AiOutlineDelete style={{ fontSize:"40px",cursor: "pointer",color:"tomato"}} onClick={()=>{handleDelete(c._id)}}/>  
         <button className="join">join class</button>
         
     </td>
      
  </tbody>
   )}
   
</Table>
        </>
    );
};

export default TableData;