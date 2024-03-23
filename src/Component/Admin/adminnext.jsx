
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react';

const Wrapper = styled.div`
margin: 10%;
`;

const Fields = styled.div`

`;

const Div = styled.div`
margin: 10px 0;
font-size: 20px;
`;


function AdminNext(){

    const {state} = useLocation();
    const {name,email,phoneno,dob,skills,secondarySkills,city,readytolocate,experience,comment,degree,resume,states,coverletter,bestTimeToReach,additionalExperience} = state || {};

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





    return(
        <Wrapper>
            <h1>User Details</h1>
            <Div>Name- {name}</Div>
            
            <Div >Email- {email}</Div>
            <Div>Phone no. - {phoneno}</Div>
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
            <Div>Comment- {comment}</Div>
            <Div>Degree- {degree}</Div>
            <Div className='df' onClick={() => window.open(resume, '_blank')}>Resume- <div style={{color:"blue"}}>{"View"}</div> </Div>
            <Div className='df' onClick={() => window.open(coverletter, '_blank')}>Coverletter- <div style={{color:"blue"}}>{"View"}</div></Div>
            <Div>Best time to reach- {bestTimeToReach}</Div>
            <Div>Additional Experience- {additionalExperience}</Div>
            
        </Wrapper>
    )
}

export default AdminNext