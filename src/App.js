import React, {useContext} from 'react'
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import Lectures from './components/Lectures';
import Assignments from './components/Assignments';
import Admin from './components/Admin';
import CreateAssignment from './components/Assignmentform';
import Lecturesform from './components/Lecturesform';
import PrivateRoute from './components/PrivateRoute';
import Sinup from './components/Sinup';
import { AuthContext } from './Context/AuthContext';
import Dashboard from './components/Dashboard';

function App() {
  const [state, dispatch]=useContext(AuthContext)
  return (
    <div className="App">
      {state.isAuth? <Nav/>:""}
     <Routes>
      
       
        <Route path='/lectures' element={<Lectures/>}/>
        <Route path='/assignments' element={<Assignments/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Admin/CreateAssignment' element={<CreateAssignment/>}/>
        <Route path='/Admin/CreateLectures' element={<Lecturesform/>}/>
        <Route path='/' element={<PrivateRoute><Lectures/></PrivateRoute>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Sinup/>}/>
        
    </Routes>
    </div>
  );
}

export default App;
