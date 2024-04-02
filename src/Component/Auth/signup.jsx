import React,{useEffect,useState}  from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/application";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { MutatingDots } from "react-loader-spinner";


const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Section1 = styled.div`
  background-color: rgb(44, 122, 223);
  height: 100vh;
  width: 500px;
  @media(max-width: 1024px){
    width: 300px;
  }
`;
const Head = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
  margin: 50px 50px 0 0;
   @media (max-width: 768px){
   display: flex;
   justify-content: center;
   font-size: 12px;
    margin: 8px 0 0 0;
   }

`;
const Section2 = styled.div`
  width: 100%;
`;

const AlreadyLogin = styled.span`
  margin: 0 10px 0 0;
`;
const AlreadyLoginSingin = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
const SingUpSection = styled.div`
  padding: 10% 30%;
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
  color: rgb(39, 43, 48);
  font-family: "Work Sans";
   @media (max-width: 768px){
   text-align: center;
   font-size: 35px;
   color: #000000;
   margin-top: 100px;
  }
`;
const Fileds = styled.div`
  display: flex;
  flex-direction: column;
   @media (max-width: 768px){
    margin-top:40px ;
    padding: 10% 20%;
  }
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
  color: black;
  @media (max-width:767px){
    color: black;
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
   @media (max-width: 768px){
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
  color: black;
  @media (max-width:767px){
    color: black;
  }
`;
const RePassword = styled.input`
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
  color: black;
  @media (max-width:767px){
    color: black;
  }
`;

const TileDesc = styled.div``;
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
     margin: 90px 0 0 0;
  border-radius: 30px;
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

const Error=styled.div`
color:red;
text-align: center;
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

function Singup() {

  const navigate =useNavigate()
  const [error,setError] =useState("")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setcnfPassword] = useState('');

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        handlesignUpData()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  const [isLoading, setIsLoading] = useState(false);

 
  const handlesignUpData= async()=>{
    if(name==="" || email === "" || password==="" || cnfPassword===""){
      setError("Enter all fields")
    }
    else if(password !== cnfPassword ){
      setError("Password and Confirm password does not matched")
    }
    else {
      const data = { name,
      email,
      password
    }
    setIsLoading(true);
   
    
      signUp(data).then((result)=>{

        console.log("submit",result.status)
        if(result.status === 200){
          setIsLoading(false);
          console.log("sub",result.data)
          toast.success("Signup Successfull")
          setName("")
          setPassword("")
          setEmail("") 
          setError("")
          navigate("/login")      
        }
        else {toast.error(result.data) 
        setIsLoading(false);}       
      })
         
   }}


  return (
    <Wrapper> 
      <Desktop>

      <ToastContainer />
      <Section1>
        <HeadingFeature>Features</HeadingFeature>
        <Features>Easy</Features>
        <Features>Convenient</Features>
        <Features>Secure</Features>
        <Features>Many More </Features>
      </Section1>
      <Section2>
        <Head>
          <AlreadyLogin>Already a member ?</AlreadyLogin>
          <AlreadyLoginSingin onClick={()=>{navigate("/login")}}>Sign in</AlreadyLoginSingin>
        </Head>

        <SingUpSection>
          <Title>SignUp</Title>
          <TileDesc>Signup with your Email</TileDesc>
          <Fileds>
           
          <SingUpInputStyle>
              <Email value={name} onChange={(e)=>(setName(e.target.value))}  placeholder="Name"></Email>
            </SingUpInputStyle>

            <SingUpInputStyle>
              <Email value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Email"></Email>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <Password type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Password"></Password>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <RePassword type="password" value={cnfPassword} onChange={(e)=>(setcnfPassword(e.target.value))} placeholder="Repeat Password"></RePassword>
            </SingUpInputStyle>
          </Fileds>
          <SubmitButton 
          onClick={()=>{handlesignUpData()}}
          >Submit</SubmitButton>
          {isLoading ?
        <div
          style={{
            position: "fixed",
            top: "50%",
            backgroundColor:"white",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="blue"
  secondaryColor="blue"
  radius="15.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> : ""}
          <Error>{error}</Error>
          
        </SingUpSection>
      </Section2>
      </Desktop>
      <Mobile>
      <Title>Create New Account</Title>
      <Text>Please fill in the form to Continue</Text>
      <Fileds>
           
          <SingUpInputStyle>
              <Email value={name} onChange={(e)=>(setName(e.target.value))}  placeholder="Name"></Email>
            </SingUpInputStyle>

            <SingUpInputStyle>
              <Email value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Email"></Email>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <Password type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Password"></Password>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <RePassword type="password" value={cnfPassword} onChange={(e)=>(setcnfPassword(e.target.value))} placeholder="Repeat Password"></RePassword>
            </SingUpInputStyle>
          <SubmitButton 
          onClick={()=>{handlesignUpData()}}
          >Sing Up</SubmitButton>
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
  color="blue"
  secondaryColor="blue"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> : ""}
          <Error>{error}</Error>
          <Head>
          <AlreadyLogin>Have An Account ?</AlreadyLogin>
          <AlreadyLoginSingin onClick={()=>{navigate("/login")}}>Sign in</AlreadyLoginSingin>
        </Head>
          </Fileds>
      
      </Mobile>
    </Wrapper>
  );
}

export default Singup;