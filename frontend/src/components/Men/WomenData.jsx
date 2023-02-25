import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

import {womenData} from "../../Redux/AppReducer/action"
import { useLocation, useSearchParams } from 'react-router-dom';
import {Box, Grid, GridItem, Image,Text} from "@chakra-ui/react"
const WomenData = () => {
  const dispatch=useDispatch();
  const Womens_product=useSelector((store)=>store.AppReducer.Womens_product)
  console.log(Womens_product)
  const location=useLocation();
  const [searchParams]=useSearchParams()
  // console.log(location)
  useEffect(()=>
  {
    const order=searchParams.get('order')
    let paramObj={
      params:{
      brand:searchParams.getAll("brand"),
      type:searchParams.getAll("type"),
      _sort: order && "price",
      _order:order,
      }
    }
    
   dispatch(womenData(paramObj))
  },[location.search])
  return (
    <Box>
     <Grid templateColumns={'repeat(4,1fr)'}
     gap='3'>
    { Womens_product.map((ele)=>(
      
        <GridItem key={ele.id}>
          <Image src={ele.image}/>
          <Text>{ele.name}</Text>
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

export default WomenData