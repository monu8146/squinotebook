import React,{useState,createContext} from 'react'
const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [loggedin,setLoggedin] = useState(false)
  const userLoggedin = ()=>{
    setLoggedin(true)  
  }
  return (
    <AuthContext.Provider value={{loggedin,userLoggedin}}>
    {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider,AuthContext}