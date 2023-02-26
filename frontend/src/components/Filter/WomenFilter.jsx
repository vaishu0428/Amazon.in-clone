import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text,Checkbox} from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
const WomenFilter = () => {
 const [searchParams,setSearchParams]=useSearchParams()
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
    <Heading as='h1' size={['sm','md','lg']} m="1" color={'gray'}>Filter By...</Heading>
    <Box>
    <Heading as="h4" size={["sm","sm","md"]}>Brands</Heading>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="jCrew" onChange={handleFilter} checked={brand.includes("jCrew")}>JCrew</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="Sparx" onChange={handleFilter} checked={brand.includes("Sparx")}>Sparx</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}> 
    <Checkbox size={['sm','md','md']} value="Woodland" onChange={handleFilter} checked={brand.includes("Woodland")}>Woodland</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="Campus" onChange={handleFilter} checked={brand.includes("Campus")}>Campus</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="woodland" onChange={handleFilter} checked={brand.includes("woodland")}>Woodland</Checkbox>
      
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="Nike" onChange={handleFilter} checked={brand.includes("Nike")}>Nike</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="Biba" onChange={handleFilter} checked={brand.includes("Biba")}>Biba</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="denim" onChange={handleFilter} checked={brand.includes("denim")}>denim</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="bata" onChange={handleFilter} checked={brand.includes("bata")}>Bata</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="levis" onChange={handleFilter} checked={brand.includes("levis")}>levis</Checkbox>
        
    </Box>
   
    </Box>
    
  
    <Box>
    <Heading as='h4' size='md'>Type</Heading>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="earrings" onChange={handleFilter1} checked={type.includes("earrings")}>Earrings</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="bracelet" onChange={handleFilter1} checked={type.includes("bracelet")}>Bracelet</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="bag" onChange={handleFilter1} checked={type.includes("bag")}>Bag</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="sandals" onChange={handleFilter1} checked={type.includes("sandals")}>Sandals</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="sneaker" onChange={handleFilter1} checked={type.includes("sneaker")}>Sneaker</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="pant" onChange={handleFilter1} checked={type.includes("pant")}>Pant</Checkbox>
        
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="top" onChange={handleFilter1} checked={type.includes("top")}>Top</Checkbox>
       
    </Box>
    <Box m={['0','1','1']} color={'gray'}>
    <Checkbox size={['sm','md','md']} value="clothing" onChange={handleFilter1} checked={type.includes("clothing")}>Clothing</Checkbox>
      
    </Box>
  
    </Box>
    <Heading as='h4' size='md'>Sort By...</Heading>
    <Box>
    <Heading as='h4' size='md'>Price</Heading>
    <Box onChange={handleSort}>
   
    <input type="radio" name="sort_by" value="asc" defaultChecked={order==='asc'} />
        <label>Low to High</label>
     <br/>
    <input type="radio" name="sort_by" value="desc" defaultChecked={order==='desc'}/>
        <label>High to Low</label>
   
    </Box>
    </Box>
    <Box>
    <Heading as='h4' size='md'>New Arrivals</Heading>
    
    <Box><Text>Last 30 days</Text></Box>
    <Box><Text>Last 90 days</Text></Box>
    </Box>
   </Box>
  )
}

export default WomenFilter