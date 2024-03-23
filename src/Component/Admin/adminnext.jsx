import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

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
    const {name,email,phone,dob,skills,secondarySkills,city,readytolocate,experience,comment,degree,resume,coverletter,bestTimeToReach,additionalExperience} = state || {};
    useEffect(() => {
        console.log("first",state)
    },[])

    return(
        <Wrapper>
            <h1>User Details</h1>
            <Div>Name- {name}</Div>
            <Div>Email- {email}</Div>
            <Div>Phone no. - {phone}</Div>
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
           
            {/* <Div>State- {land}</Div> */}
            <Div>City- {city}</Div>
            <Div>Ready to Locate- {readytolocate}</Div>
            <Div>Experience- {experience}</Div>
            <Div>Comment- {comment}</Div>
            <Div>Degree- {degree}</Div>
            <Div>Resume- {resume}</Div>
            <Div>Coverletter- {coverletter}</Div>
            <Div>Best time to reach- {bestTimeToReach}</Div>
            <Div>Additional Experience- {additionalExperience}</Div>
            
        </Wrapper>
    )
}

export default AdminNext