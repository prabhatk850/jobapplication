import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { styled as MuiStyle } from '@mui/material/styles';
import Header from '../Header'
import Footer from '../Footer'
import { uploadFile,viewApplication} from '../Services/application'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';




const Background = styled.div`
background-image: linear-gradient(to bottom, cyan, #0A599B);
background-size: cover;
position: relative;
`;



const Wrapper = styled.div`
align-items: center;
justify-content: center;
display: flex;
width: 100%;


`;

const InnerContainer = styled.div`
border-radius: 10px;
margin: 50px;
z-index: 2;

box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
background: #d1ffff;
padding: 0 50px 50px;


@media(max-width: 768px){
    width: 90%;
    margin: 20px;
    padding: 0 20px 20px;
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
background-color: #D1FFFF;
@media(max-width: 768px){
    font-size: 20px;
    width: 100%;

}
`;

const HeaderTextcontainer = styled.div`
color: rgb(68, 163, 255);
font-weight: 500;
position: absolute ;
top:10;
left: 10;
z-index: 2;
background-color: #D1FFFF;
width: 90%;
margin: 0 auto 10px -10px;
padding-top: 20px;
height: 40px;
@media (max-width: 768px){
    width: 78%;
}
`;


const FormContainer = styled.div`
justify-content: space-between;
display: flex;
gap: 150px;
@media (max-width: 768px){
  display: block;
}
`;

const Input = styled(TextField)`
width: 100%;


`;

const Div = styled.div`
display: flex;
gap: 20px;

@media (max-width:768px){
    display: block;
}
`;

const Input4 = styled.div`
margin: 10px 0;
height: 45px;
border: none;
color: #3E6666;
outline: 1px solid #76C4C5;
border-radius: 3px;
display:flex;
padding: 5px 10px;
align-items: center;
font-weight: 200;
width: 96%;
@media (max-width: 768px){
  width: 93.5%;
}
&:hover{
  outline: 1px solid black;
}
`;

const Input2 = styled.input`
margin: 20px 0;
height: 100px;
background: #D1FFFF;
border: none;
color: #3E6666;
outline: 1px solid #76C4C5;
border-radius: 4px;
padding: 10px;
resize: none;
width: 96%;
font-size: 17px;
@media (max-width: 768px){
  width: 93.5%;
}
&:hover{
  outline: 1px solid black;
}
`;

const Input3 = styled.div`
margin: 20px 0;
height: 45px;
border: none;
color: #3E6666;
outline: 1px solid #76C4C5;
border-radius: 3px;
display:flex;
padding: 5px 10px;
align-items: center;
font-weight: 200;
width: 35%;

@media (max-width: 768px){
  width: 93.5%;
}
&:hover{
  outline: 1px solid black;
}
`;


const ApplyButton = styled.button`
width: max-content;
padding: 10px 20px;
background-color: rgb(68, 163, 255);
border: none;
border-radius: 5px;

font-size: 16px;
color: white;
`;
const AdminButton = styled.button`
width: max-content;
padding: 10px 20px;
background-color: rgb(68, 163, 255);
border: none;
border-radius: 5px;
margin-top: 20px;
font-size: 16px;
color: white;

`;

const Flex=styled.div`
width: 50%;

@media (max-width: 768px){
    width: 100%;
}
`;


