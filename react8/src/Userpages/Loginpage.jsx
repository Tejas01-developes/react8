import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authcontext } from '../Auth/Auth';
const Loginpage = () => {
    const navigate=useNavigate();
    const[field,setfield]=useState({email:"",password:""})
    const{setaccess}=useContext(authcontext);
    const handlefields=(e)=>{
     setfield({
     ...field,[e.target.name]:e.target.value
    })}
 
 const enteruser=async()=>{
     if( !field.email || !field.password){
         return alert("fill all the fields")
     }
     const payload={
         
         email:field.email,
         password:field.password,
         
     }
     const entryurl=await axios.post("http://localhost:3000/apis/login",payload,{withCredentials:true})
     const access=entryurl.data.access
     console.log(access)
     if(entryurl.data.success){
         alert("success")
         setaccess(access)
         navigate('/home')
         return
 
     }
     return alert("fail")
 }
 
  return (
    <div>
      
<input type="text" placeholder='Email' name='email' value={field.email} onChange={handlefields}/>
<input type="password" placeholder='Password' name='password' value={field.password} onChange={handlefields} />

<button onClick={enteruser}>Login</button>


    </div>
  )
}

export default Loginpage


