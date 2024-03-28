import React from 'react'
import styled from 'styled-components'
import { GoSignOut } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: #2B79DF;
height: 20px;
padding: 40px 50px;

@media(max-width: 768px){
    padding: 30px 20px;;
}
`;

const Div = styled.div`
font-size: 25px;
color: white;
`;

function Index() {

  const navigate=useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/Login'
  }
  return (
    <Wrapper>
        <Div onClick={()=>{navigate('/')}}>
          Job Application
        </Div>
        <Div>
          <div  onClick={()=>{handleLogout()}}><GoSignOut /></div>  
        </Div>
    </Wrapper>
  )
}

export default Index