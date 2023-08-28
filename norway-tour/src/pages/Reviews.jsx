// Reviews.js
import React ,{useState}from 'react';
import { Box, Heading, Flex, Text, Avatar, HStack,Stack } from '@chakra-ui/react';
import Footer from './Footer';
import reviews from './ReviewData';

const Reviews = () => {

  const [ reviewData, setReviewData] = useState(reviews)

  return (
    <>
    <Heading mt="50px" as="h1" size="xl" mb="6">Customer Reviews</Heading>
   <HStack>
     <Box  width="50%" p="40px" textAlign="center">
      {/* <Heading marginLeft="100%" as="h1" size="xl" mb="6">Customer Reviews</Heading> */}
      {reviewData.map(review => (
        <Flex key={review.id} align="center" mt="8" justifyContent="center">
          <Avatar src={review.avatar} size="sm" name={review.name} mr="4" />
          <Box>
            <Text fontWeight="bold">{review.name}</Text>
            <Text>{review.comment}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
     <Box width="50%" p="40px" textAlign="center">
      {/* <Heading as="h1" size="xl" mb="6">Customer Reviews</Heading> */}
      {reviews.map(review => (
        <Flex key={review.id} align="center" mt="8" justifyContent="center">
          <Avatar src={review.avatar} size="sm" name={review.name} mr="4" />
          <Box>
            <Text fontWeight="bold">{review.name}</Text>
            <Text>{review.comment}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
   </HStack>
   <Footer/>
  </>
  );
};

export default Reviews;
