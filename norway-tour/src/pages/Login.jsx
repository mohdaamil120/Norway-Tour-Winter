// Login.js
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Container } from '@chakra-ui/react';
import { useAuth } from './AuthContextProvider';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogin = () => {
    navigate("/")

  setIsLoggedIn(true);
  console.log('Login attempt:', "email-",email, "passwor-",password);
 
};

  return (
    <Container>

    <Box p="40px" textAlign="center">
      <Heading as="h1" size="xl" mb="6">Login</Heading>
      <FormControl id="email" mb="4">
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb="6">
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
    </Box>
    </Container>
  );
};

export default Login;




// import React from 'react'

// function Login() {
//   return (
//     <div>
//         <h1>Hello i m login page</h1>        
//     </div>
//   )
// }

// export default Login