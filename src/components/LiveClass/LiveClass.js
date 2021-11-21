import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './LiveClass.css'
import { courseContext } from './../../App';
import moment from 'moment';
const LiveClass = () => {
     const [course,setCourse] =  useContext(courseContext);
     console.log(course)
    return (
        <>
          <Container className="py-3">
          <h2 className="live-class">Today's Live Class</h2>
          <div className="row d-flex justify-content-around mt-5">
       {
            course.map(c=>   <div className="col-md-4 card-one">
            <div className="d-flex justify-content-between">
                 <h2>{c?.course?.class}</h2>
                 <button className="paid">Paid</button>
            </div>
            <p className="text-muted">Batch: {c?.course?.courseId}</p>
            <br></br>
            <p className="time">{moment().format(c?.course?.classTime)}</p>
            <div className="d-flex justify-content-between">
            <p className="remaining-time">1 h 47 m remaining</p>
            <button className="join-class">Join class</button>
            </div>
       </div>)
       }
               
            </div>
             
           </Container> 
        </>
    );
};

export default LiveClass;