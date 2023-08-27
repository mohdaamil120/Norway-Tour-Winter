import React from 'react'
import { Image, Link, VStack } from '@chakra-ui/react'
import {Link as ReactRouterLink} from "react-router-dom"
// import Images from "../Images/"
import { useNavigate } from 'react-router-dom'

function Navbar() {
const Links = [
    {path:"/", text:"Home"},
    {path:"/about", text:"About us"},
    {path:"/tours", text:"Tours"},
    {path:"/reviews", text:"Reviews"},
    {path:"/login", text:"Login"},
]

const navigate = useNavigate()

const handleHome=()=>{
  navigate("/")
}

  return <>
   <div style={{margin:"auto", width:"100%",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",alignItems:"center",justifyContent:"center",display:"flex", justifyContent:"space-around"}}>

    <div  >
        <h1  onClick={handleHome} style={{ cursor:"pointer", fontSize:"30px",color:"black", fontWeight:"bolder"}}>
          WINTER TRAVELLO
          
        </h1>
    </div>
    <div style={{ color:"black", padding:"20px",fontSize:"18px", display:"flex",gap:"130px",justifyContent:"space-around"}}>
      
      {Links.map((item)=>{
        return <VStack><Link  as={ReactRouterLink} to={item.path}>{item.text}</Link></VStack>
      })}
      
    </div>
    
    </div>
</>
}

export default Navbar