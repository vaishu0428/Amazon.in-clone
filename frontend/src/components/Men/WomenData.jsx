import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import WomenSlider from "./WomenSlider"
import {womenData} from "../../Redux/AppReducer/action"
import { useLocation, useSearchParams } from 'react-router-dom';
import {Box, Grid, GridItem, Heading, Image,Text} from "@chakra-ui/react"
import { EmptyCart } from './Cart/EmptyCart';
import {Link} from "react-router-dom"
const WomenData = () => {
  const dispatch=useDispatch();
  const Womens_product=useSelector((store)=>store.AppReducer.Womens_product)
  
  const location=useLocation();
  const [searchParams]=useSearchParams()

  useEffect(()=>
  {
    const order=searchParams.get('order')
    let paramObj={
      params:{
      brand:searchParams.getAll("brand"),
      type:searchParams.get("type"),
      _sort: order && "price",
      _order:order,
      }
    }

 
    
   dispatch(womenData(paramObj))
  },[location.search,dispatch,searchParams])

  // console.log(Womens_product,"women")
  
  return (
    <Box>
       <WomenSlider />
      <Box p='2' m="2" borderBottom="1px solid gray">
        <Heading as='h1' size={['sm', 'lg', 'lg']} color={'gray'}>Womens Shopee ({Womens_product.length} items)</Heading>
      </Box>
      {Womens_product && Womens_product.length > 0 ?
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)', 'repeat(4,1fr)']} gap='3'>
          { Womens_product.map((ele)=>(
              <GridItem key={ele._id} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px">
                <Link to={`/Single/${ele._id}`}><Image src={ele.image}/></Link>
                <Heading as='h4' size='md' textAlign="center">--{ele.brand}--</Heading>
                <Text color={"gray"} as="b">{ele.name}</Text>
                <Text color={"gray"} >MRP :  ₹{ele.price}</Text>
                <Text color={"gray"} >Type :{ele.type}</Text>
               
                <Text color={'gray'}>Qty:{ele.quantity}</Text>
              </GridItem>
          ))
}
        </Grid>
        :
        <EmptyCart />
      }
    </Box>
  )
}


export default WomenData