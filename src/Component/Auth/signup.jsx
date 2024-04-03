import React,{useEffect,useState}  from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/application";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { MutatingDots } from "react-loader-spinner";
import Header from "../Header";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { InputText } from "primereact/inputtext";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';


const Wrapper = styled.div`
 display: flex;
  width: 100%;
  height: 88vh;
  box-shadow: 0 4px 7px 0 rgba(0,0,0,0.2);
  background-image: linear-gradient(to top, cyan, #2C79DF); ;
  @media (max-width: 768px){
    height: 100%;
  }
`;
const Section1 = styled.div`
  background-color: rgb(44, 122, 223);
  height: 88vh;
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
  font-size: 18px;
  color: black;
  /* width: inherit; */
   @media (max-width:767px){
   font-size: 15px;
    cursor: pointer;
    margin: 25px 0px 0px;
    color: black;
  }
`;
const AlreadyLoginSingin = styled.span`
  font-weight: 800;
  color: cyan;
  font-size: 18px;
  cursor: pointer;
  @media (max-width:767px){
   font-size: 15px;
    cursor: pointer;
    margin: 25px 0px 20px 0;
    color: black;
  }
`;
const SingUpSection = styled.div`
  padding: 30px 15%;
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
  color: cyan;
  font-family: "Work Sans";
   @media (max-width: 768px){
   text-align: center;
   font-size: 35px;
   color: #000000;
   margin-top: 50px;
  }
`;
const Fileds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
   @media (max-width: 768px){
    margin-top:10px ;
    padding: 10% 10%;
  }
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
  margin: 25px 0;
  overflow: hidden;
  opacity: 1;
  width: 330px;
  border-radius: 10px;
  padding: 15px 0 0 30px;
  outline: none;
  background-color:cyan;
  /* border-bottom: 1px solid rgb(192, 192, 192); */
  @media (max-width:767px){
     background-color:cyan;
    width: 90%;
    margin: 10px 0;
  }
`;


const TileDesc = styled.div`
  font-size: 20px;
  color: cyan;
  font-weight: 500;
  margin-bottom: 35px;
`;
const SubmitButton = styled.button`
  height: 65px;
  background: rgb(68, 163, 255);
  border-radius: 5px;
  width: 100%;
  margin: 40px 0 0 0;
  border: none;
  color: white;
  cursor: pointer;
   @media (max-width: 767px){
     margin: 40px 0 0 0;
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

const Text1 = styled.div`
width: 100%;
margin-left: 10px;
font-size: 20px;
color: gray;
font-weight: 500;
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
    <>
    <ToastContainer />
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
          <AlreadyLogin>Already a member ?</AlreadyLogin>
          <AlreadyLoginSingin onClick={()=>{navigate("/login")}}>Sign in</AlreadyLoginSingin>
        </Head>

        <SingUpSection>
          <Title>SignUp</Title>
          <TileDesc>Signup with your Email</TileDesc>
          <Fileds>
           
          
<div className="df jcsp">
  <div>
            <SingUpInputStyle>
              <div className="df"><PersonRoundedIcon/><Text1>Name</Text1></div>
            <Email value={name} onChange={(e)=>(setName(e.target.value))} />
                 </SingUpInputStyle>

            <SingUpInputStyle>
            <div className="df"><EmailIcon/><Text1>Email</Text1></div>
              <Email value={email} onChange={(e)=>(setEmail(e.target.value))}></Email>
            </SingUpInputStyle>
  </div>
  <div>
            <SingUpInputStyle>
            <div className="df"><PasswordIcon/><Text1>Password</Text1></div>
              <Email type="password" value={password} onChange={(e)=>(setPassword(e.target.value))}></Email>
            </SingUpInputStyle>

            <SingUpInputStyle>
            <div className="df"><PasswordIcon/><Text1>Confirm Password</Text1></div>
              <Email type="password" value={cnfPassword} onChange={(e)=>(setcnfPassword(e.target.value))}  ></Email>
            </SingUpInputStyle>
  </div>
</div>
          </Fileds>
          <SubmitButton 
          onClick={()=>{handlesignUpData()}}
          >Submit</SubmitButton>
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
          <Error>{error}</Error>
          
        </SingUpSection>
      </Section2>
      </Desktop>
      <Mobile>
      <Title>Create New Account</Title>
      <Text>Please fill in the form to Continue</Text>
      <Fileds>
           
      <SingUpInputStyle>
              <div className="df"><PersonRoundedIcon/><Text1>Name</Text1></div>
            <Email value={name} onChange={(e)=>(setName(e.target.value))} />
                 </SingUpInputStyle>

            <SingUpInputStyle>
            <div className="df"><EmailIcon/><Text1>Email</Text1></div>
              <Email value={email} onChange={(e)=>(setEmail(e.target.value))}></Email>
            </SingUpInputStyle>
  
            <SingUpInputStyle>
            <div className="df"><PasswordIcon/><Text1>Password</Text1></div>
              <Email type="password" value={password} onChange={(e)=>(setPassword(e.target.value))}></Email>
            </SingUpInputStyle>

            <SingUpInputStyle>
            <div className="df"><PasswordIcon/><Text1>Confirm Password</Text1></div>
              <Email type="password" value={cnfPassword} onChange={(e)=>(setcnfPassword(e.target.value))}  ></Email>
            </SingUpInputStyle>
          <SubmitButton 
          onClick={()=>{handlesignUpData()}}
          >Sing Up</SubmitButton>

<div style={{gap:"10px"}} className="df">
          <AlreadyLogin>Have An Account?</AlreadyLogin>
          <AlreadyLoginSingin onClick={()=>{navigate("/login")}}>Sign in</AlreadyLoginSingin>
          </div>   

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
  radius="8.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> : ""}
          <Error>{error}</Error>
          
          </Fileds>
      
      </Mobile>
    </Wrapper>
    </>
  );
}

export default Singup;