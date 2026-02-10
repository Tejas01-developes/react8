import React, { useContext, useEffect } from 'react'
import { authcontext } from '../Auth/Auth'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {


  const navigate=useNavigate();
    const{access,setaccess}=useContext(authcontext);

//     function decodejwt(token){
//       if(!token){
//         return console.log("no token")
//       }
//   const payload=token.split(".")[1];
//   const decode=JSON.parse(atob(payload));
//   return decode;
// }
// const decodeaccess=decodejwt(access);
// console.log(decodeaccess);
const noaccess=()=>{
if(!access){
  return navigate("/")
}
}

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
