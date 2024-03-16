import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import {  isUserLoggedIn } from '../Services/application'

const PrivateRoutes =()=> {
    const [loggedIn,setLoggedIn]=useState(true)
   const handleLoggedIn = ()=>{
    if(isUserLoggedIn()){
        setLoggedIn(true);
        console.log("fir",loggedIn)
    }
    else setLoggedIn(false)
   }
   useEffect(()=>{
    handleLoggedIn()},[])
  return (<>
    {loggedIn ? <Outlet/> : <Navigate to="/signup"/>}
    
  </>
  )
}



export default PrivateRoutes