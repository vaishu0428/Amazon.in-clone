import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text,Checkbox} from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
const ChildFilter = () => {
    let [searchParams,setSearchParams]=useSearchParams()
   let initialStates=searchParams.getAll("brand")
   let initialType=searchParams.getAll("type")
   const initialOrder=searchParams.get("order")
    let [brand,setBrand]=useState(initialStates||[])
    const [type,setType]=useState(initialType||[])
    const [order,setOrder]=useState(initialOrder||"")
   //  console.log(brand)
    const handleFilter=(e)=>
    {
       const newBrand=[...brand]
       if(newBrand.includes(e.target.value))
       {
        newBrand.splice(newBrand.indexOf(e.target.value),1)
       }
       else{
        newBrand.push(e.target.value)
       }
       setBrand(newBrand)
    }
    const handleFilter1=(e)=>
    {
       const newType=[...type]
       if(newType.includes(e.target.value))
       {
        newType.splice(newType.indexOf(e.target.value),1)
       }
       else{
        newType.push(e.target.value)
       }
       setType(newType)
    }
    const handleSort=(e)=>
    {
       setOrder(e.target.value)
    }
    useEffect(()=>
    {
       
      const params={
        brand,
        type
      }
      order && (params.order=order)
   
     setSearchParams(params)
    },[brand,order,type]);
   
  return (
   <Box h='auto' w="100%" m='auto' textAlign="left">
    <Heading as='h1' size={['sm','md','lg']} m="1" color={'gray'} >Filter By...</Heading>
    <Box m='3'>
   
    <Heading as="h4" size={["sm","sm","md"]}>Brands</Heading>
    <Box m={['0','1','1']} color={'gray'}>
        
        <Checkbox size={['sm','md','md']} colorScheme='green' value="Puma" onChange={handleFilter} checked={brand.includes("Puma")} >Puma</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Fusefit" onChange={handleFilter} checked={brand.includes("Fusefit")}>Fusefit</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}> 
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Kidsville" onChange={handleFilter} checked={brand.includes("Kidsville")}>Kidsville</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Only" onChange={handleFilter} checked={brand.includes("Only")}>Only</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Cottinfab" onChange={handleFilter} checked={brand.includes("Cottinfab")}>Cottinfab</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="DressBerry" onChange={handleFilter} checked={brand.includes("DressBerry")}>DressBerry</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="FabAlley" onChange={handleFilter} checked={brand.includes("FabAlley")}>FabAlley</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="raymond's" onChange={handleFilter} checked={brand.includes("raymond's")}>Raymond's</Checkbox>
    
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="parkAvenue" onChange={handleFilter} checked={brand.includes("parkAvenue")}>ParkAvenue</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="blackberry" onChange={handleFilter} checked={brand.includes("blackberry")}>Blackberry</Checkbox>
     
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="khadims" onChange={handleFilter} checked={brand.includes("khadims")}>Khadims</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="netplay" onChange={handleFilter} checked={brand.includes("netplay")}>Netplay</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="siyaram's" onChange={handleFilter} checked={brand.includes("siyaram's")}>Siyaram's</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="levis" onChange={handleFilter} checked={brand.includes("levis")}>Levis</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Buddyz" onChange={handleFilter} checked={brand.includes("Buddyz")}>Buddyz</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Funcorp" onChange={handleFilter} checked={brand.includes("Funcorp")}>Funcorp</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Shinse" onChange={handleFilter} checked={brand.includes("Shinse")}>Shinse</Checkbox>
       
    </Box>
    <Box m={['0','1','1']}color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="Brainsmith" onChange={handleFilter} checked={brand.includes("Brainsmith")}>Brainsmith</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="levis" onChange={handleFilter} checked={brand.includes("levis")}>Levis</Checkbox>
     
    </Box>
    
    </Box>
    
  
    <Box m='3'>
    <Heading as="h4" size={["sm","","md"]}>Type</Heading>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="clothing" onChange={handleFilter1} checked={type.includes("clothing")}>Clothing</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="baby" onChange={handleFilter1} checked={type.includes("baby")}>Baby</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="accessories" onChange={handleFilter1} checked={type.includes("accessories")}>Accessories</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="sweatshirts-and-sweatpants" onChange={handleFilter1} checked={type.includes("sweatshirts-and-sweatpants")}>Sweaters-shirts-pants</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="coats-and-jackets" onChange={handleFilter1} checked={type.includes("coats-and-jackets")}>Coats & Jackets</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="dresses-and-jumpsuits" onChange={handleFilter1} checked={type.includes("dresses-and-jumpsuits")}>Jumpsuites</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="shorts" onChange={handleFilter1} checked={type.includes("shorts")}>Shorts</Checkbox>
       
    </Box>
  
    </Box>
   
    <Heading as='h1' size={['sm','sm','lg']} m="1" color={'gray'}>Sort By...</Heading>
    <Box m="3">
    <Heading as="h4" size={["sm","sm","md"]}>Price</Heading>
    <Box onChange={handleSort} color='gray'>
   
    <input type="radio" name="sort_by" value="asc" defaultChecked={order==='asc'} />
        <label>Low to High</label>
     <br/>
    <input type="radio" name="sort_by" value="desc" defaultChecked={order==='desc'}/>
        <label>High to Low</label>
   
    </Box>
    </Box>
    
    <Box color="gray" m="3">
    <Heading as='h1' size={['sm','sm','lg']} m="1" color={'gray'}>New Arrivals</Heading>
    
    <Box><Text>Last 30 days</Text></Box>
    <Box><Text>Last 90 days</Text></Box>
    </Box>

   </Box>
  )
}

export default ChildFilter