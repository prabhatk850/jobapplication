import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { login } from '../Services/application';
// import {loginService} from "../services/auth_service"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { doLoggedIn } from ".";
import { MutatingDots } from "react-loader-spinner";
import Header from "../Header";
import { InputText } from 'primereact/inputtext';

import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
        


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 88vh;
  box-shadow: 0 4px 7px 0 rgba(0,0,0,0.2);
  background-image: linear-gradient(to top, cyan, #2C79DF); ;
  @media(max-width:768px){
    height: 92vh;
  }
`;
const Section1 = styled.div`
  background-color: rgb(44, 122, 223);
  height: 88vh;
  width: 500px;
  @media(max-width:1034px){
    width: 300px;
  }
`;
const Head = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
  margin: 50px 50px 0 0;
`;
const Section2 = styled.div`
  width: 100%;
`;

const AlreadyLogin = styled.span`
  margin: 0 10px 0 0;
  font-size: 18px;
  color: black;
  /* width: inherit; */
   @media (max-width:767px){
    font-size: 12px;
    cursor: pointer;
    margin: 25px 0px 0px;
  }
`;
const AlreadyLoginSingin = styled.span`
  font-weight: bold;
  color: cyan;
  font-size: 18px;
  cursor: pointer;
`;
const SingUpSection = styled.div`
  padding: 10% 30%;
  @media (max-width: 768px){
    /* margin-top:40px ; */
    padding: 10% 10%;
  }
`;
const Title = styled.div`
  font-size: 49px;
  font-weight: 700;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  color: cyan;
  line-height: 70px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  font-family: "Work Sans";
  @media (max-width: 768px){
   text-align: center;
   color: cyan;
   margin-top: 60px;
   font-size: 35px;
  }
`;
const Fileds = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled(InputText)`
  border: 0px;
  background: transparent;
  padding: 8px 0 0 0;
  margin-left: 30px;
  outline: none;
  border-bottom: 1px dashed rgb(192, 192, 192); 
  appearance: none;
  opacity: 1;
  color: rgb(82, 83, 84);
  font-family: "Work Sans";
  font-size: 15px;
  letter-spacing: 0px;
 
  width: 80%;
  @media (max-width:767px){
    color: black !important;
  }
`;
const SingUpInputStyle = styled.div`
  height: 70px;
  margin: 5px 0;
  overflow: hidden;
  opacity: 1;
  border-radius: 10px;
  padding: 15px 0 0 30px;
  outline: none;
  background-color:cyan;
  /* border-bottom: 1px solid rgb(192, 192, 192); */
  @media (max-width:767px){
     background-color:cyan;

    
  }
`;
// const Password1 = styled(Password)`
// border: none;
// outline: none;
 
//   width: 80%;
//   @media (max-width:767px){
//     color: black !important;
//   }
// `;
const SubmitButton = styled.button`
  height: 65px;
  background: #43A3FF;
  border-radius: 5px;
  width: 100%;
  margin: 42px 0 0 0;
  border: none;
  color: white;
  cursor: pointer;
  @media (max-width: 767px){
    margin: 35px 0;
    width: 100%;
  }
`;
const Features = styled.div`
    margin:15px;
    flex-grow: 1;
    overflow: hidden;
    font-size: 13px;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    letter-spacing: 0px;
    line-height: 16px;
    white-space: pre-line;
    opacity: 1;
    visibility: visible;
    color: rgb(255, 255, 255);
    font-family: "Work Sans";
`;
const HeadingFeature = styled.div`
padding: 50% 0 0 0;
text-align: center;
    flex-grow: 1;
    overflow: hidden;
    font-size: 25px;
    font-weight: 700;
    text-transform: none;
    text-align: center;
    letter-spacing: 0px;
    line-height: 35px;
    white-space: pre-line;
    opacity: 1;
    visibility: visible;
    color: rgb(255, 255, 255);
    font-family: "Work Sans";
`;
const Desktop = styled.div`
display: flex;
width: 100%;
@media (max-width:767px){
  display: none;

}
`;
const Mobile = styled.div`
width: 100%;
height: 100%;
@media (min-width: 768px){
  display: none;
}
`;
const Text = styled.div`
width: 100%;
color: cyan;
text-align: center;
`;
const Text1 = styled.div`
width: 100%;
margin-left: 10px;
font-size: 20px;
color: gray;
font-weight: 500;
`;

const Heading = styled.div`
font-size: 40px;
font-weight: 200;
text-transform: none;
text-align: left;
letter-spacing: 0px;
line-height: 35px;
white-space: pre-line;
opacity: 1;
visibility: visible;
color: cyan;
font-family: "Work Sans";
margin: 0 0 35px 0;
`;

const ForgetPassword = styled.div`
color: cyan;
cursor: pointer;
font-size: 12px;
margin: 25px 0 0 0;
`;

// const LoginOptions = styled.div`
// display: flex;
// width: 100%;
// gap: 5px;
// `;





function Login() {
  const navigate = useNavigate()
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [isLoading, setIsLoading] = useState(false);
  
  const clearForm = () => {
    setEmail("");
    setPassword("");
  }
  
  const handleLogin = () => {
    setIsLoading(true);
    const data = {email,password};
       login(data).then((res)=>{
         console.log("res11",res);
         if(res.status === 200){
       localStorage.setItem("token",res.data.token);
       localStorage.setItem("isAdmin",res.data.isAdmin);
       navigate("/");
        setIsLoading(false);
       toast.success("Login Successfull");
     // clear the states 
     clearForm()
     // close the window
    //  toggleLogin();
     }
     else{
       toast.error("Invalid Credentials");
       setIsLoading(false);
       clearForm()
     }
     }).catch((err)=>{
       console.log(err);
     })
    };

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        handleLogin()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

//   const clearState=()=>{
//     setPassword("")
//         setEmail("")
//         navigate("/")
//   }
  
//   function handleLogin() { 
//     let data = {
//       "email":email,
//       "password":password
//     }
  
//     console.log("log",data)
//     loginService(data).then((result)=>{
//       console.log("log",result)
//       if(result.status === 200) {
//         toast.success("Login Sucess")
//         doLoggedIn(result.data,clearState)
        
        
//       }
//       else{toast.error(result.data)
//         setPassword("")
//         setEmail("")}
//     }).catch((e)=>{
//       console.log("login err",e)
//     })
//   }
  return (

    <div style={{height:"85vh"}}>
      <ToastContainer/>
      <Header/>
    <Wrapper>
      <Desktop>
      <Section1>
        <HeadingFeature>Features</HeadingFeature>
        <Features>Easy</Features>
        <Features>Convenient</Features>
        <Features>Secure</Features>
        <Features>Many More </Features>
      </Section1>
      <Section2>
        <Head>
          <AlreadyLogin>Don&apos;t have an Account ?</AlreadyLogin>
          <AlreadyLoginSingin onClick={()=>{navigate("/signup")}}>Sign up</AlreadyLoginSingin>
        </Head>

        <SingUpSection>
        <Heading>Welcome to LogIn</Heading>
       <Fileds>
            <SingUpInputStyle>
              <div className="df"><EmailIcon/><Text1>Email</Text1></div>
            <Email value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
                 </SingUpInputStyle>
                 <SingUpInputStyle>
              <div className="df"><PasswordIcon/><Text1>Password</Text1></div>
              <Email  type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} feedback={false}  />
                 </SingUpInputStyle>
              </Fileds>
          <SubmitButton 
          onClick={(e)=>{handleLogin()}}
          >LogIn</SubmitButton>
          {isLoading ?
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#2C79DF"
  secondaryColor="#2C79DF"
  radius="15.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> : ""}
        </SingUpSection>
      </Section2>
      </Desktop>

      <Mobile>
        {/* <Header/> */}
      <Title>Welcome to Login</Title>
      <Text>Please sign in to your account</Text>
      <SingUpSection>
      <Fileds>
            <SingUpInputStyle>
              <div className="df"><EmailIcon/><Text1>Email</Text1></div>
            <Email value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
                 </SingUpInputStyle>
                 <SingUpInputStyle>
              <div className="df"><PasswordIcon/><Text1>Password</Text1></div>
              <Email  type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} feedback={false}/>
                 </SingUpInputStyle>
              </Fileds>
              
            <ForgetPassword>Forgot Password ?</ForgetPassword>
          <SubmitButton
          onClick={handleLogin}
          >Sign In</SubmitButton>
          <AlreadyLogin onClick={()=>{navigate("/signup")}}>Don&apos;t have an Account ?</AlreadyLogin>

          {isLoading ?
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#2C79DF"
  secondaryColor="#2C79DF"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> : ""}
        </SingUpSection>
      </Mobile>
    </Wrapper>
    </div>
  );
}

export default Login;