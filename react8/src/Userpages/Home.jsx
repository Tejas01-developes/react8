import React, { useContext, useEffect, useState } from 'react'
import { authcontext } from '../Auth/Auth'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {


  const navigate=useNavigate();
    const{access,setaccess}=useContext(authcontext);
    const [loading,setloading]=useState(true)
    const[field,setfield]=useState({file:null,name:""})



const handlefile=(e)=>{
  const{name,files,value}=e.target;
  if(name=== "file"){
    setfield((prev)=>({...prev,file:files[0],}))
  }else{
  setfield((prev)=>({...prev,[name]:value,}))
  }
}



    useEffect(()=>{   
      const newacc=async()=>{
        try{
            const accurl=await axios.post("http://localhost:3000/apis/newacc",{},{withCredentials:true});
            if(accurl.data.success){
                setaccess(accurl.data.access)
                setloading(false)
            }
          
        }catch(err){
          console.log(err)
      }finally{
        setloading(false)
      }
      }
    
        newacc();
    },[])


const uploadfile=()=>{
if(!field.file){
  return alert("select the photo")
}
const formdata=new FormData();
const filename=field.name ? field.name : field.file.name;
    formdata.append("filename",field.file);
    formdata.append("name",filename)
}
    

    

  return (
    <div>

  {loading ? <h2>Loading........</h2> : <h1>{access}</h1>}

   <input type="file" value={field.file} onChange={handlefile} name='file'/>
   <input type="text" placeholder='Filename' value={field.name} onChange={handlefile} name='name'/>
    </div>
  )
}

export default Home
