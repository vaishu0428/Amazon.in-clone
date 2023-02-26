import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { childData } from '../../Redux/AppReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import ChildSlider from './ChildSlider';
import { EmptyCart } from './Cart/EmptyCart';
import {Link} from "react-router-dom"

    
  

const ChildData = () => {
  const dispatch = useDispatch();
  let Child_product = useSelector((store) => store.AppReducer.Child_product)

  const location = useLocation();
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const order = searchParams.get('order')
    let paramObj = {
      params: {
        brand: searchParams.getAll("brand"),
        type: searchParams.get("type"),
        _sort: order && "price",
        _order: order,
      }
    }

    dispatch(childData(paramObj))
  }, [location.search,dispatch,searchParams])

  // console.log(Child_product, "Child_product")

  if (!Child_product) {
    return <EmptyCart />;
  }

  return (
    <Box>
      <ChildSlider />
      <Box p='2' m="2" borderBottom="1px solid gray">
        <Heading as='h1' size={['sm', 'lg', 'lg']} color={'gray'}>Childs Shopee ({Child_product.length} items)</Heading>
      </Box>
      {Child_product.length === 0 ? <EmptyCart /> :
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)', 'repeat(4,1fr)']}
          gap='3'>
          {Child_product.map((ele) => (

            <GridItem key={ele._id} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px">
              <Link to={`/Single/${ele._id}`}> <Image src={ele.image} /></Link>
              <Box p='2'>
                <Heading as='h4' size='md' textAlign="center">--{ele.brand}--</Heading>
                <Text color={"gray"} as="b">{ele.title}</Text>
                <Text color={"green"}>MRP : ₹{ele.price}</Text>
                <Text color={"gray"}>Type :{ele.type}</Text>
                {/* <Text color={"gray"}>Brand:{ele.brand}</Text> */}
                <Text color={"gray"}>Qty:{ele.quantity}</Text>
              </Box>
            </GridItem>
          ))
          }
        </Grid>
      }
    </Box>
  )
}


export default ChildData