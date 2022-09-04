
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import Lectures from './components/Lectures';
import Assignments from './components/Assignments';
import Admin from './components/Admin';
import CreateAssignment from './components/Assignmentform';
import Lecturesform from './components/Lecturesform';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
       
        <Route path='/lectures' element={<Lectures/>}/>
        <Route path='/assignments' element={<Assignments/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/Admin/CreateAssignment' element={<CreateAssignment/>}/>
        <Route path='/Admin/CreateLectures' element={<Lecturesform/>}/>
    </Routes>
    </div>
  );
}

export default App;
