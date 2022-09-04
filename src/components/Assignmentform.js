import React, { useState } from 'react'
import db from './firebaseconfig';

import "./form.css";


const CreateAssignment = () => {
    const [form, setForm] = useState({
        assignmentname:"",
        teachername:"",
        assignmenttype:"",
        assignmenttag:"",
        status:"",
        date:"",
        time:""


    });
let name, value
    const Handlechange = (e) => {
        name=e.target.name
        value=e.target.value
        setForm({ ...form, [name]: value });
       
    };
   

    const Handleclick = (e) => {
        e.preventDefault();
      
        db.collection("Assignment").add({form})
        alert("data is submited successfully")
    
    };

    return (
        <div>
<div className="ImgStyle">
    <img  src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />

</div>


<form >
    <div className="fotm_main">
            <div className='InputBox'>
                <label><b>Assignment Name</b></label> <br />
                <input  onChange={Handlechange} 
                        name="assignmentname"
                        value={form.assignmentname}
                        type="text"  required />
            </div>

            <div className='InputBox'>
                <label><b>Teacher Name</b></label> <br />
                <input  onChange={Handlechange} 
                        name="teachername"
                        value={form.teachername}
                        type="text"  required />
            </div>



        <div className='InputBox'>
            <label ><b>Assignment Type</b></label> <br />

            <select name="assignmenttype" value={form.assignmenttype} onChange={Handlechange}  type="text" id="assignmenttype">
            <option>Select</option>
                <option value="Evaluation Problem's">Evaluation Problem's</option>
                <option value="Assignment Problem's">Assignment Problem's</option>
            </select>
        </div>

        <div className='InputBox'>
            <label ><b>Assignment Tag</b></label> <br />
            <select name="assignmenttag" value={form.assignmenttag} onChange={Handlechange}  type="text" id="assignmenttag">
            <option>Select</option>
                <option value="MERN">MERN</option>
                <option value="FULL_STACK">FULL_STACK</option>
                <option value="FRONTEND">FRONTEND</option>
                <option value="BACKEND">BACKEND</option>
                <option value="OJ">OJ</option>
            </select>
        </div>

        
        <div className='InputBox'>
            <label ><b>Status</b></label> <br />
            <input  onChange={Handlechange} 
                    name="status"
                    value={form.status}
                    type="text"  required />
        </div>

        <div className='InputBox_name'>
            <div className='InputBox'>
                <label ><b>Date</b></label> <br />
                <input  onChange={Handlechange} 
                    name="date"
                    value={form.date}
                    type="date"  required />
            </div>
            <div className='InputBox'>
                <label ><b>Time</b></label> <br />
                <input  onChange={Handlechange} 
                    name="time"
                    value={form.time}
                    type="Time"  required />
            </div>
        </div>


        <button onClick={Handleclick} className="btn" type="submit" ><b>Create Assignments</b></button>

    </div>
</form>
        </div>
    )
}

export default CreateAssignment