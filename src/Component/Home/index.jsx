import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import {updateDetails,viewApplication} from '../Services/application'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'
import Select from 'react-select';





const Wrapper = styled.div`
align-items: center;
display: flex;
height: 100%;
width: 100%;
background-image: url(https://nispand-prod.oss-ap-south-1.aliyuncs.com/Images/movingWave.gif);
background-size: cover;
justify-content: center;
position: relative;

`;

const InnerContainer = styled.div`
border-radius: 10px;
margin: 50px;
width: 35%;
z-index: 2;

box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
background: #fff;
padding: 0 50px 50px;
height:80vh;
overflow-y: scroll;
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
position: absolute ;
top:10;
left: 10;
z-index: 2;
background-color: white;
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
    const [additionalExperience, setAdditionalExperience] = useState('')
    const [degree, setDegree] = useState('')
    const [readytolocate, setReadyToLocate] = useState(false)
    const [secondarySkills,setSecondarySkills] = useState([])
    const [resume, setResume] = useState([])
    const [coverletter, setCoverLetter] = useState([])
    const [bestTimeToReach, setBestTimeToReach] = useState('')

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
    const [secondaryOptions, setSecondaryOptions] = React.useState([]);
    
    // const addSecondaryOption = (newOption) => {
    //   setSecondaryOptions(prevOptions => {
    //     if (Array.isArray(prevOptions) && prevOptions.length < 3) {
    //       return [...prevOptions, newOption];
    //     } else {
    //       return prevOptions || [];
    //     }
    //   });
    // };

    const handleChange = (options) => {
      setSelectedOptions(options);
      console.log("selected", selectedOptions);
      setSkills(options)
      console.log("options",options)
      return(skills)
    };

    const handleSecondaryChange = (options) => {
      setSecondaryOptions(options);
      console.log("sSelected", secondaryOptions);
      setSecondarySkills(options)
      console.log("soptions",options)
      return(secondarySkills)
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
            setAdditionalExperience(res.data.additionalExperience)
            setReadyToLocate(res.data.readytolocate)
            setSecondarySkills(res.data.secondarySkills)
            setDegree(res.data.degree)
            setResume(res.data.resume)
            setCoverLetter(res.data.coverletter)
            setBestTimeToReach(res.data.bestTimeToReach)
            
            
          
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
            additionalExperience, 
            readytolocate,
            secondarySkills: secondaryOptions.map((item)=>item.value),
            degree,
            resume,
            coverletter,   
            bestTimeToReach, 
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

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log("filename",file)
      return(URL.createObjectURL(file));
    
    
  }
    

    

  return (
  <>
      <Header/>
    <Wrapper>
      <ToastContainer/>
        <InnerContainer>
          <HeaderContainer>
           <HeaderText style={{width:"40%",margin:"0 auto 10px -10px",paddingTop:"20px",height:"40px"}}> <HeaderText>Update Basic Details</HeaderText></HeaderText>
            {/* <div onClick={()=>navigate('/login')} >❌</div> */}
          </HeaderContainer>
          <FormContainer>
            <Input3 style={{marginTop:"70px"}}>{name}</Input3>
            <Input3>{email}</Input3>
            <Input value={phoneno} type="text" onChange={(e)=>{setPhoneno(e.target.value)}} placeholder="Phone"/>
            <Input value={dob} placeholder='D.O.B - dd-mm-yy' type="date" onChange={(e)=>{setDob(e.target.value)}} style={{color:"gray"}}/>
            <Input value={degree} type="text" onChange={(e)=>{setDegree(e.target.value)}} placeholder="Heighest Degree"/>
            <Input value={experience} type="text" onChange={(e)=>{setExperience(e.target.value)}} placeholder="Experience in Years"/>
            <Input value={additionalExperience} type="text" onChange={(e)=>{setAdditionalExperience(e.target.value)}} placeholder="Experience in specific field (e.g.- OTT Platform, Banking, etc.)"/>

      <Select
      styles={{outline: "none" ,marginTop:"20px",marginBottom:"20px"}}
      isMulti
      name="skills"
      options={options}
      className="basic-multi-select ac"
      onChange={handleChange}
      defaultheight={100}
      value={selectedOptions}
      placeholder="Enter Primary Skills"
    />



    <Select
      styles={{outline: "none" ,marginTop:"20px",marginBottom:"20px"}}
      isMulti
      name="secondarySkills"
      options={options}
      className="basic-multi-select ac"
      onChange={handleSecondaryChange}
      defaultheight={100}
      value={secondaryOptions}
      placeholder="Enter Skills"
    />

          <Input3 style={{marginTop:"30px"}} className='df al'><div> resume : </div>  <Input style={{marginTop:"30px",outline:"none"}} value={resume} type="file" onChange={(e)=>{setResume(handleFileChange())}} placeholder="Resume"/></Input3>
          <Input3 className='df al'><div> cover letter : </div>   <Input style={{marginTop:"30px",outline:"none"}} value={coverletter} type="file" onChange={(e)=>{setCoverLetter(handleFileChange())}} placeholder="Cover Letter"/></Input3>

            {/* <Input value={secondarySkills} type="text" onChange={(e)=>{setSecondarySkills(e.target.value)}} placeholder="Secondary Skills"/> */}
          
            <Input  value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder="City"/>
            <Input value={state} type="text" onChange={(e)=>{setState(e.target.value)}} placeholder="State"/>
           
            
        <div className='df'>
            <div className='m df al'>Ready to Relocate</div>
            <label className="switch">
                <input  type="checkbox" onChange={(e)=>{setReadyToLocate(!readytolocate)}} value={readytolocate}/>
                <span className="slider round"></span>
            </label>
        </div>
            <Input value={bestTimeToReach} type="text" onChange={(e)=>{setBestTimeToReach(e.target.value)}} placeholder="Best Time To Reach"/>
            <Input2 value={comment} as="textarea" onChange={(e)=>{setComment(e.target.value)}} placeholder="Comments/Remarks"/>
            <div className='df end'><Button onClick={()=>handleSave()}>Apply</Button></div>
          </FormContainer>
          <div className='seperetor b m'></div>
        </InnerContainer>
    </Wrapper>
    <Footer/>
  </>
  )
}

export default Index