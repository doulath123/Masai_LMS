// import axios from 'axios'
import React, {useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "./Login.css";

function Login() {
    const [state, dispatch]=useContext(AuthContext)
    console.log( "state",state)
    const loginUser=()=>{
     
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
<form className='loginform' onSubmit={loginUser}>
<div className='LoginInputBox'>
                <label className='inputheading'>Email</label> 
                <input className='loginputbar' type="mail"  required />
            </div>

            <div className='LoginInputBox'>
                <label className='inputheading'>Password</label> 
                <input className='loginputbar' type="password"  required />
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