const Heading=styled.div`
font-size: 20px;
color: #43A3FF;
margin: 20px 0 10px 0;
font-weight: 500;

`;
const Heading2=styled.div`
font-size: 20px;
color: #43A3FF;
margin: 70px 0 20px 0;
font-weight: 500;

@media (max-width: 768px){
  margin: 20px 0 0 0;
}
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
    const [jobprofile, setJobprofile] = useState('UI/UX Developer')
    const [releventexperience, setReleventExperience] = useState('')
    const [noticeperiod, setNoticePeriod] = useState(null)
    const [expectedSalary, setExpectedSalary] = useState('')
    const [currentSalary, setCurrentSalary] = useState('')
    const [noticenegotiable, setNoticeNegotiable] = useState(false)


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
    
    const handleChange = (event,options) => {
      setSelectedOptions(options);
      console.log("selected", selectedOptions);
      setSkills(options)
      console.log("options",options)
      return(skills)
    };


    const handleSecondaryChange = (e,options) => {
      setSecondaryOptions(options);
      console.log("sSelected", secondaryOptions);
      setSecondarySkills(options)
      console.log("soptions",options)
      return(secondarySkills)
    };





  const [css,setCss]=useState('none')

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
        const year = date.getFullYear();
      
        return `${year}-${month}-${day}`;
      };
      const data = {
        phoneno,
        name,
        email,
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
        jobprofile,
        releventexperience,
        noticeperiod,
        expectedSalary,
        currentSalary,
        noticenegotiable
    }

    useEffect(() => {  
      viewApplication().then((res) => {
        console.log("name",res)
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
            setJobprofile(res.data.jobprofile)
            setReleventExperience(res.data.releventexperience)
            setNoticePeriod(res.data.noticeperiod)
            setExpectedSalary(res.data.expectedSalary)
            setCurrentSalary(res.data.currentSalary)
            setNoticeNegotiable(res.data.noticenegotiable)
          
            if(res.data.isAdmin){
              setCss('absolute')
            }else{
              setCss('none')
            }
          
        }).catch((err) => {
                console.log("err",err)
            })
    },[])

    

    const handleSubmit = () => {    
        console.log("first",data)
        uploadFile(data).then((res) => {
          
           if(res.status === 200){
            toast.success("Profile Updated Successfully")
            console.log("123",res)
            navigate('/thankyou',{state:{data}})
        }
        else{
            toast.error("Something went wrong")
        }
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      console.log("filename",file)
      return(file);
    
    
  }


  const countries= [
    {  label: 'UI Developer'},
    {  label: 'UX Developer'},
    {  label: 'Java Developer'},
    {  label: 'React.js Developer'},
    {  label: 'Node.js Developer'},
    {  label: 'Others'},
  ];

  const noticePeriods = [
    { label: '0-15 Days', value: '0-15 Days'},
    { label: '15-30 Days', value: '15-30 Days'},
    { label: '30-60 Days', value: '30-60 Days'},
    { label: '2-3 Months', value: '60-90 Days' },
    { label: 'More Than 3 Months', value: 'More than 90 Days'},
    { label: 'Other', value: 'Other'},
  ];

  const VisuallyHiddenInput = MuiStyle('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

   
  return (
  <>
      <Header/>
      <Background>
      <ToastContainer/>
      <div style={{justifyContent:"center",display:"flex"}}><AdminButton className={css} onClick={()=>{navigate('/admin')}}>Admin</AdminButton></div>
    <Wrapper>
        <InnerContainer>
          <HeaderContainer>
           <HeaderTextcontainer>
             <HeaderText>Update Basic Details</HeaderText>
           </HeaderTextcontainer>
          </HeaderContainer>


          <FormContainer>

            <Flex>

            <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%",marginTop:"70px",marginBottom:"20px" }}
      options={countries}
      defaultValue={countries[0]}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Postion Applied"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
          
            <Input style={{margin:"10px 0"}} id='outlined-read-only-input' value={name} InputProps={{readOnly: true}} label="Name" >{name}</Input>
            <Input style={{margin:"10px 0"}} id='outlined-read-only-input' value={email} InputProps={{readOnly: true}} label="Email" >{email}</Input>
            <Input style={{margin:"10px 0"}} value={phoneno} id="outlined-basic" onChange={(e)=>{setPhoneno(e.target.value)}} label="Phone no." variant="outlined" />
            <Heading>Qualifications</Heading>
            
            <Input style={{margin:"10px 0"}} value={degree}  onChange={(e)=>{setDegree(e.target.value)}} label="Heighest Degree"/>
            <Input style={{margin:"10px 0"}} value={experience} label="Total Experience" onChange={(e)=>{setExperience(e.target.value)}} />
            <Input style={{margin:"10px 0"}} value={releventexperience} label="Relevent Experience" onChange={(e)=>{setReleventExperience(e.target.value)}} />
            <Input style={{margin:"10px 0"}} value={additionalExperience} label="Domain" onChange={(e)=>{setAdditionalExperience(e.target.value)}} placeholder="Domain (e.g.- Worked on OTT Platform, Banking, etc.)"/>

            <Heading>Location</Heading>

            <Input style={{margin:"10px 0"}} value={city} label="City" onChange={(e)=>{setCity(e.target.value)}}/>
            <Input style={{margin:"10px 0"}} value={state} label="State" onChange={(e)=>{setState(e.target.value)}}/>

            <div className='df'>
            <div className='m df al'>Ready to Relocate</div>
            <label className="switch">
                <input  type="checkbox" defaultValue={false} onChange={(e)=>{setReadyToLocate(!readytolocate)}} value={readytolocate}/>
                <span className="slider round"></span>
            </label>
        </div>

</Flex>

<Flex>

    <Heading2>Skills</Heading2>
<Autocomplete
style={{margin:"20px 0"}}
  multiple
  id="tags-outlined"
  options={options}
  onChange={handleChange}
  value={selectedOptions}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      label="Enter Primary Skills"
    />
  )}
/>

<Autocomplete
style={{margin:"20px 0"}}
  multiple
  id="tags-outlined"
  options={options}
  onChange={handleSecondaryChange}
  value={secondaryOptions}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      label="Enter Primary Skills"
    />
  )}
/>

    {/* <Select
      styles={{outline: "none",width:"100%" ,marginTop:"20px",marginBottom:"20px"}}
      isMulti
      name="secondarySkills"
      options={options}
      className="basic-multi-select ac"
      onChange={handleSecondaryChange}
      defaultheight={100}
      value={secondaryOptions}
      placeholder="Additional Skills"
    /> */}




          <Input4 style={{marginTop:"20px",display:"flex",justifyContent:"space-between"}} className='df al'><div style={{width:"120px",fontFamily: "Roboto, Helvetica, Arial"}}> Cover letter  </div> 
          {coverletter?.name}
          <Button
          style={{backgroundColor:"#42A3FF"}}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file"  onChange={(e)=>{setCoverLetter(handleFileChange(e))}} />
    </Button>
          </Input4>
            
          <Input4 style={{marginTop:"20px",display:"flex",justifyContent:"space-between"}} className='df al'><div style={{width:"120px",fontFamily: "Roboto, Helvetica, Arial"}}> Resume  </div> 
          {resume?.name}
          <Button
          style={{backgroundColor:"#42A3FF"}}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Resume
      <VisuallyHiddenInput type="file"  onChange={(e)=>{setResume(handleFileChange(e))}} />
    </Button>
          </Input4>
          
   
            
        <Heading style={{margin:"35px 0 0 0"}}>Additional Details</Heading>
        <Input style={{margin:"20px 0"}} value={currentSalary} type="text" onChange={(e)=>{setCurrentSalary(e.target.value)}} label="Cureent Salary"/>
        <Input value={expectedSalary} type="text" onChange={(e)=>{setExpectedSalary(e.target.value)}} label="Expected Salary"/>
        
          <Div>
   
<Autocomplete
      id="country-select-demo"
      sx={{ width: "100%",marginTop:"20px",marginBottom:"20px" }}
      options={noticePeriods}
      onChange={(event, value) => setNoticePeriod(value)}
      value={noticeperiod}
      defaultValue="0-15 Days"
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Notice Period" 
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />

        <Input3 className='df'>
        <div style={{display:"flex",alignItems:"center",fontFamily: "Roboto, Helvetica, Arial" }}>Negotiable</div>
        <input value={noticenegotiable} defaultValue={noticenegotiable} style={{height:"20px",width:"20px",margin:"10px"}}  onChange={(e)=>{setNoticeNegotiable(!noticenegotiable)}} type='checkbox'></input>
        </Input3>
        </Div>
  
            
            <Input value={bestTimeToReach} type="text" onChange={(e)=>{setBestTimeToReach(e.target.value)}} label="Best Time to Reach"/>
            
            
            <Input2 style={{resize:"none",margin:"20px 0",height:"100px",padding:"10px",fontSize:"17px",fontFamily: "Roboto, Helvetica, Arial"}} value={comment} as="textarea" onChange={(e)=>{setComment(e.target.value)}} placeholder="Comments/Remarks"/>
            <div style={{marginTop:"50px"}} className='df end'><ApplyButton onClick={handleSubmit}>Apply</ApplyButton></div>
    </Flex>
          </FormContainer>
          <div className='seperetor b m'></div>
        </InnerContainer>

        </Wrapper>
        
    </Background>
    <Footer/>
  </>
  )
}

export default Index