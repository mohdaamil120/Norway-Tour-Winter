import React from 'react'
import {Heading, Image, Input,Box, Button, Center} from "@chakra-ui/react"
import MidSection from './MidSection'

function Home() {
  return (
    <>
    <div>
     
        <Image  
          w="100%"
          objectFit='cover' 
          src='https://nomadict.org/wp-content/uploads/2019/05/P1240962-1024x769.jpg' alt='pic'
          />

          <Heading color="gray" fontWeight="bold" letterSpacing="10px"  mt="-55%">DISCOVER <span style={{ color:"white" ,fontWeight:"bold",fontSize:"130px"}}>NORWAY</span></Heading>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Box display="flex" gap="10px" width="65%" margin="auto">
           {/* <Center  margin="0 20% 0 20%"> */}
           <Input color="black" backgroundColor="lightgray" borderRadius="10px 0px 0px 10px" placeholder='Destination'/> 
          <Input borderRadius="none" type='date' placeholder='From'/>
          <Input borderRadius="none" type='date' placeholder='To'/>
          <Button color="white" backgroundColor="gray" borderRadius="0px 10px 10px 0px" padding="10px 100px 10px 100px">Search</Button>
           {/* </Center> */}
          </Box>

          
    </div>
    <div>
      <MidSection/>
    </div>
    </>
  )
}

export default Home