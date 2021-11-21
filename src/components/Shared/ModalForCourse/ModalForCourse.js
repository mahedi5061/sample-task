 
import React from "react";
 
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
    transition: "0.3s",
    borderRadius: "15px",
  },
};
Modal.setAppElement("#root");
const ModalForCourse = ({ modalIsOpen, closeModal }) => {
    const [info, setInfo] = React.useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
 
  const handleSubmit = (e) => {
     
    fetch("https://course-demo-task.herokuapp.com/addCourse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
      });
    window.location.replace("/");
    e.preventDefault();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control writeInput mt-2 mb-3"
            name="courseId"
            placeholder="Course ID"
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control writeInput mt-2 mb-3"
            name="curriculum"
            placeholder="Curriculum"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control writeInput mt-2 mb-3"
            name="class"
            placeholder="Class"
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control writeInput mt-2 mb-3"
            name="subject"
            placeholder="Subjects"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="number"
            className="form-control writeInput mt-2 mb-3"
            name="participants"
            placeholder="No of participants"
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="number"
            className="form-control writeInput mt-2 mb-3"
            name="seat"
            placeholder="Vacant Seats"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="date"
            className="form-control writeInput mt-2 mb-3"
            name="startDate"
            placeholder="Course Start Date"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="date"
            className="form-control writeInput mt-2 mb-3"
            name="endDate"
            placeholder="Course End Date"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="time"
            className="form-control writeInput mt-2 mb-3"
            name="classTime"
            placeholder="Class Time"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control writeInput mt-2 mb-3"
            name="fee"
            placeholder="Fees in BDT"
          />
        </div>

        <button type="submit" className="mt-3" style={{backgroundColor:"teal",color:"white",borderRadius:"5px",border:"1px solid teal",padding:"5px"}}>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ModalForCourse;
