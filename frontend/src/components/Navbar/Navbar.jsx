
import React, {  useState } from 'react'
import Styles from "./Navbar.module.css"

import { Box,Image, Text, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Show, VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, useDisclosure } from '@chakra-ui/react'
import { BiCart, BiMenu } from "react-icons/bi"
import { FaRegUser } from "react-icons/fa"
import { BsSearch } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"
import {Link} from "react-router-dom"









const Navbar = () => {
 


let name=JSON.parse(localStorage.getItem("name"))



  return <>
    <NavbarTop dName={name||"user"} />
     <NavbarMiddle />
  

  </>

}

export const NavbarTop = ({ dName }) => {



  const [show, setShow] = useState(false);

 
  function InitialFocus(name) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Text cursor={"pointer"} onClick={onOpen} color="white">{name?name:"Hello User"}</Text>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add your details for better experience</ModalHeader>
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
 
 








  return <HStack whiteSpace={'nowrap'} bg="#101213" zIndex="5" top="0" p="2" position="fixed" w="100%" color="white" justifyContent="space-between" gap="4" >
    <HStack spacing="15px">
     
        <Box >
      <Link to="/">   <Image src="/dukanlogo.png" alt='logo'
            width={["100px","150px","170px"]}
            height={"50px"} /></Link> 
        </Box>
    
      <HStack>
        <SlLocationPin />
        <Show above='lg'>
          <Box>
            <Text fontSize="12px">Hello</Text>
            <Heading size="xs">Select your address</Heading>
          </Box>
        </Show>
      </HStack>
    </HStack>
    <Box flex="1">

      <InputGroup  className={Styles.inputbox}>
        <InputLeftElement>
          <Box bg="#f3f3f3" py="2" px="3" borderRight="1px solid lightgray" borderLeftRadius="4">
            <Text color="black">
              All
            </Text>
          </Box>

        </InputLeftElement>
        <Input paddingLeft="50px" className={Styles.search_input} focusBorderColor="#daaa4d" color="black" bg="white" type="text"  placeholder="" />
        <VStack display={show ? "block" : "none"} p={show ? 2 : 0} border={` ${show ? 1 : 0}px solid #e4e4e4`} align={"start"} gap={2} className={Styles.search_result_container}>
        
        </VStack>
        <InputRightElement>
          <Box bg="#F3A847" p="3" borderRightRadius="4">
            <BsSearch color='black' />
          </Box>
        </InputRightElement>
      </InputGroup>

    </Box>
    <HStack spacing="20px">
      <Show above='md'>
        <HStack>
          <img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2FFlag-of-India.svg?alt=media&token=3a3a7538-fdd7-4989-b252-7a4fa043897e"
            alt='india flag'
            width="25"
            height="10"
          />
          <Text>EN</Text>
        </HStack>
      </Show>
      <Box >
        <Show above='md'>
          <Text fontSize="12px" >{InitialFocus(dName)}</Text>
        <Link to="/login"> <Heading size="xs">Account & Login</Heading></Link> 
        </Show>
        <Show below='md'>
        <Link to="/login">  <FaRegUser size="23px" /></Link>
        </Show>
     
      </Box>
      <Show above='lg'>
        <Link >
          <Box>
            <Text fontSize="12px">Returns</Text>
            <Heading size="xs">& Orders</Heading>
          </Box>
        </Link>
      </Show>
      <Link to="/cart">
        <HStack>
          <BiCart size="35px" />
          <Text>Cart {JSON.parse(localStorage.getItem("total"))}</Text>
        </HStack>
      </Link>
    </HStack>
  </HStack>
}

export const NavbarMiddle = () => {
  const Links = [
    {
      label: "All",
      href: "/"
    },
    {
      label: "Men",
      href: "/Men"
    },
    {
      label: "women",
      href: "/women"
    },
    {
      label: "Kids",
      href: "/kid"
    },
    {
      label: "Sports",
      href: "/sport"
    },
    {
      label: "Mobiles",
      href: "/categories"
    },
    {
      label: "Today's Deals",
      href: "/categories"
    },
    {
      label: "Customer Service",
      href: "/categories"
    },
    {
      label: "Electronics",
      href: "/categories"
    },
    {
      label: "Prime",
      href: "/categories"
    },
    {
      label: "Fashion",
      href: "/categories"
    },
    {
      label: "Amazon Pay",
      href: "/categories"
    },
    {
      label: "Home & Kitchen",
      href: "/categories"
    },
  ]

  return <HStack bg="#232F3E" color="white" border="1px solid"  py="1" mt="56px" justifyContent="space-between">
    <HStack spacing="3" overflow="hidden" whiteSpace={'nowrap'}>
      <BiMenu />
      {
        Links.map((link) => {
          return <Link key={link.label} to={link.href}><Text py={1}>{link.label}</Text></Link>
        })
      }
    </HStack>
    <Box position="relative">
      <Image src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2Fnav_sale_banner.jpg?alt=media&token=7adae246-773e-4d77-9810-343985fcf976"
        alt='offer'
        width="350"
        height="10"
      />
    </Box>
  </HStack>
}



export default Navbar