import React from 'react'
import { Box, Heading, Text,Image ,HStack,VStack} from '@chakra-ui/react';
import Footer from "../pages/Footer";

function AboutUs() {
  return (
    <>
    <div  style={{ textAlign:"left",width:"90%"}}>
      <HStack textAlign="left" gap="40px" >
          <Image mt="-20%" width="500px" height="500px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" w="50%" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgQdnzpvqEZOz3ghhfMAYTH_z6lOskJeIc2eSm-EjxPRg1-7ij" alt="Norway Map"></Image>
          <VStack >

  <Box p="40px" textAlign="center">
        <Heading as="h1" size="xl" mb="6">About Us</Heading>
        <Text fontSize="lg" mb="12">
          Welcome to Norway Tours, your premier destination for experiencing the breathtaking beauty and cultural richness of Norway.
        </Text>
        
        <Text fontSize="lg" mb="6">
        Our Mission:
      </Text>
        <Text mb="12">
          Our mission is to provide travelers with authentic and memorable experiences in Norway. We strive to create journeys that connect you with the essence of Norway's landscapes, traditions, and history.
        </Text>

        <Text fontSize="lg" mb="6">
        Our Team:
      </Text>
        <Text mb="12">
          Our team of experienced guides and travel enthusiasts are dedicated to making your Norway tour exceptional. With their in-depth knowledge and passion for Norway, our guides are here to share insights and stories that bring every destination to life.
        </Text>
        <Text fontSize="lg" mb="6">
        Responsible Tourism:
      </Text>
        <Text mb="12">
          At Norway Tours, we are committed to responsible tourism. We aim to minimize our environmental impact and contribute positively to the communities we visit. We believe in leaving the places we explore better than we found them.
        </Text>

        <Text fontSize="lg">
        Contact Us:
      </Text>
        <Text>
          We're here to answer any questions you have about our tours. Feel free to contact our team at contact@norwaytours.com or call us at +123-456-7890. Let's make your dream Norway adventure a reality!
        </Text>
      </Box>
            </VStack>
      </HStack>
</div>
<Footer/>
    </>
  );

}

export default AboutUs