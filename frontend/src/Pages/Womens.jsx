import React from 'react'
import WomenFilter from '../components/Filter/WomenFilter';
import WomenData from '../components/Men/WomenData';
import {Box, Grid, GridItem} from "@chakra-ui/react"
const Womens = () => {
  return (
   <Box h="auto" w="97%" m="auto" border="1px solid pink" p='3'>
   <Grid templateColumns={'20% 80%'}
   gap="3">
    <GridItem h="auto" border={"1px solid blue"} p="3">
      <WomenFilter/>
    </GridItem>
    <GridItem h="auto" border={"1px solid blue"} p="3">
      <WomenData/>
    </GridItem>
   </Grid>
   </Box>
  )
}

export default Womens;