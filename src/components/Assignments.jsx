import React, {useState, useEffect} from 'react'
import './Assignments.css'
import db from './firebaseconfig';

function Assignments() {
  const [rooms,setRooms]=useState([]);
  useEffect(()=>{
    
    const unsubscribe=  db.collection("Assignment").onSnapshot(snapshot=>(
          setRooms(snapshot.docs.map(doc =>({
              id:doc.id,
              data:doc.data()
          })
          ))
      ))
      return ()=>{
          unsubscribe();
      }
      
  },[])

  return (
    <div>
    
         
              
          <h1 className='heading'>Assignment</h1>
          <hr />
          <div>
          <div className="Ass_page">{
            
              rooms.map((item)=>(
                <div className='card' key={item.id} >
                  <div className="card_flex">
                      <div style={{marginLeft:'3vh'}}>
                          <div style={{display: 'flex'}}>
                              <p style={{marginRight:'40px', color:'#0D47A1', fontSize:'20px'}}>{item.data.form.assignmentname}</p>
                              <p style={{backgroundColor:'green', color:'white',padding:"2px 1vh 0vh 1vh", borderRadius:'1vh'}}>{item.data.form.assignmenttag}</p>
                          </div>
                          <div style={{marginTop:"1vh"}}>
                              <span><b>{item.data.form.teachername} </b></span><span> Created </span>
                              <span><b> {item.data.form.assignmenttype} </b></span><span> at </span>
                              <span>{item.data.form.date}</span><span> - </span>
                              <span>{item.data.form.time}</span>
                          </div>
                      </div>
                      
                          <button className='button'>{item.data.form.status}</button>

                  </div>
                </div>
              ))
          }
          </div>
          </div>

</div>
  )
}

export default Assignments
