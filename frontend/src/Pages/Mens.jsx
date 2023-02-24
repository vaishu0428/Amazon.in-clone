import React from 'react'
import Filter from '../components/Filter/Filter';
import MenData from '../components/Men/MenData'
import {Box, Grid, GridItem} from "@chakra-ui/react"
const Mens = () => {
  return (
   <Box h="auto" w="97%" m="auto" border="1px solid pink" p='3'>
   <Grid templateColumns={'20% 80%'}
   gap="3">
    <GridItem h="auto" border={"1px solid blue"} p="3">
      <Filter/>
    </GridItem>
    <GridItem h="auto" border={"1px solid blue"} p="3">
      <MenData/>
    </GridItem>
   </Grid>
   </Box>
  )
}

export default Mens;