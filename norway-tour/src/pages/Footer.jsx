import { Text,Container,Box ,Input, Button, HStack, VStack, Heading,Image, border} from '@chakra-ui/react'
import React from 'react'
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
        <div style={{backgroundColor:"#28282B",marginTop:"135px"}}>
            <Box w="50%"  margin="auto" >
                <Text padding="80px 40px 0px 40px" margin="40px" color="white" fontWeight="bolder" fontSize="60px">Book A Tour Or Learn More</Text>
            </Box>
            <Box display="flex" gap="10px" width="65%" margin="auto">
           {/* <Center  margin="0 20% 0 20%"> */}
           <Input color="black" backgroundColor="lightgray" borderRadius="10px 0px 0px 10px" placeholder='Name'/> 
          <Input borderRadius="none" backgroundColor="lightgray"  type='text' placeholder='Email'/>
          <Button color="white" backgroundColor="#608188" borderRadius="0px 10px 10px 0px" padding="10px 100px 10px 100px">Send</Button>
           {/* </Center> */}
          </Box>

          <Box mt="80px" display="flex" justifyContent="space-evenly">
            <Box>
                <HStack>
                    <VStack>
                    <Heading color="white" as="h6" size="sm">wintertravello</Heading>
                    </VStack>
                    <VStack>
                        <Heading color="white" as="h6" size="sm">Home</Heading>
                        <Heading color="white" as="h6" size="sm">About us</Heading>
                        <Heading color="white" as="h6" size="sm">Tours</Heading>
                        <Heading color="white" as="h6" size="sm">Reviews</Heading>
                        <Heading color="white" as="h6" size="sm">Contacts</Heading>
                    </VStack>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <VStack alignItems="left">
                        <Heading color="white" as="h6" size="sm">Follow us:</Heading>
                        <Heading color="white" as="h6" size="sm">winter travello</Heading>
                        <Heading color="white" as="h6" size="sm">winter_travello</Heading>
                        <Heading color="white" as="h6" size="sm">wintertravello@gmail.com</Heading>
                        <Heading color="white" as="h6" size="sm">+47 21 51 88 77</Heading>
                        <FontAwesomeIcon color='white' icon={faEnvelope} />
                        {/* <FontAwesomeIcon color='white' icon={faFacebook} /> */}
                        <FontAwesomeIcon icon="fa-solid fa-facebook" />
                    </VStack>
                </HStack>
            </Box>
          </Box>
          <Text  color="white" mt="50px" ml="-400px"> @ 2020 , Winter Travello AS, Nordre Nostekaien 1, N-5011 Bergen</Text>
        </div>
    </>
  )
}

export default Footer