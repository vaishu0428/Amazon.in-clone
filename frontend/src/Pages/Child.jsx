import React from 'react'
import ChildFilter from '../components/Filter/ChildFilter'
import ChildData from '../components/Men/ChildData'
import {Box, Grid, GridItem} from "@chakra-ui/react"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Childs = () => {
  return (
    <Box>
      <Navbar/>
   <Box h="auto" w="97%" m="auto" p='3' >
   <Grid templateColumns={'20% 80%'}
   gap="3">
    <GridItem h="auto"  p="3" borderRight={'3px solid #E3E6E6'}>
      <ChildFilter/>
    </GridItem>
    <GridItem h="auto"  p="3">
      <ChildData/>
    </GridItem>
   </Grid>
   </Box>
   <Footer/>
   </Box>
  )
}

export default Childs;