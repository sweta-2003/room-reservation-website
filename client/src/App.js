/*
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import useFetch from "./hooks/useFetch";
function App() {
  /*const [BackendData,setBackendData]=useState([{}])
 
  useEffect( ()=>{
      fetch("/api/hotels").then(
        response=>response.json()
        
      ).then(
        data=>{
          setBackendData(data)
        }
      )
    },[])*/
 /* return (
    <div>
      /*{(typeof BackendData.users==="undefined")?
      (<p>loading...</p>):(BackendData.users.map((user,i)=>(<p key={i}>
        {user}
      </p>)))}
    </div>
  );
  const{data,loading,error}=useFetch()
  console.log(data)
  return(
    <div>
     
    </div>
  )
}

export default App;
*/

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;