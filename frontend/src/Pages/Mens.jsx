import React from 'react'
import Filter from '../components/Filter/Filter';
import MenData from '../components/Men/MenData'
import {Box, Grid, GridItem} from "@chakra-ui/react"
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Mens = () => {
  return (
    <Box>
      <Navbar/>
   <Box h="auto" w="97%" m="auto"  p='3'>
   <Grid templateColumns={'20% 80%'}
   gap="3">
    <GridItem h="auto"  p="3">
      <Filter/>
    </GridItem>
    <GridItem h="auto"  p="3">
      <MenData/>
    </GridItem>
   </Grid>
   </Box>
   <Footer/>
   </Box>
  )
}

export default Mens;