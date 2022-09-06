import React from 'react'

function Sinup() {
  return (
    <div className='logincontiner'>
    <img className='loginlogo' src='https://masai-website-images.s3.ap-south-1.amazonaws.com/1_a_YM_Gzz227i_Of_A08vt0_m_Jw_486f01ccaa.png'/>
    <form className='loginform'>
    <div className='LoginInputBox'>
              <label className='inputheading'>Full Name</label> 
              <input className='loginputbar' type="text"  required />
          </div>
          <div className='LoginInputBox'>
              <label className='inputheading'>Student Code</label> 
              <input className='loginputbar' type="text"  required />
          </div>
    <div className='LoginInputBox'>
              <label className='inputheading'>Email</label> 
              <input className='loginputbar' type="mail"  required />
          </div>
          
    
          <div className='LoginInputBox'>
              <label className='inputheading'>Password</label> 
              <input className='loginputbar' type="password"  required />
          </div>
         
          
          <button className='signupbutton'>Sign Up</button>
          
          
          
    </form>
    
    </div>
      
  )
}

export default Sinup
