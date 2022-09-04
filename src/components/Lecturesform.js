import React, {useState, useEffect} from 'react'
import db from './firebaseconfig';
import './form.css'

function Lecturesform() {
    const [form, setForm] = useState({
        lecturename:"",
        teachername:"",
        lecturetype:"",
        lecturetag:"",
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
      
        db.collection("Lectures").add({form})
        alert("Lecture Created successfully!")
    
    };
  return (
    <div>
            <div className="ImgStyle">
                <img  src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />

            </div>
            

            <form >
                <div className="fotm_main">
                        <div className='InputBox'>
                            <label><b>Lecture Name</b></label> <br />
                            <input 
                            onChange={Handlechange} 
                            name="lecturename"
                            value={form.lecturename}
                            type="text"  required />
                        </div>

                        <div className='InputBox'>
                            <label><b>Teacher Name</b></label> <br />
                            <input 
                            onChange={Handlechange} 
                            name="teachername"
                            value={form.teachername}
                            type="text"  required />
                        </div>



                    <div className='InputBox'>
                        <label ><b>Lecture Type</b></label> <br />
                       

                        <select name="lecturetype" value={form.lecturetype} onChange={Handlechange}  type="text" id="lecturetype">
                        <option>Select</option>
                            <option value="Live">Live</option>
                            <option value="Reading">Reading</option>
                            <option value="Video">Video</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className='InputBox'>
                        <label ><b>Lecture Tag</b></label> <br />
                        <select name="lecturetag" value={form.lecturetag} onChange={Handlechange}  type="text" id="lecturetag">
                        <option>Select</option>
                            <option value="Coding">Coding</option>
                            <option value="Algo">Algo</option>
                            <option value="DSA">DSA</option>
                            <option value="Scrum">Scrum</option>
                            <option value="General">General</option>
                            <option value="Problem">Problem</option>
                            <option value="Others">Others</option>
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
                            <input 
                            onChange={Handlechange} 
                            name="date"
                            value={form.date}
                            type="date"  required />
                        </div>


                        <div className='InputBox'>
                            <label ><b>Time</b></label> <br />
                            <input 
                            onChange={Handlechange} 
                            name="time"
                            value={form.time}
                            type="Time"  required />
                        </div>
                    </div>

                    <button onClick={Handleclick} className="btn" type="submit" ><b>Create lecture</b></button>

                </div>
            </form>
    </div>
  )
}

export default Lecturesform
