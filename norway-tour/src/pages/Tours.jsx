import React from 'react'
import TourData from "../pages/TourData"
import {useEffect, useState} from "react"
import { Box, Heading, Image, VStack,Text, Button} from '@chakra-ui/react'
import Footer from './Footer'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

function Tours() {
  const [tourData , setTourData] = useState(TourData)
  const [selectedTour, setSelectedTour] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const openModal = (tour) => {
    setSelectedTour(tour);
    onOpen();
  };

  const closeModal = () => {
    setSelectedTour(null);
    onClose();
  };
 
  return (
    <>
    <Heading mt="20px" as="h1" size="3xl">Tour Pakages</Heading>
      <div style={{marginTop:"50px", gap:"30px",display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
        {tourData.map((item)=>{
          return <Box  boxShadow= "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" key={item.id}>
            <VStack >
                <Image  width="100%" height="300px" src={item.imageUrl} alt='pic'/>
                <Heading as="h1" size="md">Place Name : {item.name}</Heading>
                <Text>Price : {item.price}</Text>   
                <Text>Rating : {item.rating}</Text>  
                <Button onClick={() => openModal(item)} mb="10px">View in Modal</Button> 
            </VStack>

          </Box>
        })}
      </div>
      <Footer/>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedTour?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image width="100%" src={selectedTour?.imageUrl} alt="pic" />
            <Text>Price : {selectedTour?.price}</Text>
            <Text>Rating : {selectedTour?.rating}</Text>
            <Text>{selectedTour?.description}</Text>
            
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
  )
}

export default Tours