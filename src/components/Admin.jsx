import React from 'react';

import "./Admin.css";

import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate()
    const CreateLecturePage = () =>{
            navigate("/Admin/CreateLectures")
        }

    const CreateAssignmentPage = () =>{
        navigate("/Admin/CreateAssignment")
    }
  
    return (
      <div>
        
         

          <div className="top-Admin">
                    <div className="Admin_logo">
                        <img src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />
                    </div>
        

                    <div className="Admin_Create">
                        <button onClick={() =>CreateLecturePage()} >Create A Lecture</button>
                        <button  onClick={() =>CreateAssignmentPage()}>Create An Assignment</button>
                    </div>
            </div>
      </div>
    )
}

export default Admin