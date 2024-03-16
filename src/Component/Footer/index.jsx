import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const EachSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 30px;
  background-color: #085A9C;
  color: white;
`;


const properties = {
    prevArrow: <button style={{display:"none"}}/>,
    nextArrow: <button style={{display:"none"}}/> 
}

const Index = () => {
   
  return (
    <Slide {...properties} duration="3000" transitionDuration="300">
      <EachSlide>
        Managed By Prabhat Kumar Verma
      </EachSlide>
      <EachSlide>
       Developed By Prabhat
      </EachSlide>
      <EachSlide>
        Designed By Prabhat
      </EachSlide>
    </Slide>
  );
};

export default Index;