import React from 'react';
import "./App.css";
import Home from './Component/Home';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Signup from './Component/Auth/signup';
import Login from './Component/Auth/login';
import PrivateRoutes from './Component/PrivateRoutes/privateroutes';
import Admin from './Component/Admin/admin';
import Thankyou from './Component/Home/thankyou';
import Adminroutes from './Component/PrivateRoutes/adminroutes';

function Router (){
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

            <Route path="/" element={<PrivateRoutes/>}>
            <Route path="/" element={<Home/>}/> 
            <Route path="/thankyou" element={<Thankyou/>} />
            </Route> 

            <Route path='/admin' element={<Adminroutes/>}>
            <Route path='/admin' element={<Admin/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    ) 
}

export default Router