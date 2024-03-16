import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: #2B79DF;
height: 20px;
padding: 40px 50px;
`;

const Div = styled.div`
font-size: 25px;
color: white;
`;

function Index() {

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/Login'
  }
  return (
    <Wrapper>
        <Div>
          Job Application
        </Div>
        <Div>
          <div onClick={()=>{handleLogout()}}>LogOut</div>  
        </Div>
    </Wrapper>
  )
}

export default Index