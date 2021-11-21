import moment from 'moment';
import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { courseContext } from './../../App';

const CourseView = () => {
    const {id}=useParams();
    const [course,setCourse] =  useContext(courseContext);
    const courseId=course.find(c=>c._id===id);
    
    return (
        <Container className="mt-5">
            <Link to="/"><button className="btn btn-primary">Home</button></Link>
            <h2 className="text-center py-3">Class</h2>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
     
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
      
    </tr>
  </thead>
  
 
  <tbody >
       
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.courseId}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.curriculum}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.class}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.subject}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.participants}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.seat}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.startDate}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.endDate}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{moment().format(courseId?.course?.classTime)}</td>
      <td style={{padding:"15px",fontSize:"20px"}}>{courseId?.course?.fee}</td>
      
     
  </tbody>
 
</Table>
        </Container>
    );
};

export default CourseView;