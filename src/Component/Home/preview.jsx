import React, { useEffect } from "react";
import styled from "styled-components";
import { doLoggedOut } from "../Services/application";
import { useLocation, useNavigate} from "react-router-dom";


const Wrapper = styled.div`
padding: 4%;
display: flex;
align-items: center;
justify-content: center;
background-color: aliceblue;
@media (max-width: 768px){
    padding: 5%;

}
`;

const Input = styled.div`
margin: 10px 0;
border: none;
width: 96%;
outline: 1px solid #ccc;
border-radius: 5px;
padding: 5px 10px;
`;


const Heading=styled.div`
font-size: 20px;
color: Blue;
margin: 20px 0 0 0;
font-weight: 200;

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
font-size: 20px;
color: gray;
`;

const FormContainer = styled.div`
justify-content: space-between;
display: flex;
gap: 100px;
@media (max-width: 768px){
  display: block;
}
`;

const Flex=styled.div`
width: 50%;
`;




function Preview() {
    
    const [iflocate,setIflocate]=React.useState(false)
    const [negotiation,setNegotiation]=React.useState(false)
    // const [application, setApplication] = React.useState([]);

    const navigate = useNavigate();

    const {state}= useLocation();

    const {data}=state || {};

    useEffect(() => {
        console.log("first",data)
        window.scrollTo(0, 0);   
        if(data.readytolocate===true){
            setIflocate("Yes")
        }
        else{
            setIflocate("No")
        }  
        if(data.noticenegotiable===true){
            setNegotiation("Yes")
        }else{
            setNegotiation("No")
        }
     
    },[]);

    const handlelogout=()=>{
        doLoggedOut()
        navigate('/login')
    }

   
        

    return (
        <Wrapper>
           <Div>
            <h1 style={{color:"blue"}}>Preview</h1>
                
<FormContainer>

<Flex>
  

<Input >Position Applied- {data.jobprofile}</Input >
 

<Input style={{margin:"50px 0 0 0"}}>{data.name}</Input >
<Input>{data.email}</Input >
<Input>{data.phoneno}</Input>

<Heading>Qualifications</Heading>

<Input>{data.degree}</Input> 
<Input>Total Experience- {data.experience}</Input> 
<Input>Relevent Experience- {data.releventexperience}</Input> 
<Input>Domain- {data.additionalExperience}</Input> 
<Heading>Location</Heading>

<Input>City- {data.city}</Input> 
<Input>State- {data.state}</Input> 

<Input>Ready to Locate- {iflocate}</Input> 

</Flex>

<Flex>

<Heading style={{margin:"60px 0 0 0"}}>Skills</Heading>
<Input className="df">Primary Skills- 
                    <div className='skilldf'> {data.skills.map((skill,index)=>
                  (<Div key={index}>{skill}, </Div>))}</div>
                    </Input> 
                  
                 
                 
                    <Input className="df">Secondary Skills-  
                    <div className='skilldf'> {data.secondarySkills.map((secondarySkills,index)=>
                  (<Div key={index}> {secondarySkills}, </Div>))}</div>
                  </Input>
                    



<Input>Coverletter- {data.coverletter.name}</Input>
<Input>Resume- {data.resume.name}</Input>


<Heading style={{margin:"40px 0 0 0"}}>Additional Details</Heading>

<Input>Expected CTC- {data.expectedSalary}</Input>
<Input>Current CTC- {data.currentSalary}</Input>

<div style={{gap:"15px"}} className="df">
<Input> Notice- {data.noticeperiod}</Input> 

<Input>Negotiable- {negotiation}</Input>
</div>
<Input>Time to reach out- {data.bestTimeToReach}</Input>


<Input> {data.comment}</Input>
<div className="df end">
<div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}><Button onClick={()=>navigate('/')}>Edit</Button></div>
                
                <div style={{display:"flex",marginTop:"50px",justifyContent:"center"}}><Button onClick={handlelogout}>Log out</Button></div>
</div>
</Flex>
</FormContainer>

                
           </Div>
        </Wrapper>
    )
}

export default Preview