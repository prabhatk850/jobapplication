import { ToastContainer,toast } from 'react-toastify';        
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const Wrapper = styled.div`
padding: 10%;
background-color: aliceblue;
display: flex;
flex-direction: column;
color: #102465d9;
gap: 20px;
@media (max-width: 768px){
    padding: 5%;

}
`;

const Fields = styled.div`
display: flex;
align-items: center;

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
margin: 0 0 0 10px;
color: white;

@media (max-width: 768px){
    height: 25px;
    width: 25px;
    margin: 0 0 0 15px;

}
`;




function AdminNext(){

    const {state} = useLocation();
    const {name,email,phoneno,dob,skills,jobprofile,secondarySkills,city,readytolocate,experience,comment,degree,resume,states,coverletter,bestTimeToReach,additionalExperience} = state || {};

const [locate,setLocate]=useState("");
const relocate=()=>{
    if(readytolocate===true){
        setLocate("Yes")
    }
    else{
        setLocate("No")
    }
}


useEffect(()=>{
    window.scrollTo(0,0);
    relocate()
})



function handleCopy (e){
    navigator.clipboard.writeText(e)
    toast.success("Copied!")
  }


    return(
        <Wrapper>
            <ToastContainer/>
            <h1>User Details</h1>
            <Fields style={{fontSize:"20px"}} className='df '>Applied for- <h4> {jobprofile}</h4></Fields>
            <Fields style={{fontSize:"25px"}} className='df '>Name- <h2> {name}</h2></Fields>
            <div style={{fontSize:"20px"}} className='df'>Email-<h4> {email}</h4><Buttoncontainer><FaRegCopy style={{height:"15px",width:"15px"}} onClick={()=>handleCopy(email)}/></Buttoncontainer></div>
            <div style={{fontSize:"20px"}} className='df'>Phone no.-<h4> {phoneno}</h4><Buttoncontainer><FaRegCopy style={{height:"15px",width:"15px"}} onClick={()=>handleCopy(phoneno)}/></Buttoncontainer></div>
            {/* <Div>Phone no. - {phoneno}</Div><Buttoncontainer><FaRegCopy style={{height:"20px",width:"20px"}} onClick={()=>handleCopy(phoneno)}/></Buttoncontainer> */}
            <Div>Date of Birth- {dob}</Div>
            <Div className='df'>
                    <Fields>Skills - </Fields> 
                    <div className='skilldf'> 
                   {skills.map((skills,index)=>( <Fields key={index}> {skills},</Fields>))}
                 </div>
            </Div>

                 
            <Div className='df'>
                    <Fields>Secondary Skills - </Fields> 
                    <div className='skilldf'> 
                    {secondarySkills.map((secondarySkills,index)=>
                  (<Fields key={index}>{secondarySkills},</Fields>))}</div>
            </Div>      
           
            <Div>State- {states}</Div>
            <Div>City- {city}</Div>
            <Div>Ready to Locate- {locate}</Div>
            <Div>Experience- {experience}</Div>
            <Div>Degree- {degree}</Div>
            <Div className='df' onClick={() => window.open(resume, '_blank')}>Resume- <div style={{color:"blue"}}>{"View"}</div> </Div>
            <Div className='df' onClick={() => window.open(coverletter, '_blank')}>Coverletter- <div style={{color:"blue"}}>{"View"}</div></Div>
            <Div>Best time to reach- {bestTimeToReach}</Div>
            <Div>Additional Experience- {additionalExperience}</Div>
            <Div>Comment- {comment}</Div>
            
            
        </Wrapper>
    )
}

export default AdminNext