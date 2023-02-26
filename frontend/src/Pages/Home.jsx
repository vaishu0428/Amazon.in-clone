import React from 'react'
import { Box } from "@chakra-ui/react"
import TopSec from '../components/HomePage/topSec';
import Navbar from '../components/Navbar/Navbar';
import Footer1 from '../components/Footer/Footer1';
import Footer2 from '../components/Footer/Footer2';
import Footer3 from '../components/Footer/Footer3';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box bgColor={"#E3E6E6"} pb='5'>
        <Box height={'auto'} width="93%" margin="auto" >
          <TopSec />
        </Box>
      </Box>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </div>
  )
}

export default Home;