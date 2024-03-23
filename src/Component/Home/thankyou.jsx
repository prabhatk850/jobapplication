import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate,useLocation } from 'react-router-dom';
import {viewApplication} from '../Services/application'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
`;

const InnerContainer = styled.div`
background-color: #eed6d64b;
padding: 70px 30px;
border-radius: 10px;

`;

const Heading = styled.div`
font-size: 60px;
`;

const SubHead = styled.div`
font-size: 30px;
margin: 20px;
`;

const Button = styled.button`
padding: 10px 20px;
margin: 10px;
border-radius: 10px;
background-color: #1f1010;
color: white;
border: none;
cursor: pointer;
font-weight:200;
font-size: 18px;
`;

const Div = styled.div` 
display: flex;
margin-top: 20px;
justify-content: end;
`;



function Thankyou() {

    const navigate = useNavigate();

    const {state}= useLocation();
    const {data}=state;

    const [ _id, setId] = React.useState('')

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
        console.log("first",data)
        viewApplication().then((res) => {
            setId(res.data._id)
        }).catch((error) => {
            console.log("error", error)
            })
    }, []);

    return (
        <Wrapper>
            <div>
            <InnerContainer>
            <Heading>Thank you for your submission</Heading>
            <SubHead>Your application has been submitted successfully</SubHead>
            <h3 style={{marginLeft:"20px"}}>Appplication: {_id} </h3>
            </InnerContainer>

            <Div><Button onClick={()=>navigate('/')}>edit</Button>
            <Button onClick={()=>navigate('/preview',{state:{data}})}>Preview</Button></Div>
            </div>
           
        </Wrapper>
    )
}

export default Thankyou