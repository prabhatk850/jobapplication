import React, { useEffect } from "react";
import styled from "styled-components";
// import { viewApplication } from "../Services/application";
import { useLocation } from "react-router-dom";
// import { application } from "express";

const Wrapper = styled.div`
margin: 10%;
`;

const Heading = styled.div`
color: #1e3890;
font-size: 40px;
font-weight: 600;
`;

const Div = styled.div`
margin: 10px 0;
`;



function Preview() {
    
    // const [application, setApplication] = React.useState([]);

    const {state}= useLocation();

    const {data}=state;

    useEffect(() => {
        window.scrollTo(0, 0);     
     
    },[]);
   


    return (
        <Wrapper>
            <Heading>Preview</Heading>
           <Div>
                <div>
                    <h1>{data.name}</h1>
                    <h2>{data.email}</h2>
                    <h3>{data.phoneno}</h3>
                    <h4>{data.dob}</h4>
                </div>
           </Div>
        </Wrapper>
    )
}

export default Preview