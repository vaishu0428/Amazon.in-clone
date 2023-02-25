import { Box, Button, Checkbox, Divider, Flex, Grid, Heading,Image,   Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import SimpleSliders6 from '../../components/HomePage/HomeComp/Slider6'

import SimpleSliders2 from '../../components/HomePage/HomeComp/Slider1'
import SimpleSliders from '../../components/HomePage/HomeComp/Slider3'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {Link} from "react-router-dom"

const dat=[
  {
      "_id": "639f497f97b38063c0ba2599",
      "imgUrl": "https://www.jcrew.com/s7-img-facade/BG280_KF4708?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
      "name": "Boys' short-sleeve Rolling Stones T-shirt",
      "description": "More graphic tees, please! Made from comfy, machine-washable cotton, our cool, colorful graphic T-shirts let them show their personality without saying a word.",
      "discount": "EXTRA 30% OFF SALE STYLES + EXTRA 15% OFF YOUR PURCHASE WITH CODE SHOPNOW",
      "price": 34.5,
      "discounted_price": 26.99,
      "type": "clothing",
      "category": "kids"
    },
    {
      "_id": "639f497f97b38063c0ba259a",
      "imgUrl": "https://www.jcrew.com/s7-img-facade/AZ940_WY2481?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
      "name": "Boys' cozy pajama pant",
      "description": "Pj's. Jammies. Jam-jams. Sleepy suits. No matter what you call them, our supersoft and cozy pajamas feel like a dream.",
      "discount": "EXTRA 30% OFF SALE STYLES + EXTRA 15% OFF YOUR PURCHASE WITH CODE SHOPNOW",
      "price": 39.5,
      "discounted_price": 31.99,
      "type": "clothing",
      "category": "kids"
    },
    {
      "_id": "639f497f97b38063c0ba259b",
      "imgUrl": "https://www.jcrew.com/s7-img-facade/BC454_BL7286?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
      "name": "Kids' short in towel terry",
      "description": "Perfect for warm-weather getaways (or any day), these shorts are made from cozy terry cloth that feels like your softest beach towel. The best part? We made a matching hoodie!",
      "discount": "EXTRA 30% OFF SALE STYLES + EXTRA 15% OFF YOUR PURCHASE WITH CODE SHOPNOW",
      "price": 39.5,
      "discounted_price": 31.99,
      "type": "clothing",
      "category": "kids"
    },
] 
const Cart = () => {
const [qty,setqty]=useState(1)
const [data,setdata]=useState(dat)
const [total,settotal]=useState(0)

   
  const deleteProduct=async(id)=>{


  }
  async function getdata(){
    await axios.get(`http://localhost:8090/cart/get`,{
      headers:{
        Authorization:JSON.parse(localStorage.getItem("token"))
      }
    }).then(res=>{
      settotal(res.totalPrice)
      setdata(res.cartItems)}
      )
  

  }
   
  useEffect(()=>{
    getdata()
  },[])

  return (
    <div style={{backgroundColor:"#eaeded"}}>
      <Navbar/>

<Flex justify={'space-between'} gap="10px" p="20px"  flexDirection={["column","row","row"]}>
<Box boxShadow={"md"} flex="8"bg="#ffffff" height={"fit-content"} p={"10px"}>
<Heading as='h4'  textAlign={"left"} fontWeight="hairline" size='lg'>
    Shopping Cart
  </Heading>
<Flex mt={"10px"}  justify={'space-between'} p="0px 30px"><Box>items</Box><Box>price</Box></Flex>
<Divider orientation='horizontal' />

<Grid >
    
    {data.map((el)=>{
    return <Box p={"10px"} key={el.id}>
      
    <Flex  >
<Flex flex="8" gap="20px" flexDirection={["column","column","row"]} >
<Box >
    <Image src={el.imgUrl} alt="/" width={["150px","150px","200px"]}/>
</Box>
<Box  textAlign={"left"} >
<Heading as='h4' fontWeight="medium" size='md'>
    {el.name}   {/* change to title */}
  </Heading>
  <Text>In stock</Text>
  <Text m={"10px 0px"}>
Eligible for FREE Shipping</Text>
<Image src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="/"></Image>
<Flex mt={"15px"} >
<Box>
<select onClick={(e)=>setqty(e.target.value)} style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px",border:"1px solid grey",borderRadius:"5px"}} >
  <option value="1">Qty : 1</option>
  <option value="2">Qty : 2</option>
  <option value="3">Qty : 3</option>
  <option value="4">Qty : 4</option>
  <option value="5">Qty : 5</option>
  <option value="6">Qty : 6</option>
  <option value="7">Qty : 7</option>
  <option value="8">Qty : 8</option>
  <option value="9">Qty : 9</option>
  <option value="10">Qty : 10</option>
</select>
</Box>
<Box ml={"20px"}><Button size={"sm"} onClick={()=>deleteProduct(el.id)}>Delete</Button></Box>
    
</Flex>
</Box>

</Flex>

<Box flex="1">
    <Heading size={"md"}>
    ₹{el.price}
    </Heading>
    <Text fontSize={"12px"} color="blue.600">Save 5 % more with Subscribe & Save
In stock</Text>


</Box>


    </Flex>


    <Divider orientation='horizontal' mt={"10px"} />
</Box>



    })}

</Grid>




</Box>

<Box  boxShadow={"Base"}   flex={"2"}   ml="10px">
  <Box bg="#ffffff" p={"10px"}>
  <Text fontSize={"12px"} color="blue.600">Your order is eligible for FREE Delivery. Select this option at checkout. Detailsk</Text>
  <Heading as='h5'm="10px 0px" fontWeight="hairline" size='md'>
   Subtotal ({3}items): ₹{total}
  </Heading>
  <Flex justify={"center"} mb="10px"><Checkbox></Checkbox>This order contains a gift </Flex>
  <Button><Link to="/payment">Proceed to Buy</Link></Button>
 



  </Box>
  <Box mt={"20px"} bg="#ffffff">
  {data.map((el)=>{
    return <Box p={"10px"} key={el.id}>
      
    <Flex gap={"7px"} flexDirection={["column","column","column","column","row"]}>

<Box flex={"4"}>
    <Image src={el.imgUrl} alt="/" width={"100%"}/>
</Box>
<Box  textAlign={"left"} flex="6" >
<Heading as='h4' fontWeight="medium" size='sm'>
    {el.name}   {/* change to title */}
  </Heading>
 

    <Text size={"sm"}>
    ₹{el.price}
    </Text>
   <Button size={"xsm"} p="2px 5px" fontSize="13px">See all buying option</Button>


</Box>


    </Flex>


   
</Box>



    })}

  </Box>

</Box>

</Flex>
<Box p={"0px 40px"} bg="#ffffff">
<SimpleSliders6/>
</Box >
<Box p={"0px 40px"} bg="#ffffff">
<SimpleSliders2/>
</Box >
<Box p={"0px 40px"} bg="#ffffff">
<SimpleSliders/>
</Box >


<Footer/>


    </div>
  )
}

export default Cart