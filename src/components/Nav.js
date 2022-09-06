import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons';
import Lectures from './Lectures';
import Assignments from './Assignments';


function Nav() {
  return (
    <div className='NavContiner'>
      <Link to="/dashbord"><img className='NavLogo' src='https://masai-website-images.s3.ap-south-1.amazonaws.com/1_a_YM_Gzz227i_Of_A08vt0_m_Jw_486f01ccaa.png'/></Link>
      
      <div  className='NavHeading'>
     
      <div className='Nav_HeaderLeft'>
        <Link to="/lectures">Lectures</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/discussions">Discussions</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/electives">Electives</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/admin">Admin</Link>
      </div>
      
      <div className='Nav_HeaderRight'>
      <Menu>
 
    <>
      <MenuButton className='UserName'>
        Nayab Syed Doulath Basha (fw14_632)<ChevronDownIcon />
      </MenuButton>
      <MenuList>
      
      <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/login"> <MenuItem >Log Out</MenuItem></Link>
      </MenuList>
    </>
 
</Menu>
</div>
      </div>
    </div>
  )
}



export default Nav;
