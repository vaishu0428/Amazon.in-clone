import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text} from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
const Filter = () => {
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
    <input type="checkbox" value="clothing" onChange={handleFilter1} checked={type.includes("clothing")}/>
        <label>Clothing</label>
    </Box>
    <Box>
    <input type="checkbox" value="shoes" onChange={handleFilter1} checked={type.includes("shoes")}/>
        <label>Shoes</label>
    </Box>
    <Box>
    <input type="checkbox" value="accessories" onChange={handleFilter1} checked={type.includes("accessories")}/>
        <label>Accessories</label>
    </Box>
    <Box>
    <input type="checkbox" value="coat" onChange={handleFilter1} checked={type.includes("coat")}/>
        <label>Coat</label>
    </Box>
    <Box>
    <input type="checkbox" value="pajama_pants" onChange={handleFilter1} checked={type.includes("pajama_pants")}/>
        <label>Pajama Pants</label>
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

export default Filter