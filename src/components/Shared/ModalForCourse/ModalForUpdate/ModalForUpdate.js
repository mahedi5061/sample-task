 
import moment from 'moment';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
 
 
import { courseContext } from './../../../../App';
 
const ModalForUpdate = () => {
  const {id}=useParams()
  const [course,setCourse] =  useContext(courseContext);
    const courseId=course.find(c=>c._id===id);
  const [info, setInfo] = React.useState({});
  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}
const handleSubmit = (e) => {
  fetch(`http://localhost:8000/updateCourse/${id}`,{
    method:'PATCH',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(info)
})
.then(res=>res.json())
.then(data=>{
     console.log(data)
})
window.location.replace("/")
}

    return (
       <Container className="mt-5">
         <Link to="/">
         <button className="btn btn-primary">Home</button></Link>
         <h2 className="text-center py-3">Course Update</h2>
         <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
             defaultValue={courseId?.course?.courseId}
            className="form-control writeInput mt-2 mb-3"
            name="courseId"
            placeholder="Course ID"
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            defaultValue={courseId?.course?.curriculum}
            className="form-control writeInput mt-2 mb-3"
            name="curriculum"
            placeholder="Curriculum"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            defaultValue={courseId?.course?.class}
            className="form-control writeInput mt-2 mb-3"
            name="class"
            placeholder="Class"
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            defaultValue={courseId?.course?.subject}
            className="form-control writeInput mt-2 mb-3"
            name="subject"
            placeholder="Subjects"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="number"
            defaultValue={courseId?.course?.participants}
            className="form-control writeInput mt-2 mb-3"
            name="participants"
            placeholder="No of participants"
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="number"
            defaultValue={courseId?.course?.seat}
            className="form-control writeInput mt-2 mb-3"
            name="seat"
            placeholder="Vacant Seats"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="date"
            defaultValue={courseId?.course?.startDate}
            className="form-control writeInput mt-2 mb-3"
            name="startDate"
            placeholder="Course Start Date"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="date"
            defaultValue={courseId?.course?.endDate}
            className="form-control writeInput mt-2 mb-3"
            name="endDate"
            placeholder="Course End Date"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="time"
            defaultValue={courseId?.course?.classTime}
            className="form-control writeInput mt-2 mb-3"
            name="classTime"
            placeholder="Class Time"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            defaultValue={courseId?.course?.fee}
            className="form-control writeInput mt-2 mb-3"
            name="fee"
            placeholder="Fees in BDT"
          />
        </div>

        <button type="submit" className="mt-3" style={{backgroundColor:"teal",color:"white",borderRadius:"5px",border:"1px solid teal",padding:"5px"}}>
          Submit
        </button>
      </form>
        
       </Container>
    );
};

export default ModalForUpdate;