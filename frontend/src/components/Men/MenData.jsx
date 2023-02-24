import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { menData } from '../../Redux/AppReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom';
import {Box, Grid, GridItem, Image,Text} from "@chakra-ui/react"
const MenData = () => {
  const dispatch=useDispatch();
  let Products=useSelector((store)=>store.AppReducer.Products)
  
  const location=useLocation();
  const [searchParams]=useSearchParams()
  // console.log(location)
  useEffect(()=>
  {
    let paramObj={
      params:{
      brand:searchParams.getAll("brand"),
      }
    }
    
   dispatch(menData(paramObj))
  },[location.search])
  return (
    <Box>
     <Grid templateColumns={'repeat(4,1fr)'}
     gap='3'>
    { Products.map((ele)=>(
      
        <GridItem key={ele.id}>
          <Image src={ele.image}/>
          <Text>{ele.title}</Text>
          <Text>Price : ₹{ele.price}</Text>
          <Text>Type :{ele.type}</Text>
          <Text>Brand:{ele.brand}</Text>
          <Text>Qty:{ele.quantity}</Text>
        </GridItem>
    ))
    }
     </Grid>
      
    </Box>
  )
}

export default MenData