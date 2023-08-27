import { Box, HStack, Heading,Text, VStack ,Center,Image, Button} from '@chakra-ui/react'
import React from 'react'


function MainSectin() {
  return (
    <Center  marginTop="17%">
        <Box>
            <Heading>Popular winter tours and activities</Heading>
            <Text mt="20px" fontSize="sm">Create long lasting memory by joining to on one of our active tours </Text>
            <Box>
                <HStack mt="40px" gap="30px" >
                    <VStack boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" width="40%" >
                         <Image  width="250px" height="300px"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zIAyP_I8ISy3pOxzYcdwfOhNMjDYeiLPeAjmfF4sD9aGeXV2' alt='whale'/>
                         <Heading as="h3" size="md">Whale Watching Cruise</Heading>
                         <HStack gap="100px">
                            <Text>6-8 hours</Text>
                            <Text>Toromso</Text>
                         </HStack>
                    </VStack >
                    <VStack boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" width="40%" >
                         <Image width="250px" height="300px" src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSvJVnMgM8zxXQcsAg_U47Rv25HjZXFQEXTW8B2A1q8PWW2SP' alt='whale'/>
                         <Heading as="h3" size="md">Whale Watching Cruise</Heading>
                         <HStack  gap="100px">
                            <Text>6-8 hours</Text>
                            <Text>Toromso</Text>
                         </HStack>
                    </VStack>
                    <VStack boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" width="40%" >
                         <Image width="250px" height="300px" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDeqW3xSThWg7xCdUrhyDuR53HBPcCOX-3YAFDrO6SEVfGPQsl' alt='whale'/>
                         <Heading as="h3" size="md">Whale Watching Cruise</Heading>
                         <HStack  gap="100px">
                            <Text>6-8 hours</Text>
                            <Text>Toromso</Text>
                         </HStack>
                    </VStack>
                </HStack>
            </Box>
            <Box mt="150px">
                <HStack mt="40px" gap="30px" >
                    <VStack boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" width="40%" >
                         <Image  width="250px" height="300px"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zIAyP_I8ISy3pOxzYcdwfOhNMjDYeiLPeAjmfF4sD9aGeXV2' alt='whale'/>
                         <Heading as="h3" size="md">Whale Watching Cruise</Heading>
                         <HStack gap="100px">
                            <Text>6-8 hours</Text>
                            <Text>Toromso</Text>
                         </HStack>
                    </VStack >
                    <VStack boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" width="40%" >
                         <Image width="250px" height="300px" src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSvJVnMgM8zxXQcsAg_U47Rv25HjZXFQEXTW8B2A1q8PWW2SP' alt='whale'/>
                         <Heading as="h3" size="md">Whale Watching Cruise</Heading>
                         <HStack  gap="100px">
                            <Text>6-8 hours</Text>
                            <Text>Toromso</Text>
                         </HStack>
                    </VStack>
                    <VStack boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" width="40%" >
                         <Image width="250px" height="300px" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDeqW3xSThWg7xCdUrhyDuR53HBPcCOX-3YAFDrO6SEVfGPQsl' alt='whale'/>
                         <Heading as="h3" size="md">Whale Watching Cruise</Heading>
                         <HStack  gap="100px">
                            <Text>6-8 hours</Text>
                            <Text>Toromso</Text>
                         </HStack>
                    </VStack>
                </HStack>
            </Box>
            <Button className='btn' p="10px 50px 10px 50px" color="white" backgroundColor="#608188" mt="80px">ALL TOURS</Button>
        </Box>
    </Center>
  )
}

export default MainSectin