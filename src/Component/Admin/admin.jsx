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

`;


const Div = styled.div`
margin: 20px;
padding: 20px;
border: 1px solid #1f1010;
border-radius: 10px;
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
margin: 5px;

`;

const Nodata = styled.div`
margin: 30px;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;

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
     <div className='df' style={{justifyContent:"end",alignItems:"center"}}> <Input type='text' placeholder='Search' value={searchTerm} onChange={handleInputChange}></Input><Searchicon /></div>
      {filteredData.length===0 && <Nodata>No Data Found</Nodata>}
      {filteredData.map((item,index)=>(
          
              <Div key={index.id} onClick={()=>navigate("/userdetail",{state:{

                name:item.name,
                email:item.email,
                phoneno:item.phoneno,
                dob:item.dob,
                skills:item.skills,
                secondarySkills:item.secondarySkills,
                state:item.state,
                city:item.city,
                readytolocate:item.readytolocate,
                experience:item.experience,
                comment:item.comment,
                degree:item.degree,
                resume: item.resume,
                coverletter: item.coverletter,
                bestTimeToReach: item.bestTimeToReach,
                additionalExperience: item.additionalExperience,

              }})}>


                  <Fields>Name - {item.name}</Fields>
                  <Fields>Email - {item.email}</Fields>
                  <Fields>Phone No.- {item.phoneno}</Fields>
                  <Fields>Experience - {item.experience}</Fields>
                  <div className='df'>
                    <Fields>Skills - </Fields> 
                    <div className='skilldf'> {item.skills.map((skill,index)=>
                  (<Fields key={index}>{skill}</Fields>))}</div>
                  </div>
                 
                  
              </Div>
          
      ))
    }

    </Wrapper>
    <Footer/>
    </>
  )
}

export default Admin