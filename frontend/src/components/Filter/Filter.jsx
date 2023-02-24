import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text} from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
const Filter = () => {
    let [searchParams,setSearchParams]=useSearchParams()
   let initialStates=searchParams.getAll("brand")
    let [brand,setBrand]=useState(initialStates||[])
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
    useEffect(()=>
    {
       
      const params={
        brand
      }
   
     setSearchParams(params)
    },[brand]);
   
  return (
   <Box h='auto' w="100%" m='auto' textAlign="left">
    <Heading as='h4' size='md'>Filter By...</Heading>
    <Box>
    <Heading as='h4' size='md'>Brands</Heading>
    <Box>
        <input type="checkbox" value="levis" onChange={handleFilter} checked={brand.includes("levis")}/>
        <label>Levis</label>
    </Box>
    <Box>
    <input type="checkbox" value="denim" onChange={handleFilter} checked={brand.includes("denim")}/>
        <label>Denim</label>
    </Box>
    <Box> 
    <input type="checkbox" value="nike" onChange={handleFilter} checked={brand.includes("nike")}/>
        <label>Nike</label>
    </Box>
    <Box>
    <input type="checkbox" value="puma" onChange={handleFilter} checked={brand.includes("puma")}/>
        <label>Puma</label>
    </Box>
    <Box>
    <input type="checkbox" value="woodland" onChange={handleFilter} checked={brand.includes("woodland")}/>
        <label>Woodland</label>
    </Box>
    <Box>
    <input type="checkbox" value="polo" onChange={handleFilter} checked={brand.includes("polo")}/>
        <label>Polo</label>
    </Box>
    <Box>
    <input type="checkbox" value="peterEngland" onChange={handleFilter} checked={brand.includes("peterEngland")}/>
        <label>PeterEngland</label>
    </Box>
    <Box>
    <input type="checkbox" value="adidas" onChange={handleFilter} checked={brand.includes("adidas")}/>
        <label>Adidas</label>
    </Box>
    <Box>
    <input type="checkbox" value="bata" onChange={handleFilter} checked={brand.includes("bata")}/>
        <label>Bata</label>
    </Box>
    <Box>
    <input type="checkbox" value="lee" onChange={handleFilter} checked={brand.includes("lee")}/>
        <label>Lee</label>
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
    <input type="checkbox" value="montecarlo" onChange={handleFilter} checked={brand.includes("montecarlo")}/>
        <label>Montecarlo</label>
    </Box>
    <Box>
    <input type="checkbox" value="raymond's" onChange={handleFilter} checked={brand.includes("raymond's")}/>
        <label>Raymond's</label>
    </Box>
    <Box>
    <input type="checkbox" value="netplay" onChange={handleFilter} checked={brand.includes("netplay")}/>
        <label>Netplay</label>
    </Box>
    </Box>
    
  
    <Box>
    <Heading as='h4' size='md'>Type</Heading>
    <Box>
    <input type="checkbox" value="clothing" onChange={handleFilter} checked={brand.includes("clothing")}/>
        <label>Clothing</label>
    </Box>
    <Box>
    <input type="checkbox" value="shoes" onChange={handleFilter} checked={brand.includes("shoes")}/>
        <label>Shoes</label>
    </Box>
    <Box>
    <input type="checkbox" value="accessories" onChange={handleFilter} checked={brand.includes("accessories")}/>
        <label>Accessories</label>
    </Box>
    <Box>
    <input type="checkbox" value="coat" onChange={handleFilter} checked={brand.includes("coat")}/>
        <label>Coat</label>
    </Box>
    <Box>
    <input type="checkbox" value="pajama_pants" onChange={handleFilter} checked={brand.includes("pajama_pants")}/>
        <label>Pajama Pants</label>
    </Box>
  
    </Box>
   </Box>
  )
}

export default Filter