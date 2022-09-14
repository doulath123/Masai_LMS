// import axios from 'axios'
import React, {useContext, useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import db from './firebaseconfig';
import "./Login.css";

function Login() {
  const [preuser, setPreuser]=useState({
    email:"",
    password:""

  })
  let name, value
    const Handlechange = (e) => {
        name=e.target.name
        value=e.target.value
        setPreuser({ ...preuser, [name]: value });
       
    };
  const [user,setUser]=useState([]);
  useEffect(()=>{
    
    const unsubscribe=  db.collection("Users").onSnapshot(snapshot=>(
          setUser(snapshot.docs.map(doc =>({
              id:doc.id,
              data:doc.data()
          })
          ))
      ))
      return ()=>{
          unsubscribe();
      }
      
  },[])
  
    const [state, dispatch]=useContext(AuthContext)
    
    
    const loginUser=(e)=>{
      e.preventDefault();
      var p=0;
      for(var i=0;i<user.length;i++)
      {
        if(preuser.email==user[i].data.userlist.email&&preuser.password==user[1].data.userlist.password){
          alert('Login is Successfull')
          p++
          dispatch({
            type:"LOGIN_SUCCESS",
            
          })
        }
     
      }
      if(p==0)
      {
        alert("Enter detiles currectly")
      }
      console.log("orguser login email", user[1].data.userlist.email)
      console.log("clicking login button",preuser.email)
     
      
    }

    
    if(state.isAuth)
    {
        return <Navigate to='/dashboard'/>
    }
  return (
  
    <div className='logincontiner'>
      <img className='loginlogo' src='https://masai-website-images.s3.ap-south-1.amazonaws.com/1_a_YM_Gzz227i_Of_A08vt0_m_Jw_486f01ccaa.png'/>
<form className='loginform' onSubmit={loginUser}>
<div className='LoginInputBox'>
                <label className='inputheading'>Email</label> 
                <input className='loginputbar' type="mail" name='email' onChange={Handlechange}  value={preuser.email}   required />
            </div>

            <div className='LoginInputBox'>
                <label className='inputheading'>Password</label> 
                <input className='loginputbar' type="password" name='password' onChange={Handlechange}  value={preuser.password} required />
            </div>
            <div className='Loginchechdiv'>
            <input className='checkbox' type="checkbox" />
            <label>Remember me</label> 
            </div>
            <div className='forgotandbutton'>
            <label className='forgotpass'>Forgot your password?</label>
            <button className='loginbutton'>LOG IN</button>
            </div>
            
            
            
</form>
<Link to="/signup"><button>Sign Up</button></Link>
</div>
    

  )
}

export default Login
