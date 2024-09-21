






import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seterror, setloading, setevents } from '../REDUX/slice';
import axios from 'axios';



const Eventlist=() =>{

  const{events,error,loading}=useSelector((state)=>(state.movies))

 const dispatch=useDispatch()

 let ApiURL="http://localhost:3006/events"


  const fetchevents = async () => {
    dispatch(setloading())
    try{
      const response = await axios.get(ApiURL)
      dispatch(setevents(response.data))
    }catch(error){
        console.error('error fectch events:',error)
        dispatch(seterror(error.toString()))
    }

  }


  useEffect(()=>{
    fetchevents()
  },[dispatch])



  if (loading){
    return<div className='container  mt-4'>loading....</div>

  }


  if(error){
      return <div className='container mt-4'>Error:{error}</div>
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">EventList</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col"> Date</th>
            <th scope="col">PRICE</th>
        
          </tr>
        </thead>
        <tbody>
        
          {events.map((event,index)=>(
           <tr key={index}>
              <td>{event.NAME
                }</td>
              <td>{event.DATE}</td>
              <td>{event.PRICE}</td> 
            </tr>
          ) )}
        
        </tbody>
      </table>
    </div>
  );
};

export default Eventlist;


