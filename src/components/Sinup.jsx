import React, {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import db from './firebaseconfig';

function Sinup() {
    const [userlist, setUserlist]=useState({
        fullname:'',
        studentcode:'',
        email:'',
        password:""
    });
    let name, value
    const Handlechange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUserlist({...userlist, [name]:value})
    };
    const [state, dispatch]=useContext(AuthContext)
    const Register=(e)=>{
        e.preventDefault();
        db.collection("Users").add({userlist})
        alert('Registered Successfull')
        dispatch({
            type:"LOGIN_SUCCESS",
            
          })
       
    }
    if(state.isAuth)
    {
        return <Navigate to='/'/>
    }
  return (
    <div className='logincontiner'>
    <img className='loginlogo' src='https://masai-website-images.s3.ap-south-1.amazonaws.com/1_a_YM_Gzz227i_Of_A08vt0_m_Jw_486f01ccaa.png'/>
    <form className='loginform' onSubmit={Register}>
    <div className='LoginInputBox'>
              <label className='inputheading'>Full Name</label> 
              <input className='loginputbar' type="text" onChange={Handlechange} name="fullname" value={userlist.fullname}  required />
          </div>
          <div className='LoginInputBox'>
              <label className='inputheading'>Student Code</label> 
              <input className='loginputbar' type="text" onChange={Handlechange} name="studentcode" value={userlist.studentcode} required />
          </div>
    <div className='LoginInputBox'>
              <label className='inputheading'>Email</label> 
              <input className='loginputbar' type="mail" onChange={Handlechange} name="email" value={userlist.email} required />
          </div>
          
    
          <div className='LoginInputBox'>
              <label className='inputheading'>Password</label> 
              <input className='loginputbar' type="password" onChange={Handlechange} name="password" value={userlist.password} required />
          </div>
         
          
          <button className='signupbutton'>Sign Up</button>
          
          
          
    </form>
    
    </div>
      
  )
}

export default Sinup
