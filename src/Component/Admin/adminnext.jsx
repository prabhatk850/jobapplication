import { ToastContainer,toast } from 'react-toastify';        
import styled from 'styled-components';
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { FaRegCopy,FaLongArrowAltLeft  } from 'react-icons/fa';




const Wrapper = styled.div`
padding: 10%;
background-color: aliceblue;
display: flex;

color: #5e6680d9;
gap: 20px;
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
const FormContainer = styled.div`
justify-content: space-between;
display: flex;
gap: 100px;
@media (max-width: 768px){
  display: block;
}
`;

const Flex = styled.div`
width: 50%;
`;


const Div = styled.div`
margin: 10px 0;
font-size: 20px;

@media (max-width: 768px){
    font-size: 17px;
    margin: 20px 0;

}
`;

const Buttoncontainer = styled.div`
height: 30px;
width: 30px;
border-radius: 5px;
background-color: #1f1010;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 12px 0 0 10px;
color: white;

@media (max-width: 768px){
    height: 25px;
    width: 25px;
    margin: 0 0 0 15px;

}
`;

const Hover = styled.div`

&:hover{
    cursor: pointer;
}
`;




function AdminNext(){

    const navigate = useNavigate();

    const {state} = useLocation();
    const {name,email,phoneno,expectedSalary,noticenegotiable,releventexperience,noticeperiod,currentSalary,skills,jobprofile,secondarySkills,city,readytolocate,experience,comment,degree,resume,states,coverletter,bestTimeToReach,additionalExperience} = state || {};



const [iflocate,setIflocate]=useState(false)
const [negotiation,setNegotiation]=useState(false)



useEffect(()=>{
    window.scrollTo(0,0);
    if(readytolocate===true){
        setIflocate("Yes")
    }
    else{
        setIflocate("No")
    }  
    if(noticenegotiable===true){
        setNegotiation("Yes")
    }else{
        setNegotiation("No")
    }
})



function handleCopy (e){
    navigator.clipboard.writeText(e)
    toast.success("Copied!")
  }


    return(
        
        <Wrapper>
            <ToastContainer/>
            
           <Div>
            
           <div style={{display:"flex",margin:"50px 0 10px 0",alignItems:"center",fontSize:"25px",color:"black",justifyContent:"start"}}><FaLongArrowAltLeft /><div onClick={(e)=>{navigate('/admin')}}>Back</div></div>

            <h1 style={{color:"blue"}}>Preview</h1>
                
<FormContainer>

<Flex>
  

<Input >Position Applied- {jobprofile}</Input >
 

<Input style={{margin:"50px 0 0 0"}}>{name}</Input >
<div className='df end'><Input>{email}</Input ><Buttoncontainer><FaRegCopy style={{height:"15px",width:"15px"}} onClick={()=>handleCopy(email)}/></Buttoncontainer></div>
<Input>{phoneno}</Input>

<Heading>Qualifications</Heading>

<Input>{degree}</Input> 
<Input>Total Experience- {experience}</Input> 
<Input>Relevent Experience- {releventexperience}</Input> 
<Input>Domain- {additionalExperience}</Input> 
<Heading>Location</Heading>

<Input>City- {city}</Input> 
<Input>State- {states}</Input> 

<Input>Ready to Locate- {iflocate}</Input> 

</Flex>

<Flex>

<Heading style={{margin:"60px 0 0 0"}}>Skills</Heading>
<Input className="df aic">Primary Skills-  
                    <div className='skilldf'> {skills.map((skill,index)=>
                  (<Div key={index}> {skill}, </Div>))}</div>
                    </Input> 
                  
                 
                 
                    <Input className="df aic">Secondary Skills-   
                    <div className='skilldf'> {secondarySkills.map((secondarySkills,index)=>
                  (<Div key={index}> {secondarySkills}, </Div>))}</div>
                  </Input>
                    



{/* <Input>Coverletter- {coverletter}</Input>
<Input>Resume- {resume}</Input> */}

            <Div className='df' onClick={() => window.open(coverletter, '_blank')}>Coverletter- <Hover style={{color:"blue"}}>{"View"}</Hover></Div>
            <Div className='df' onClick={() => window.open(resume, '_blank')}>Resume- <Hover style={{color:"blue"}}>{"View"}</Hover> </Div>
        


<Heading style={{margin:"40px 0 0 0"}}>Additional Details</Heading>

<Input>Expected CTC- {expectedSalary}</Input>
<Input>Current CTC- {currentSalary}</Input>

<div style={{gap:"15px"}} className="df">
<Input> Notice- {noticeperiod}</Input> 

<Input>Negotiable- {negotiation}</Input>
</div>
<Input>Time to reach out- {bestTimeToReach}</Input>


<Input> {comment}</Input>


<div className='end' style={{display:"flex",marginTop:"50px"}}><Button onClick={()=>navigate('/admin')}>Back</Button>
              
<Button>Contact</Button>
</div>


</Flex>
</FormContainer>

                
           </Div>
        </Wrapper>
    )
}

export default AdminNext