import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { viewByAdmin } from '../Services/application';
import Header from '../Header'
import Footer from '../Footer'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Searchicon= styled(FaSearch)`
position: absolute;
right: 35px;
`;

const Wrapper = styled.div`
margin: 3%;
`;


const Div = styled.div`


display: flex;

`;
const Input = styled.input`
margin: 20px;
width: 50%;
padding: 20px;
font-size: 20px;
border: 1px solid #1f1010;
border-radius: 10px;

@media(max-width: 768px){
    width: 100%;
}
`;

const Fields = styled.div`
border: 1px solid #1f1010;
display: flex;
justify-content: center;
padding: 5px 0px;
`;

const Nodata = styled.div`
margin: 30px;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
`;

const Div1 = styled.div``;

const Grid= styled.div`
display: grid;
grid-template-columns: repeat(1, minmax(50%, 1fr));
border: 1px solid #1f1010;
width: 100%;
`;


function Admin() {
  const [data,setData]=useState([{}])

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };


  const filterData = (searchTerm) => {
    const filteredData = data.filter((item) =>
    item.skills.some(name => name.toLowerCase().includes(searchTerm.toLowerCase())) 
    );
    setFilteredData(filteredData);
  };


    useEffect(() => {
        viewByAdmin().then((result)=>{
            setData(result.data)
            setFilteredData(result.data)
            console.log("result from viewByAdmin",result)
        })
    },[])


   

  return (
    <>
    <Header/>
    <Wrapper>
     <div className='df m' style={{justifyContent:"end",alignItems:"center"}}> <Input type='text' placeholder='Search' value={searchTerm} onChange={handleInputChange}></Input><Searchicon /></div>
                  <div className='df' style={{border:"1px solid black",width:"100%"}}>
                  <Fields style={{width:"201px"}}>Name</Fields>
                  <Fields style={{width:"178px"}}>Notice period</Fields>
                  <Fields style={{width:"140px"}}>Current Salary</Fields>
                  <Fields style={{width:"140px"}}>Relevent experience</Fields>
                  <Fields style={{width:"121px"}}>Total Experience</Fields>
                  <Fields style={{width:"186px"}}>Applied for</Fields>
                  <Fields style={{width:"373px"}}>Skills</Fields>
                  <Fields style={{width:"373px"}}>Additional Skills</Fields>
                  <Fields style={{width:"70px"}}>View</Fields>
                  </div>          

     <Grid>
      {filteredData.length===0 && <Nodata>No Data Found</Nodata>}
      {filteredData.map((item,index)=>(
          
              <Div key={index.id} onClick={()=>navigate("/userdetail",{state:{

                name:item.name,
                email:item.email,
                phoneno:item.phoneno,
                dob:item.dob,
                skills:item.skills,
                secondarySkills:item.secondarySkills,
                states:item.state,
                city:item.city,
                readytolocate:item.readytolocate,
                experience:item.experience,
                comment:item.comment,
                degree:item.degree,
                resume: item.resume,
                coverletter: item.coverletter,
                bestTimeToReach: item.bestTimeToReach,
                additionalExperience: item.additionalExperience,
                jobprofile: item.jobprofile,
                noticeperiod: item.noticeperiod,
                releventexperience: item.releventexperience,
                currentSalary: item.currentSalary,
                expectedSalary: item.expectedSalary,
              
              }})}>


                  <Fields style={{width:"216px"}}>{item.name}</Fields>
                  <Fields style={{width:"190px"}}>{item.noticeperiod}</Fields>
                  <Fields style={{width:"150px"}}>{item.currentSalary}</Fields>
                  <Fields style={{width:"150px"}}>{item.releventexperience}</Fields>
                  <Fields style={{width:"130px"}}>{item.experience}</Fields>
                  <Fields style={{width:"200px"}}>{item.jobprofile}</Fields>
                  
                    <div style={{width:"400px",overflowX:"auto",border:"1px solid black"}} className='skilldf'> {item.skills.map((skill,index)=>
                  (<Div1 key={index}>{skill},  </Div1>))}</div>
                 
                    <div style={{width:"400px",overflowX:"auto",border:"1px solid black"}} className='skilldf'> {item.secondarySkills.map((secondarySkills,index)=>
                  (<Div1 key={index}>{secondarySkills},  </Div1>))}</div>
                 
                 <Fields style={{width:"75px"}}> View </Fields>
                  
              </Div>
          
      ))
    }
    </Grid>
    </Wrapper>
    <Footer/>
    </>
  )
}

export default Admin