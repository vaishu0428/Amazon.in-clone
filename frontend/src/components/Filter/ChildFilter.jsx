import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text} from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
const ChildFilter = () => {
    let [searchParams,setSearchParams]=useSearchParams()
   let initialStates=searchParams.getAll("brand")
   let initialType=searchParams.getAll("type")
   const initialOrder=searchParams.get("order")
    let [brand,setBrand]=useState(initialStates||[])
    const [type,setType]=useState(initialType||[])
    const [order,setOrder]=useState(initialOrder||"")
    console.log(brand)
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
    <Heading as='h4' size='md'>Filter By...</Heading>
    <Box>
    <Heading as='h4' size='md'>Brands</Heading>
    <Box>
        <input type="checkbox" value="Puma" onChange={handleFilter} checked={brand.includes("Puma")}/>
        <label>Puma</label>
    </Box>
    <Box>
    <input type="checkbox" value="Fusefit" onChange={handleFilter} checked={brand.includes("Fusefit")}/>
        <label>Fusefit</label>
    </Box>
    <Box> 
    <input type="checkbox" value="Kidsville" onChange={handleFilter} checked={brand.includes("Kidsville")}/>
        <label>Kidsville</label>
    </Box>
    <Box>
    <input type="checkbox" value="Only" onChange={handleFilter} checked={brand.includes("Only")}/>
        <label>Only</label>
    </Box>
    <Box>
    <input type="checkbox" value="Cottinfab" onChange={handleFilter} checked={brand.includes("Cottinfab")}/>
        <label>Cottinfab</label>
    </Box>
    <Box>
    <input type="checkbox" value="DressBerry" onChange={handleFilter} checked={brand.includes("DressBerry")}/>
        <label>DressBerry</label>
    </Box>
    <Box>
    <input type="checkbox" value="FabAlley" onChange={handleFilter} checked={brand.includes("FabAlley")}/>
        <label>FabAlley</label>
    </Box>
    <Box>
    <input type="checkbox" value="raymond's" onChange={handleFilter} checked={brand.includes("raymond's")}/>
        <label>Raymond's</label>
    </Box>
    <Box>
    <input type="checkbox" value="parkAvenue" onChange={handleFilter} checked={brand.includes("parkAvenue")}/>
        <label>ParkAvenue</label>
    </Box>
    <Box>
    <input type="checkbox" value="blackberry" onChange={handleFilter} checked={brand.includes("blackberry")}/>
        <label>Blackberry</label>
    </Box>
    <Box>
    <input type="checkbox" value="khadims" onChange={handleFilter} checked={brand.includes("khadims")}/>
        <label>Khadims</label>
    </Box>
    <Box>
    <input type="checkbox" value="netplay" onChange={handleFilter} checked={brand.includes("netplay")}/>
        <label>Netplay</label>
    </Box>
    <Box>
    <input type="checkbox" value="siyaram's" onChange={handleFilter} checked={brand.includes("siyaram's")}/>
        <label>Siyaram's</label>
    </Box>
    <Box>
    <input type="checkbox" value="levis" onChange={handleFilter} checked={brand.includes("levis")}/>
        <label>Levis</label>
    </Box>
    <Box>
    <input type="checkbox" value="Buddyz" onChange={handleFilter} checked={brand.includes("Buddyz")}/>
        <label>Buddyz</label>
    </Box>
    <Box>
    <input type="checkbox" value="Funcorp" onChange={handleFilter} checked={brand.includes("Funcorp")}/>
        <label>Funcorp</label>
    </Box>
    <Box>
    <input type="checkbox" value="Shinse" onChange={handleFilter} checked={brand.includes("Shinse")}/>
        <label>Shinse</label>
    </Box>
    <Box>
    <input type="checkbox" value="Brainsmith" onChange={handleFilter} checked={brand.includes("Brainsmith")}/>
        <label>Brainsmith</label>
    </Box>
    <Box>
    <input type="checkbox" value="levis" onChange={handleFilter} checked={brand.includes("levis")}/>
        <label>Levis</label>
    </Box>
    
    </Box>
    
  
    <Box>
    <Heading as='h4' size='md'>Type</Heading>
    <Box>
    <input type="checkbox" value="clothing" onChange={handleFilter1} checked={type.includes("clothing")}/>
        <label>Clothing</label>
    </Box>
    <Box>
    <input type="checkbox" value="baby" onChange={handleFilter1} checked={type.includes("baby")}/>
        <label>Baby</label>
    </Box>
    <Box>
    <input type="checkbox" value="accessories" onChange={handleFilter1} checked={type.includes("accessories")}/>
        <label>Accessories</label>
    </Box>
    <Box>
    <input type="checkbox" value="sweatshirts-and-sweatpants" onChange={handleFilter1} checked={type.includes("sweatshirts-and-sweatpants")}/>
        <label>Sweaters-shirts-pants</label>
    </Box>
    <Box>
    <input type="checkbox" value="coats-and-jackets" onChange={handleFilter1} checked={type.includes("coats-and-jackets")}/>
        <label>Coats & Jackets</label>
    </Box>
    <Box>
    <input type="checkbox" value="dresses-and-jumpsuits" onChange={handleFilter1} checked={type.includes("dresses-and-jumpsuits")}/>
        <label>Jumpsuites</label>
    </Box>
    <Box>
    <input type="checkbox" value="shorts" onChange={handleFilter1} checked={type.includes("shorts")}/>
        <label>Shorts</label>
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
   </Box>
  )
}

export default ChildFilter