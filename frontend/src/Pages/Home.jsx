import React from 'react'
import {Box} from "@chakra-ui/react"
import TopSec from '../components/HomePage/topSec';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    
    <Box  bgColor={"#E3E6E6"} pb='5'>
      <Navbar/>
     <Box height={'auto'} width="93%" margin="auto" >
     <TopSec/>
     </Box>
     <Footer/>
    </Box>
    
  )
}

export default Home;