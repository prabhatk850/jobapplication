import React, { useEffect, useState } from 'react'
import {  Outlet } from 'react-router'
import { isUserAdmin} from '../Services/application'

const Adminroutes=()=>{
    const [access,setAccess]=useState(false)
    const handleAccess = ()=>{
      console.log("first",isUserAdmin())
      const isAdmin = isUserAdmin()
      if(isAdmin === "true" || isAdmin === true){
          setAccess(true);
     }
     else setAccess(false)
    }
    useEffect(()=>{
      handleAccess()},[])
   return (<>
     {access ? <Outlet/> : <div>You don&apos;t have Access to this page</div>}
     
   </>
   )
  }

export default Adminroutes