import React from 'react';
import { Container } from 'react-bootstrap';
import ModalForCourse from '../Shared/ModalForCourse/ModalForCourse';
import TableData from '../TableData/TableData';
import './Courses.css';
const Courses = ({course}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const hanldeNewCourse=()=>{
        setIsOpen(true);
    }
    const closeModal=()=>{
        setIsOpen(false);
      }
    return (
        <>
          <Container className="py-5">
           <p className="courses">All Courses <span className="new-course" onClick={hanldeNewCourse}>Create new courses+</span></p> 
           <TableData/>
           <ModalForCourse modalIsOpen={modalIsOpen} closeModal={closeModal}  ></ModalForCourse>  
              </Container> 
        </>
    );
};

export default Courses;