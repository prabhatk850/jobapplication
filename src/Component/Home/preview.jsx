import React, { useEffect } from "react";
import styled from "styled-components";
import { doLoggedOut } from "../Services/application";
import { useLocation, useNavigate} from "react-router-dom";


const Wrapper = styled.div`
padding: 10%;
display: flex;
align-items: center;
justify-content: center;
background-color: aliceblue;
@media (max-width: 768px){
    padding: 5%;

}
`;

const Heading = styled.div`
color: #1e3890;
font-size: 40px;
margin-bottom: 50px;
font-weight: 600;

@media (max-width: 768px){
    font-size: 30px;

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
font-size: 20px;
color: gray;
`;

const Fields = styled.div`
margin: 15px 0;
font-size: 20px;
color: #1E3790;
display: flex;
gap: 10px;
align-items: center;
@media (max-width: 768px){
    font-size: 17px;
margin: 40px 0;
}
`;




function Preview() {
    
    const [iflocate,setIflocate]=React.useState(false)
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
     
    },[]);

    const handlelogout=()=>{
        doLoggedOut()
        navigate('/login')
    }

   
        

    return (
        <Wrapper>
           <Div>
            <Heading>Preview</Heading>
                <>
                <Fields>Applied Position- {data.jobprofile}</Fields>
                <Fields>Name- <h2> {data.name}</h2></Fields>
                <Fields>Email-   <Div> {data.email}</Div></Fields>
                <Fields>Phoneno.-   <Div> {data.phoneno}</Div></Fields>
                <Fields> Date of Birth-  <Div> {data.dob}</Div></Fields>
                    
                    
                    <Fields>Skills- 
                    <div className='skilldf'> {data.skills.map((skill,index)=>
                  (<Div key={index}>{skill}, </Div>))}</div>
                    </Fields> 
                  
                 
                 
                    <Fields>Secondary Skills-  
                    <div className='skilldf'> {data.secondarySkills.map((secondarySkills,index)=>
                  (<Div key={index}> {secondarySkills}, </Div>))}</div>
                  </Fields>
                    
                    
             <Fields>City- <Div>{data.city}</Div></Fields>
             <Fields>State- <Div>{data.state}</Div></Fields>
             <Fields>Ready to Locate- <Div>{iflocate}</Div></Fields>        
             <Fields>Experience- <Div>{data.experience}</Div></Fields>       
             <Fields>Comment- <Div>{data.comment}</Div></Fields>       
             <Fields>Degree- <Div>{data.degree}</Div></Fields>       
             <Fields>Resume- <Div>{data.resume.name}</Div></Fields>       
             <Fields>coverletter- <Div>{data.coverletter.name}</Div></Fields>       
             <Fields>BestTimeToReach- <Div>{data.bestTimeToReach}</Div></Fields>       
             <Fields>Additional Experience- <Div>{data.additionalExperience}</Div></Fields>       
                    
                    
                </>

                <div style={{display:"flex",justifyContent:"center",marginTop:"110px"}}><Button onClick={()=>navigate('/')}>Edit</Button></div>
                
                <div style={{display:"flex",justifyContent:"center"}}><Button onClick={handlelogout}>Log out</Button></div>
           </Div>
        </Wrapper>
    )
}

export default Preview