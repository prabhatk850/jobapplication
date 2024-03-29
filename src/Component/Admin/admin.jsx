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
padding: 5px 5px;
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
                  <div className='df' style={{border:"1px solid black"}}>
                  <Fields style={{width:"200px",fontSize:"24px",fontWeight:"500"}}>Name</Fields>
                  <Fields style={{width:"277px",fontSize:"24px",fontWeight:"500"}}>Email</Fields>
                  <Fields style={{width:"139px",fontSize:"24px",fontWeight:"500"}}>Phone no.</Fields>
                  <Fields style={{width:"120px",fontSize:"24px",fontWeight:"500"}}>Experience</Fields>
                  <Fields style={{width:"185px",fontSize:"24px",fontWeight:"500"}}>Applied for</Fields>
                  <Fields style={{fontSize:"24px",fontWeight:"500",width:"360px"}}>Skills</Fields>
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

              }})}>


                  <Fields style={{width:"216px"}}>{item.name}</Fields>
                  <Fields style={{width:"300px"}}>{item.email}</Fields>
                  <Fields style={{width:"150px"}}>{item.phoneno}</Fields>
                  <Fields style={{width:"130px"}}>{item.experience}</Fields>
                  <Fields style={{width:"200px"}}>{item.jobprofile}</Fields>
                  
                    <div style={{width:"400px",overflowX:"auto",border:"1px solid black"}} className='skilldf'> {item.skills.map((skill,index)=>
                  (<Div1 key={index}>{skill},  </Div1>))}</div>
                 
                 
                  
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