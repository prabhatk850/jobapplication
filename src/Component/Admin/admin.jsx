import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { viewByAdmin } from '../Services/application';
import Header from '../Header'
import Footer from '../Footer'

const Wrapper = styled.div``;

const Div = styled.div`
margin: 20px;
padding: 20px;
border: 1px solid #1f1010;
border-radius: 10px;
`;
const Input = styled.input`
margin: 20px;
padding: 20px;
font-size: 20px;
border: 1px solid #1f1010;
border-radius: 10px;
`;

const Fields = styled.div`
margin: 5px;
`;

const Button = styled.div`
background-color: #2196F3;
padding: 0 15px;
border-radius: 10px;
align-items: center;
display: flex;
color: white;
cursor: pointer;
height: 50px;
margin-right: 40px;

`;

function Admin() {
  const [data,setData]=useState([{}])

       

    useEffect(() => {
        viewByAdmin().then((result)=>{
            setData(result.data)
            console.log("result from viewByAdmin",result)
        })
    },[])

  return (
    <>
    <Header/>
    <Wrapper>
     <div className='df' style={{justifyContent:"end",alignItems:"center"}}> <Input type='text' placeholder='Search' style={{width:"40%"}}></Input><Button>Search</Button></div>
      {data.map((item,index)=>{
          return(
              <Div key={index}>
                  <Fields>Name - {item.name}</Fields>
                  <Fields>Email - {item.email}</Fields>
                  <Fields>Phone No.- {item.phoneno}</Fields>
                  <Fields>Skills - {item.skills}</Fields>
              </Div>
          )
      })
    }
    </Wrapper>
    <Footer/>
    </>
  )
}

export default Admin