import React, { useContext, useEffect, useState } from 'react'
import { authcontext } from '../Auth/Auth'
import axios from 'axios';



const Home = () => {



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
                console.log(accurl.data.access)
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


const uploadfile=async()=>{
if(!field.file){
  return alert("select the photo")
}
const formdata=new FormData();
const filename=field.name ? field.name : field.file.name;
    formdata.append("file",field.file);
    formdata.append("name",filename);

    const uploadurl=await axios.post("http://localhost:3000/images/upload",formdata,{withCredentials:true,headers:{Authorization:`Bearer ${access}`}});
    if(uploadurl.data.success){
      return alert("upload success")
    }
    alert(uploadurl.data.message)

}



  return (
    <div>
<div>
  {loading ? <h2>Loading........</h2> : <h1>{access}</h1>}

   <input type="file"  onChange={handlefile} name='file'/>
   <input type="text" placeholder='Filename' value={field.name} onChange={handlefile} name='name'/>
   <button onClick={uploadfile}>upload</button>
    </div>

  

</div>
  )
}

export default Home
