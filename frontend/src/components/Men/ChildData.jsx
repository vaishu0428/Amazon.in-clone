import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { childData } from '../../Redux/AppReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom';
import {Box, Grid, GridItem, Image,Text} from "@chakra-ui/react"
const ChildData = () => {
  const dispatch=useDispatch();
  let Child_product=useSelector((store)=>store.AppReducer.Child_product)
  
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
    
   dispatch(childData(paramObj))
  },[location.search])
  return (
    <Box>
     <Grid templateColumns={'repeat(4,1fr)'}
     gap='3'>
    { Child_product.map((ele)=>(
      
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

export default ChildData