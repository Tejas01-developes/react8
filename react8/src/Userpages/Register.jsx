import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate();
   const[field,setfield]=useState({name:"",email:"",password:"",role:'User'})

   const handlefields=(e)=>{
    setfield({
    ...field,[e.target.name]:e.target.value
   })}

const enteruser=async()=>{
    if(!field.name || !field.email || !field.password || !field.role){
        return alert("fill all the fields")
    }
    const payload={
        name:field.name,
        email:field.email,
        password:field.password,
        role:field.role
    }
    const entryurl=await axios.post("http://localhost:3000/apis/register",payload)

    if(entryurl.data.success){
        alert("success")
        navigate('/')
        return

    }
    return alert("fail")
}



  return (
    <div>
      
<input type="text" placeholder='Full name' name='name'  value={field.name} onChange={handlefields}/>
<input type="text" placeholder='Email' name='email' value={field.email} onChange={handlefields}/>
<input type="password" placeholder='Password' name='password' value={field.password} onChange={handlefields} />
<select name="role" id="" value={field.role} onChange={handlefields}>
    <option value="Admin">Admin</option>
    <option value="User">User</option>
</select>
<button onClick={enteruser}>Register</button>



    </div>
  )
}

export default Register
