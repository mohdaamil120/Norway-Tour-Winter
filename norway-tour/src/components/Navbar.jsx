import React from 'react'
import { Button, Image, Link, HStack } from '@chakra-ui/react'
import {Link as ReactRouterLink} from "react-router-dom"
// import Images from "../Images/"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../pages/AuthContextProvider'


function Navbar() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();

// const Links = [
//     {path:"/", text:"Home"},
//     {path:"/about", text:"About us"},
//     {path:"/tours", text:"Tours"},
//     {path:"/reviews", text:"Reviews"},
//     {path:"/login", text:"Login"},
// ]

const navigate = useNavigate()

const handleHome=()=>{
  navigate("/")
}

const handleLogout=()=>{
  navigate("/")
  setIsLoggedIn(false)
}


  return <>
   <div style={{margin:"auto", width:"100%",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",alignItems:"center",justifyContent:"center",display:"flex", justifyContent:"space-around"}}>

    <div  >
        <h1  onClick={handleHome} style={{ cursor:"pointer", fontSize:"30px",color:"black", fontWeight:"bolder"}}>
          WINTER TRAVELLO
          
        </h1>
    </div>
    <div style={{ width:"70%", color:"black", padding:"20px",fontSize:"18px", display:"flex",gap:"130px",justifyContent:"space-around"}}>
      
       <HStack padding="20px" fontSize="20px" display="flex" gap="130px" justifyContent="space-around">
          <Link  as={ReactRouterLink} to="/">Home</Link>
          <Link  as={ReactRouterLink} to="/about">About us</Link>
          <Link  as={ReactRouterLink} to="/tours">Tours</Link>
          <Link  as={ReactRouterLink} to="/reviews">Reviews</Link>
          {!isLoggedIn ? (
            <Link  as={ReactRouterLink} to="/login">Login</Link>
          ) : (
            <Button backgroundColor="#608188" color="white" onClick={handleLogout}>LogOut</Button>
          )}
       </HStack>
    </div>
    
    </div>
</>
}

export default Navbar