import React from 'react'
import ChildFilter from '../components/Filter/ChildFilter'
import ChildData from '../components/Men/ChildData'
import {Box, Grid, GridItem} from "@chakra-ui/react"
const Childs = () => {
  return (
   <Box h="auto" w="97%" m="auto" border="1px solid pink" p='3'>
   <Grid templateColumns={'20% 80%'}
   gap="3">
    <GridItem h="auto" border={"1px solid blue"} p="3">
      <ChildFilter/>
    </GridItem>
    <GridItem h="auto" border={"1px solid blue"} p="3">
      <ChildData/>
    </GridItem>
   </Grid>
   </Box>
  )
}

export default Childs;