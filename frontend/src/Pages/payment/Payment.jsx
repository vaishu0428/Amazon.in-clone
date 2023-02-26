import { Box, Button, Divider, Flex, Heading, Image, Text,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,FormControl,FormLabel,Input, Checkbox, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {UnlockIcon,AddIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"
import axios from 'axios'

const Payment = () => {
  const [data,setdata]=useState([])
  const [total,settotal]=useState(0)

function handleclick(){
 let otp= window.prompt("enter otp sent to your phone")
 if(otp.length!==4){
  alert("Please enter otp sent to your registered number")
  handleclick()
 }else{
  alert("order succesfull")
 }
}

  async function getdata(){
    await axios.get(`https://smoggy-woolens-lamb.cyclic.app/cart/get`,{
      headers:{
        Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))
      }
    }).then(res=>{
      console.log(res)
      settotal(res.data.totalPrice)
      setdata(res.data.cartItems)}
      )
  

  }

     
  useEffect(()=>{
    getdata()
  },[])


    function InitialFocus() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
      
        return (
          <>
            <Button onClick={onOpen}>Add new address</Button>
           
      
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Your address</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel> Area</FormLabel>
                    <Input ref={initialRef} placeholder='Enter region' />
                  </FormControl>
                 
                  <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input placeholder='city' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>State</FormLabel>
                    <Input placeholder='state' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Mobile</FormLabel>
                    <Input placeholder='number' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Pincode</FormLabel>
                    <Input placeholder='pin' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button onClick={onClose} colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
     
  return (
    <div style={{backgroundColor:"#ffffff"}}>
<nav>
    <Flex justifyContent={"space-around"} bg="#eaeded" align="center" width={"90%"} m="10px auto">
        <Box><Link to="/"> <Image src="/login.jpeg" width={"150px"} borderRadius="50%"></Image></Link></Box>
        <Box> <Heading fontWeight={"400"}>Checkout</Heading></Box>
        <Box><UnlockIcon/></Box>
    </Flex>
</nav>

<Flex justify={'space-between'} gap="10px"  p="20px" width={"80%"} m="10px auto"  flexDirection={["column","row","row"]}>
<Box flex="8"bg="#ffffff" >
<Heading textAlign={"left"}m="10px 0px" color="#c56638" size="md">1.
Select a delivery address</Heading>
<Box  boxShadow={"base"} height={"fit-content"} p={"10px"} textAlign="left" >

<Flex justify={"space-between"}>
<Heading  size={["sm","sm","md","md"]}>Your address</Heading>
<Heading fontSize={"14px"} color="teal">Sending items to more than one address?</Heading>
</Flex>
<Divider orientation='horizontal'  m="10px 0px"  />
<Box> show profile address</Box>
<Box  ><AddIcon/> {InitialFocus()}</Box>

<Flex justify={"left"} gap="10px" mt="20px" alignItems="center">
    <Image src="https://m.media-amazon.com/images/G/31/AmazonPickupLocations/locker_orange._CB453122817_.png"></Image>  <Heading size={"sm"}>Your pickup locations</Heading>
</Flex>
<Divider orientation='horizontal'  mb="10px"  />
<Button colorScheme={"yellow"}>Use this address</Button>
</Box>



<Heading textAlign={"left"} color="#c56638" m="10px 0px" size="md">2.
Select a payment method</Heading>
<Box  boxShadow={"base"} height={"fit-content"} p={"10px"} textAlign="left" >


<Heading  size={["sm","sm","md","md"]}>payment method</Heading>

<Divider orientation='horizontal'  m="10px 0px"  />

<Checkbox >Pay with Debit/Credit/ATM Cards</Checkbox>
<Text m="10px 0px">You can save your cards as per new RBI guidelines.Learn More</Text>
<Image src="https://images-eu.ssl-images-amazon.com/images/G/31/payments-portal/r1/issuer-images/sprite-map._CB443317321_.png"></Image>
<Checkbox  m="10px 0px">Cash On Delivery/Pay On Delivery</Checkbox>
<Text>Scan & Pay using Amazon app. Cash, UPI ,Cards also accepted.Know more.</Text>

<Button mt="20px" onClick={handleclick
}>proceed</Button>
</Box>
<Heading textAlign={"left"} color="#c56638" m="10px 0px" size="md">3.
Review your orders</Heading>
<Grid boxShadow={"md"} >
    
    {data.map((el)=>{
    return <Box p={"10px"} key={el.product._id}>
      
   
<Flex flex="8" gap="20px" flexDirection={["column","column","row"]} >
<Box >
    <Image src={el.product.image} alt="/" width={["150px","150px","200px"]}/>
</Box>
<Box  textAlign={"left"} >
<Heading as='h4' fontWeight="medium" size='md'>
    {el.product.title}   {/* change to title */}
  </Heading>
  <Text fontSize={"16px"}>{el.product.name}</Text>
  <Text fontSize={"14px"}>{el.product.brand}</Text>
  <Text fontSize={"14px"}>{el.product.category}</Text>
  <Text m={"10px 0px"}>
Eligible for FREE Shipping</Text>
<Image src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="/"></Image>

</Box>

</Flex>



 


    <Divider orientation='horizontal' mt={"10px"} />
</Box>



    })}

</Grid>


</Box>





<Box boxShadow={"base"} bg="#ffffff" borderRadius={"8px"} height="fit-content" flex={"2"} p="10px"   ml="10px">
  
   <Text fontSize={"10px"}>Choose an address to continue checking out. You will still have a chance to review and edit your order before it is final.</Text>
   <Divider orientation='horizontal'  m="10px 0px"  />
   
   <Heading as='h4'  textAlign={"left"} m="10px 0px"  size='sm'>
  Order Summary
  </Heading>
  <Flex justify={"space-between"} fontSize="12px">
    <Box>Items</Box>
    <Box>--</Box>
  </Flex>
  <Flex justify={"space-between"} fontSize="12px"> <Box>Delivery:</Box>
    <Box>--</Box></Flex>
    <Divider orientation='horizontal'  m="10px 0px"  />
    <Flex justify={"space-between"} color="#c56638"> <Heading size="md">Order Total:</Heading>
    <Heading  color="#c56638" size="md"> ₹{total}</Heading></Flex>
    <Divider orientation='horizontal'  m="10px 0px"  />
</Box>


</Flex>



    </div>
  )
}

export default Payment