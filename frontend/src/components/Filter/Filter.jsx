import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text,Checkbox} from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
const Filter = () => {
    let [searchParams,setSearchParams]=useSearchParams()
   let initialStates=searchParams.getAll("brand")
   let initialType=searchParams.getAll("type")
   const initialOrder=searchParams.get("order")
    let [brand,setBrand]=useState(initialStates||[])
    const [type,setType]=useState(initialType||[])
    const [order,setOrder]=useState(initialOrder||"")
    // console.log(brand)
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
    <Box>
    <Heading as="h4" size={["sm","sm","md"]}>Brands</Heading>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="levis" onChange={handleFilter} checked={brand.includes("levis")}>Levis</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="denim" onChange={handleFilter} checked={brand.includes("denim")}>Denim</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}> 
    <Checkbox size={['sm','md','md']} colorScheme='green' value="nike" onChange={handleFilter} checked={brand.includes("nike")}>Nike</Checkbox>
     
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="puma" onChange={handleFilter} checked={brand.includes("puma")}>Puma</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="woodland" onChange={handleFilter} checked={brand.includes("woodland")}>Woodland</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="polo" onChange={handleFilter} checked={brand.includes("polo")}>Polo</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="peterEngland" onChange={handleFilter} checked={brand.includes("peterEngland")}>PeterEngland</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="adidas" onChange={handleFilter} checked={brand.includes("adidas")}>Adidas</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="bata" onChange={handleFilter} checked={brand.includes("bata")}>Bata</Checkbox>
    
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="lee" onChange={handleFilter} checked={brand.includes("lee")}>Lee</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="parkAvenue" onChange={handleFilter} checked={brand.includes("parkAvenue")}>ParkAvenue</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="blackberry" onChange={handleFilter} checked={brand.includes("blackberry")}>Blackberry</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="montecarlo" onChange={handleFilter} checked={brand.includes("montecarlo")}>Montecarlo</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="raymond's" onChange={handleFilter} checked={brand.includes("raymond's")}>Raymond's</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="netplay" onChange={handleFilter} checked={brand.includes("netplay")}>Netplay</Checkbox>
        
    </Box>
    </Box>
    
  
    <Box>
    <Heading as='h4' size='md'>Type</Heading>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="clothing" onChange={handleFilter1} checked={type.includes("clothing")}>Clothing</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="shoes" onChange={handleFilter1} checked={type.includes("shoes")}>Shoes</Checkbox>
     
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="accessories" onChange={handleFilter1} checked={type.includes("accessories")}>Accessories</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="coat" onChange={handleFilter1} checked={type.includes("coat")}>Coat</Checkbox>
     
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} colorScheme='green' value="pajama_pants" onChange={handleFilter1} checked={type.includes("pajama_pants")}>Pajama Pants</Checkbox>
       
    </Box>
  
    </Box>
    <Heading as='h1' size={['sm','sm','lg']} m="1" color={'gray'}>Sort By...</Heading>
    <Box m="3">
    <Heading as="h4" size={["sm","sm","md"]}>Price</Heading>
    <Box onChange={handleSort}>
   
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

export default Filter