import React, { createContext, useState } from 'react'
export const authcontext=createContext();
const Auth = ({children}) => {
    const[access,setaccess]=useState(null);
  return (
  <authcontext.Provider value={{access,setaccess}}>
    {children}
  </authcontext.Provider>
  )
}

export default Auth
