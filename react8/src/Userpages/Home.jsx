import React, { useContext, useEffect } from 'react'
import { authcontext } from '../Auth/Auth'
import axios from 'axios';

const Home = () => {
    const{access,setaccess}=useContext(authcontext);
    
    useEffect(()=>{
        const newacc=async()=>{
            const accurl=await axios.post("http://localhost:3000/apis/newacc",{},{withCredentials:true});
            if(accurl.data.success){
                setaccess(accurl.data.access)
            }
        }
        newacc();
    },[])

    

  return (
    <div>
    {access}
    </div>
  )
}

export default Home
