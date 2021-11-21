import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import CourseView from './components/CourseView/CourseView';
import ModalForUpdate from './components/Shared/ModalForCourse/ModalForUpdate/ModalForUpdate';
export const courseContext = createContext();

function App() {
  const [course,setCourse] =  useState([]);
   useEffect(() => {
    fetch('http://localhost:8000/allCourse')
    .then(res=>res.json())
    .then(data =>{
      setCourse(data)
    })
},[])
console.log(course)
  return (
    <>
    <courseContext.Provider value={[course,setCourse]}>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<CourseView/>}/> 
        <Route path="/update/:id" element={<ModalForUpdate/>}/> 
      </Routes>
      </courseContext.Provider>
    </>
  );
}

export default App;
