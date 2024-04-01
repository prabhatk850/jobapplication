import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { login } from '../Services/application';
// import {loginService} from "../services/auth_service"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { doLoggedIn } from ".";
import { Oval } from "react-loader-spinner";


const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Section1 = styled.div`
  background-color: rgb(44, 122, 223);
  height: 100vh;
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
   @media (max-width:767px){
    font-size: 12px;
    cursor: pointer;
    margin: 8px 0px 0px;
  }
`;
const AlreadyLoginSingin = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
const SingUpSection = styled.div`
  padding: 10% 30%;
  @media (max-width: 768px){
    margin-top:40px ;
    padding: 10% 20%;
  }
`;
const Title = styled.div`
  font-size: 49px;
  font-weight: 700;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 70px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(0, 0, 0);
  font-family: "Work Sans";
  @media (max-width: 768px){
   text-align: center;
   color: #000000;
   margin-top: 100px;
  }
`;
const Fileds = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled.input`
  border: 0px;
  background: transparent;
  padding: 0px 8px;
  margin: 0px;
  outline: none;
  appearance: none;
  opacity: 1;
  color: rgb(82, 83, 84);
  font-family: "Work Sans";
  font-size: 15px;
  letter-spacing: 0px;
  padding: 14px;
  width: 80%;
  @media (max-width:767px){
    color: black !important;
  }
`;
const SingUpInputStyle = styled.div`
  height: 45px;
  margin: 5px 0;
  overflow: hidden;
  opacity: 1;
  outline: none;
  background-color: rgb(250, 250, 250);
  border-radius: 11px;
  border: 1px solid rgb(192, 192, 192);
  @media (max-width:767px){
     background-color: rgb(250, 250, 250);
    
  }
`;
const Password = styled.input`
  border: 0px;
  background: transparent;
  padding: 0px 8px;
  margin: 0px;
  outline: none;
  appearance: none;
  opacity: 1;
  color: rgb(82, 83, 84);
  font-family: "Work Sans";
  font-size: 15px;
  letter-spacing: 0px;
  padding: 14px;
  width: 80%;
  @media (max-width:767px){
    color: black !important;
  }
`;
const SubmitButton = styled.button`
  height: 65px;
  background: rgb(68, 163, 255);
  border-radius: 5px;
  width: 100%;
  margin: 10px 0 0 0;
  border: none;
  color: white;
  cursor: pointer;
  @media (max-width: 767px){
    margin: 90px 0;
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
@media (min-width: 768px){
  display: none;
}
`;
const Text = styled.div`
width: 100%;
color: #000000;
text-align: center;
`;
const ForgetPassword = styled.div`
color: white;
cursor: pointer;
font-size: 12px;
margin: 8px 0 0 0;
`;
const LoginOptions = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`


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
    <Wrapper>
      <ToastContainer/>
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
          <Title>Login</Title>
          <Fileds>
           
            <SingUpInputStyle>
              <Email  value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></Email>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <Password type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></Password>
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
          <Oval
            visible={true}
            height="90"
            width="90"
            color="#83f7ff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> : ""}
        </SingUpSection>
      </Section2>
      </Desktop>

      <Mobile>
      <Title>Welcome Back!</Title>
      <Text>Please sign in to your account</Text>
      <SingUpSection>
          <Fileds>
           
            <SingUpInputStyle>
              <Email  value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></Email>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <Password type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></Password>
            </SingUpInputStyle>
            <LoginOptions><AlreadyLogin onClick={()=>{navigate("/signup")}}>Don&apos;t have an Account ?</AlreadyLogin>
            <ForgetPassword>Forgot Password ?</ForgetPassword></LoginOptions>
            
          </Fileds>
          <SubmitButton
          onClick={handleLogin}
          >Sign In</SubmitButton>
          {isLoading ?
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Oval
            visible={true}
            height="130"
            width="130"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> : ""}
        </SingUpSection>
      </Mobile>
    </Wrapper>
  );
}

export default Login;