import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
`;

function Thankyou() {

    const navigate = useNavigate();

    const onTop = () => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            navigate('/')
        }, 4000);
    }
    useEffect(() => {
        onTop()
    }, [navigate]);

    return (
        <Wrapper>
            <img style={{width:"100%",height:"110vh"}}  src="./thankyou.jpeg" alt="Thank you" />
        </Wrapper>
    )
}

export default Thankyou