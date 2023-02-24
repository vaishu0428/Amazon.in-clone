import { Box, Button, Divider, Flex, Heading, Image, Text,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,FormControl,FormLabel,Input, Checkbox, Grid } from '@chakra-ui/react'
import React from 'react'
import {UnlockIcon,AddIcon} from "@chakra-ui/icons"

const Payment = () => {

  const data=[
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


    function payment(){
        window.prompt("Enter otp sent to your number")
        alert("order successfull")
    }
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
                    <FormLabel> Name</FormLabel>
                    <Input ref={initialRef} placeholder='Enter name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input placeholder='city' />
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
        <Box> <Image src="/login.jpeg" width={"150px"} borderRadius="50%"></Image></Box>
        <Box> <Heading fontWeight={"400"}>Checkout</Heading></Box>
        <Box><UnlockIcon/></Box>
    </Flex>
</nav>

<Flex justify={'space-between'} gap="10px"  p="20px" width={"80%"} m="10px auto" border="1px solid"  flexDirection={["column","row","row"]}>
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

<Button mt="20px" colorScheme={"yellow"} onClick={payment}>use this method</Button>
</Box>
<Heading textAlign={"left"} color="#c56638" m="10px 0px" size="md">3.
Review your orders</Heading>
<Grid boxShadow={"md"} >
    
    {data.map((el)=>{
    return <Box p={"10px"} key={el.id}>
      
   
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

</Box>

</Flex>



 


    <Divider orientation='horizontal' mt={"10px"} />
</Box>



    })}

</Grid>


</Box>





<Box boxShadow={"base"} bg="#ffffff" borderRadius={"8px"} height="fit-content" flex={"2"} p="10px"   ml="10px">
   <Button colorScheme={"yellow"}>Use this address</Button>
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
    <Heading  color="#c56638" size="md"> ₹{7898}</Heading></Flex>
    <Divider orientation='horizontal'  m="10px 0px"  />
</Box>


</Flex>



    </div>
  )
}

export default Payment