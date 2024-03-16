import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import {updateDetails,viewApplication} from '../Services/application'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'
import Select from 'react-select';





const Wrapper = styled.div`
align-items: center;
display: flex;

justify-content: center;

`;

const InnerContainer = styled.div`
border-radius: 10px;
margin: 50px;
width: 35%;
z-index: 2;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
background: #fff;
padding: 50px;
@media(max-width: 768px){
    width: 90%;
}
`;

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

const HeaderText = styled.h2`
color: rgb(68, 163, 255);
font-weight: 500;

@media(max-width: 768px){
    font-size: 20px;

}
`;

const FormContainer = styled.div`
flex-direction: column;
display: flex;
`;

const Input = styled.input`
margin: 10px 0;
height: 40px;
border: none;
outline: 1px solid #ccc;
border-radius: 5px;
padding: 5px 10px;
`;
const Input3 = styled.div`
margin: 10px 0;
height: 40px;
border: none;
outline: 1px solid #ccc;
border-radius: 5px;
display:flex;
padding: 5px 10px;
align-items: center;
font-weight: 800;
`;
const Input2 = styled.input`
margin: 10px 0;
height: 40px;
border: none;
outline: 1px solid #ccc;
border-radius: 5px;
padding: 5px 10px;
resize: none;
padding: 20px 10px;
`;

const Button = styled.button`
width: max-content;
padding: 10px 20px;
background-color: rgb(68, 163, 255);
border: none;
border-radius: 5px;
margin-top: 20px;
font-size: 16px;
color: white;
`;





function Index() {

    
    const navigate=useNavigate();

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phoneno, setPhoneno] = React.useState('')
    const [dob, setDob] = React.useState("1990-01-01")
    const [comment, setComment] = useState('')
    const [skills, setSkills] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [experience, setExperience] = useState('')
    const [readytolocate, setReadyToLocate] = useState(false)

    const options = [
      { value: 'React.js', label: 'React.js' },
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'HTML', label: 'HTML' },
      { value: 'CSS', label: 'CSS' },
      { value: 'Node.js', label: 'Node.js' },
      { value: 'MongoDB', label: 'MongoDB' },
      { value: 'Express', label: 'Express' },
    ];

    const [selectedOptions, setSelectedOptions] = React.useState([]);

    const handleChange = (options) => {
      setSelectedOptions(options);
      console.log("skills", selectedOptions);
      setSkills(options)
      console.log("first",skills)
      return(skills)
    };



    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
        const year = date.getFullYear();
      
        return `${year}-${month}-${day}`;
      };

    useEffect(() => {  
      viewApplication().then((res) => {
            setName(res.data.name)
            setEmail(res.data.email)
            setPhoneno(res.data.phoneno)
            setDob(formatDate(new Date(res.data.dob)))
            setComment(res.data.comment)
            setSkills(res.data.skills)
            setState(res.data.state)
            setCity(res.data.city)
            setExperience(res.data.experience)
          
        }).catch((err) => {
                console.log("err",err)
            })
    },[])

    

    const handleSave = () => {
      console.log("prabhat",skills)
        const data = {
            phoneno,
            dob,
            comment,
            skills: selectedOptions.map((item)=>item.value),
            state,
            city,
            experience,
            readytolocate,
        }
        console.log("first",data)
        updateDetails(data).then((res) => {
           if(res.status === 200){
            toast.success("Profile Updated Successfully")
            navigate('/thankyou')
        }
        else{
            toast.error("Something went wrong")
        }
        }).catch((err) => {
            console.log(err)
        })
    }

    

  return (
  <>
      <Header/>
    <Wrapper>
        <InnerContainer>
          <HeaderContainer>
            <HeaderText>Update Basic Details</HeaderText>
            {/* <div onClick={()=>navigate('/login')} >❌</div> */}
          </HeaderContainer>
          <FormContainer>
            <Input3>{name}</Input3>
            <Input3>{email}</Input3>
            <Input value={phoneno} type="text" onChange={(e)=>{setPhoneno(e.target.value)}} placeholder="Phone"/>
            <Input value={dob} type="date" onChange={(e)=>{setDob(e.target.value)}} style={{color:"gray"}}/>
            <Input value={experience} type="text" onChange={(e)=>{setExperience(e.target.value)}} placeholder="Experience"/>
            <Input value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder="City"/>
            <Input value={state} type="text" onChange={(e)=>{setState(e.target.value)}} placeholder="State"/>
           
            <Select
      styles={{outline: "none" ,marginTop:"20px",marginBottom:"20px"}}
      isMulti
      name="skills"
      options={options}
      className="basic-multi-select ac"
      onChange={handleChange}
      defaultheight={100}
      value={selectedOptions}
      placeholder="Enter Skills"
    />
          
        <div className='df'>
            <div className='m df al'>Ready to Relocate</div>
            <label className="switch">
                <input  type="checkbox" onChange={(e)=>{setReadyToLocate(!readytolocate)}} value={readytolocate}/>
                <span className="slider round"></span>
            </label>
        </div>
            <Input2 value={comment} as="textarea" onChange={(e)=>{setComment(e.target.value)}} placeholder="Comments/Remarks"/>
            <div className='df center'><Button onClick={()=>handleSave()}>Apply</Button></div>
          </FormContainer>
          <div className='seperetor b m'></div>
        </InnerContainer>
    </Wrapper>
    <Footer/>
  </>
  )
}

export default Index