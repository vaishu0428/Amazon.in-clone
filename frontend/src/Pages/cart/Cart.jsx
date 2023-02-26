import { Box, Button, Checkbox, Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import SimpleSliders6 from '../../components/HomePage/HomeComp/Slider6'

import SimpleSliders2 from '../../components/HomePage/HomeComp/Slider1'
import SimpleSliders from '../../components/HomePage/HomeComp/Slider3'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Footer1 from '../../components/Footer/Footer1'
import { Link } from "react-router-dom"


const Cart = () => {

  const [data, setdata] = useState([])
  const [total, settotal] = useState(0)
  const increase = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      console.log("Please login to add to cart");
      return;
    }
    try {
      await axios.patch(`https://smoggy-woolens-lamb.cyclic.app/cart/incQty/${id}`, {
        quantity: 1,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(res =>
        getdata()
      )
    } catch (error) {
      console.log(error)
    }
  }


  const decrease = async (id,qty) => {
    if(qty===1){
      deleteProduct(id)
      return
    }
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      console.log("Please login to add to cart");
      return;
    }
    try {
      await axios.patch(`https://smoggy-woolens-lamb.cyclic.app/cart/incQty/${id}`, {
        quantity:-1
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(res=>{
        // console.log(res)
        getdata()
    })
    } catch (error) {
      console.log(error)
    }
  }
  
  

  async function getdata() {
    await axios.get(`https://smoggy-woolens-lamb.cyclic.app/cart/get`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
      }
    }).then(res => {
      // console.log(res)
      settotal(res.data.totalPrice)
      setdata(res.data.cartItems)
      localStorage.setItem("total",JSON.stringify(res.data.cartItems.length))
      getdata()
    }
    )


  }
  const deleteProduct = async (id) => {
    await axios.delete(`https://smoggy-woolens-lamb.cyclic.app/cart/remove/${id}`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
      }
    }).then(res => getdata())


  }

  useEffect(() => {
    getdata()
  }, [])


  return (
    <div style={{ backgroundColor: "#eaeded" }}>
      <Navbar />

      <Flex justify={'space-between'} gap="10px" p="20px" flexDirection={["column", "row", "row"]}>
        <Box boxShadow={"md"} flex="8" bg="#ffffff" height={"fit-content"} p={"10px"}>
          <Heading as='h4' textAlign={"left"} fontWeight="hairline" size='lg'>
            Shopping Cart
          </Heading>
          <Flex mt={"10px"} justify={'space-between'} p="0px 30px"><Box>items</Box><Box>price</Box></Flex>
          <Divider orientation='horizontal' />
          {data.length > 0 ? <Grid >

            {data.map((el) => {
              
              return <Box p={"10px"} key={el.product._id}>

                <Flex  >
                  <Flex flex="8" gap="20px" flexDirection={["column", "column", "row"]} >
                    <Box >
                      <Image src={el.product.image} alt="/" width={["150px", "150px", "200px"]} />
                    </Box>
                    <Box textAlign={"left"} >
                      <Heading as='h4' fontWeight="medium" size='md'>
                        {el.product.title}   {/* change to title */}
                      </Heading>
                      <Text>In stock</Text>
                      <Text m={"10px 0px"}>
                        Eligible for FREE Shipping</Text>
                      <Image src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="/"></Image>
                      <Flex mt={"15px"} >
                        <Box>
                          <Button onClick={() => decrease(el.product._id,el.quantity)}>-</Button>{el.quantity} <Button onClick={() => increase(el.product._id)}>+</Button>
                        </Box>
                        <Box ml={"20px"}><Button size={"sm"} onClick={() => deleteProduct(el.product._id)}>Delete</Button></Box>

                      </Flex>
                    </Box>

                  </Flex>

                  <Box flex="1">
                    <Heading size={"md"}>
                      ₹{el.product.price*el.quantity}
                    </Heading>
                    <Text fontSize={"12px"} color="blue.600">Save 5 % more with Subscribe & Save
                      In stock</Text>


                  </Box>


                </Flex>


                <Divider orientation='horizontal' mt={"10px"} />
              </Box>



            })}

          </Grid> : <Heading size={"md"} textAlign="left" m="20px 0px">Add something to proceed</Heading>

          }






        </Box>

        <Box boxShadow={"Base"} flex={"2"} ml="10px">
          <Box bg="#ffffff" p={"10px"}>
            <Text fontSize={"12px"} color="blue.600">Your order is eligible for FREE Delivery. Select this option at checkout. Detailsk</Text>
            <Heading as='h5' m="10px 0px" fontWeight="hairline" size='md'>
              Subtotal ({data.length}items): ₹{total}
            </Heading>
            <Flex justify={"center"} mb="10px"><Checkbox></Checkbox>This order contains a gift </Flex>
            <Button><Link to="/payment">Proceed to Buy</Link></Button>




          </Box>
          <Box mt={"20px"} bg="#ffffff">
            {data.map((el) => {
              return <Box p={"10px"} key={el.product._id}>

                <Flex gap={"7px"} flexDirection={["column", "column", "column", "column", "row"]}>

                  <Box flex={"4"}>
                    <Image src={el.product.image} alt="/" width={"100%"} />
                  </Box>
                  <Box textAlign={"left"} flex="6" >
                    <Heading as='h4' fontWeight="medium" size='sm' overflow={"hidden"}>
                      {el.product.title}   {/* change to title */}
                    </Heading>


                    <Text size={"sm"}>
                      ₹{el.product.price}
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
        <SimpleSliders6 />
      </Box >
      <Box p={"0px 40px"} bg="#ffffff">
        <SimpleSliders2 />
      </Box >
      <Box p={"0px 40px"} bg="#ffffff">
        <SimpleSliders />
      </Box >


      <Footer1 />


    </div>
  )
}

export default Cart