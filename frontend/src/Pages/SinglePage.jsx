import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Box, Flex, Grid, GridItem, Heading, Image, Spacer, Text,Button} from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2"
import Footer3 from "../components/Footer/Footer3"
import axios from 'axios';
const SinglePage = () => {
    const {id}=useParams()
    const Products = useSelector((store) => store.AppReducer.Products);
    const Womens_product=useSelector((store)=>store.AppReducer.Womens_product)
    let Child_product = useSelector((store) => store.AppReducer.Child_product)
    const [menProduct,setMenProduct]=useState({})
    useEffect(()=>
    {
        let menData=Products.find((el)=>el._id===id)
        menData && setMenProduct(menData)
        let womenData=Womens_product.find((el)=>el._id===id)
        womenData && setMenProduct(womenData)
        let childData=Child_product.find((el)=>el._id===id)
        childData && setMenProduct(childData)
        // console.log(menData)
    })

    // const addTocart=(product_id)=>{
    //     const token = JSON.parse(localStorage.getItem("token"));
    //     if (!token) {
    //       console.log("Please login to add to cart");
    //       return;
    //     }
        
    //     axios.post("https://smoggy-woolens-lamb.cyclic.app/cart/add", {
    //       headers:{
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer " + token
    //       },
    //       body:JSON.stringify({product_id}) 
    //     })
    //     .then(res=>{
    //       console.log(res);
    //     })
    //     .catch(err=>{
    //       console.log(err);
    //     });
    //   }

    const addTocart = (product_id) => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
          console.log("Please login to add to cart");
          return;
        }
      
        axios
          .post(
            "https://smoggy-woolens-lamb.cyclic.app/cart/add",
            {
              product_id: product_id,
             
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((res) => {
            if(res.data.msg==="product added to cart successs")
            {
                alert("Product added success")
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
      
   
  return (
    <Box>
        <Navbar/>
   {/* <Text>{menProduct.type}</Text> */}
   <Box width={'90%'} height="auto" m="auto">
    <Grid templateColumns={"repeat(3,1fr)"}>
        <GridItem mt="6">
            <Image src={menProduct.image}/>
            <Text fontSize='md' color="gray">Click on expanded view</Text>
        </GridItem>
        <GridItem m="2" mt="6">
        <Text fontSize='md' color="blue">Visit the matrix store</Text>
        <Heading as='h3' size='lg'>{menProduct.title}</Heading>
        <Text fontSize='md' color="blue">Rating:{menProduct.rating}</Text>
        <Text fontSize='md' color="rebeccapurple">Deals of the Day</Text>
        <Heading as='h4' size='md'> -78%  ₹{menProduct.price}</Heading>
        <Text fontSize='md' color="gray">M.R.P.. ₹<strike>1299</strike></Text>
        <Text fontSize='md'>Inclusive of all Taxes</Text>
         <hr></hr>
         <Heading as='h4' size='md'>Offers</Heading>
         <Box>
            <Flex>
                <Box m="1" p="2" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                <Heading as='h5' size='sm'>No Cost EMI</Heading>
                <Text fontSize='md'>
                Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                </Box>
                <Spacer/>
                <Box m="1" p="2" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                <Heading as='h5' size='sm'>Bank Offers</Heading>
                <Text fontSize='md'>
                Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                </Box>
                <Spacer/>
                <Box m="1" p="2" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                <Heading as='h5' size='sm'>Partner Offer</Heading>
                <Text fontSize='md'>
                Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                </Box>
            </Flex>
         </Box>
        </GridItem>
        <GridItem>
            <Box width="70%" height="auto"  m="auto" mt="6" p="1"  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
            <Heading as='h4' size='md' p="1">  ₹{menProduct.price}</Heading>
            <Text fontSize='md' color={"blue"} p="1">Free Delivery Tuesday on First Order</Text>
            <Text fontSize='md' color={"green"} p="1">Or fastest delivery Tomorrow, February 27. Order within 7 hrs 32 mins. Details</Text>
            <Text fontSize='md' color={"red"} p="1">Select delivery location</Text>
            <Heading as='h4' size='md' p="1"> In Stock</Heading>
            <Text fontSize='md' p="1">Sold by Turrantbuy and Fulfilled by Amazon.</Text>
            <Button w="80%" colorScheme='yellow' m="2" borderRadius={"20px"} onClick={()=>addTocart(id)} >ADD TO CART</Button> 
            <Button w="80%" colorScheme='orange' m="2" borderRadius={"20px"}>Buy Now</Button> 
            </Box>
        </GridItem>
    </Grid>
   </Box>
   <Footer1/>
   <Footer2/>
   <Footer3/>
    </Box>
  )
}

export default SinglePage;