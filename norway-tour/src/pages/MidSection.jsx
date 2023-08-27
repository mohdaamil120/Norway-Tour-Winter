import { Container, HStack, Heading ,Text, VStack,Image, Box} from '@chakra-ui/react'
import React from 'react'

function MidSection() {
  return (
    <>
        <div style={{marginTop:"35%"}}>
            <Heading as='h1' size="4xl">Things To Do In Norway</Heading>
            <div style={{ width:"50%" ,margin:"auto", marginTop:"40px" ,marginBottom:"50px"}}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ipsum facere quis non quisquam, rerum fugit facilis quia, eos aspernatur pariatur alias doloribus porro labore ullam iusto unde enim delectus?
            </Text>
            </div>
            <div style={{width:"70%" ,margin:"auto" ,display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                <HStack gap="10px" justifyContent="center" alignItems="center" alignContent="center">
                    <VStack width="15%">
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9tZIs4M5Y8k7JF6oOAcHPxaiwED9OTn-5IiBhlzjZVzlroExZ" alt="rafting logo" />
                        <Heading as="h5" size="20" >White Water Rafting</Heading>
                        <p style={{fontSize:"12px"}}>Lorem icing elit. rerum, aliquid id quo neque dolores iusto veritatis ea.</p>                    </VStack>
                    <VStack width="15%" >
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9iHaNVa2FsxXzBfUUp7kaXCtjsshMiEBA-Ws1x_D890e45epc" alt="rafting logo" />
                        <Heading as="h5" size="20">Action Sports</Heading>
                        <p style={{fontSize:"12px"}}>Lorem icing elit. lorem bring edirerum, editoriu aliquid id quo neque dolores iusto veritatis ea.</p>                    </VStack>
                    <VStack width="15%" >
                        <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0GEwRCRvsUEr1ZD5GT1i66wDpJTe6UV8A8ZlF1FFI--Eq78kN" alt="rafting logo" />
                        <Heading as="h5" size="20">Cycling and Mountain Biking</Heading>
                        <p style={{fontSize:"12px"}}>Lorem icing elit. rerum, liquid norway editorium lake  bring aliquid id quo neque dolores iusto veritatis ea.</p>                    </VStack>
                    <VStack width="15%" >
                        <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeSyc8sEu9cOW8RY1u2eaAHHGe_PuazShoPwit2WXYH7O5u-c9" alt="rafting logo" />
                        <Heading as="h5" size="20">Norwegian Food tour</Heading>
                        <p style={{fontSize:"12px"}}>Lorem icing elit. rerum, aliquid id quo neque dolores iusto veritatis ea.</p>                    </VStack>
                    <VStack width="15%" >
                        <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_CI9KhumCW1LDqHUM7pDW0vWbK8ze_EX_dVccWMV9FDeKevIq" alt="rafting logo" />
                        <Heading as="h5" size="20">Sightseening</Heading>
                        <p style={{fontSize:"12px"}}>Lorem icing elit. rerum, aliquid id lake mountains  quo neque dolores iusto veritatis ea.</p>                    </VStack>
                    <VStack width="15%" >
                        <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxjgJl-g57pIysVPIURf5hKtZM0BY9HxDOmm1IjeMa8fhEvafe" alt="rafting logo" />
                        <Heading as="h5" size="20">Hiking in Norway</Heading>
                        <p style={{fontSize:"12px"}}>Lorem icing elit. norway like winter snowrerum, aliquid id quo neque dolores iusto veritatis ea.</p>
                    </VStack>
                </HStack>
            </div>
            <Image mt="90px" boxShadow= "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" width="100%" src='https://images.unsplash.com/photo-1485903266100-192c2e0af64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG5vcndheSUyMCUyMG1vdW50YWlucyUyMHdpdGglMjB3aGl0ZSUyMHNub3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='mountains'></Image>
           
            <div style={{ marginTop:"-30%", textAlign:"right",fontSize:"90px", fontWeight:"bold",width:"50%",background: 'rgba(0, 0, 0, 0.5)' }}>
               Explore Our Norway Tours
            </div>
        </div>


    </>
  )
}

export default MidSection