import React from 'react'
import {Box} from "@chakra-ui/react"
import TopSec from '../components/HomePage/topSec';

const Home = () => {
  return (
    
    <Box  bgColor={"#E3E6E6"} pb='5'>
     <Box height={'auto'} width="93%" margin="auto" >
     <TopSec/>
     </Box>
    </Box>
    
  )
}

export default Home;