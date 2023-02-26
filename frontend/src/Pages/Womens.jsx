import React from 'react'
import WomenFilter from '../components/Filter/WomenFilter';
import WomenData from '../components/Men/WomenData';
import {Box, Grid, GridItem} from "@chakra-ui/react"
import Footer1 from '../components/Footer/Footer1';
import Navbar from '../components/Navbar/Navbar';
const Womens = () => {
  return (
    <Box>
      <Navbar/>
   <Box h="auto" w="97%" m="auto" p={['1','','3']}>
   <Grid templateColumns={['35% 65%','20% 80%','20% 80%']}
   gap="3">
    <GridItem h="auto"  p={["0","","3"]} borderRight={'3px solid #E3E6E6'}>
      <WomenFilter/>
    </GridItem>
    <GridItem h="auto"  p="3">
      <WomenData/>
    </GridItem>
   </Grid>
   </Box>
   <Footer1/>
   </Box>
  )
}

export default Womens;