import {  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,FormControl,FormLabel,Input, Text,Button} from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from "react"
export default function ForgetPass() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email,setemail]=useState()
    const [pass,setpass]=useState("")
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
   const handleClick=async()=>{
    await axios.post(`https://smoggy-woolens-lamb.cyclic.app/user/forgetPassword`,{
        body:{
            email,newPassword:pass
        }
    }).then(res=>console.log(res))
    onClose()

   }
    return (
      <>
        <Text color={"black"} onClick={onOpen}>Forget Password?</Text>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Forget Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> email</FormLabel>
                <Input ref={initialRef} onChange={(e)=>setemail(e.target.value)} placeholder='Enter email' />
              </FormControl>
             
              <FormControl mt={4}>
                <FormLabel>New password</FormLabel>
                <Input placeholder='password' onChange={(e)=>setpass(e.target.value)} />
              </FormControl>
            
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleClick} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }