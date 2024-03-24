import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate,useLocation } from 'react-router-dom';
import {viewApplication} from '../Services/application'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #4284e1;
`;

const InnerContainer = styled.div`
background-color: #eed6d6d7;
padding: 70px 30px;
border-radius: 10px;
@media(max-width: 768px){
    margin: 20px;

}
`;

const Heading = styled.div`
font-size: 60px;
@media(max-width: 768px){
   font-size: 40px;

}
`;

const SubHead = styled.div`
font-size: 30px;
margin: 20px;
@media(max-width: 768px){
   font-size: 20px;

}
`;

const Applino = styled.div`
font-size: 20px;
font-weight: 600;
display: flex;
margin-left: 10px;
gap: 10px;
@media(max-width: 768px){
   font-size: 13px;

}
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
            <Applino >Application: <div style={{fontWeight:"200"}}>{_id}</div> </Applino>
            </InnerContainer>

            <Div><Button onClick={()=>navigate('/')}>edit</Button>
            <Button onClick={()=>navigate('/preview',{state:{data}})}>Preview</Button></Div>
            </div>
           
        </Wrapper>
    )
}

export default Thankyou