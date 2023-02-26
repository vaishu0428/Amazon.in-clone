import React, { useEffect, useState } from 'react'
import {Box, Heading, Input, Text} from "@chakra-ui/react"
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
    <Heading as='h4' size='md'>Filter By...</Heading>
    <Box>
    <Heading as='h4' size='md'>Brands</Heading>
    <Box>
        <input type="checkbox" value="jCrew" onChange={handleFilter} checked={brand.includes("jCrew")}/>
        <label>JCrew</label>
    </Box>
    <Box>
    <input type="checkbox" value="Sparx" onChange={handleFilter} checked={brand.includes("Sparx")}/>
        <label>Sparx</label>
    </Box>
    <Box> 
    <input type="checkbox" value="Woodland" onChange={handleFilter} checked={brand.includes("Woodland")}/>
        <label>Woodland</label>
    </Box>
    <Box>
    <input type="checkbox" value="Campus" onChange={handleFilter} checked={brand.includes("Campus")}/>
        <label>Campus</label>
    </Box>
    <Box>
    <input type="checkbox" value="woodland" onChange={handleFilter} checked={brand.includes("woodland")}/>
        <label>Woodland</label>
    </Box>
    <Box>
    <input type="checkbox" value="Nike" onChange={handleFilter} checked={brand.includes("Nike")}/>
        <label>Nike</label>
    </Box>
    <Box>
    <input type="checkbox" value="Biba" onChange={handleFilter} checked={brand.includes("Biba")}/>
        <label>Biba</label>
    </Box>
    <Box>
    <input type="checkbox" value="denim" onChange={handleFilter} checked={brand.includes("denim")}/>
        <label>denim</label>
    </Box>
    <Box>
    <input type="checkbox" value="bata" onChange={handleFilter} checked={brand.includes("bata")}/>
        <label>Bata</label>
    </Box>
    <Box>
    <input type="checkbox" value="levis" onChange={handleFilter} checked={brand.includes("levis")}/>
        <label>levis</label>
    </Box>
   
    </Box>
    
  
    <Box>
    <Heading as='h4' size='md'>Type</Heading>
    <Box>
    <input type="checkbox" value="earrings" onChange={handleFilter1} checked={type.includes("earrings")}/>
        <label>Earrings</label>
    </Box>
    <Box>
    <input type="checkbox" value="bracelet" onChange={handleFilter1} checked={type.includes("bracelet")}/>
        <label>Bracelet</label>
    </Box>
    <Box>
    <input type="checkbox" value="bag" onChange={handleFilter1} checked={type.includes("bag")}/>
        <label>Bag</label>
    </Box>
    <Box>
    <input type="checkbox" value="sandals" onChange={handleFilter1} checked={type.includes("sandals")}/>
        <label>Sandals</label>
    </Box>
    <Box>
    <input type="checkbox" value="sneaker" onChange={handleFilter1} checked={type.includes("sneaker")}/>
        <label>Sneaker</label>
    </Box>
    <Box>
    <input type="checkbox" value="pant" onChange={handleFilter1} checked={type.includes("pant")}/>
        <label>Pant</label>
    </Box>
    <Box>
    <input type="checkbox" value="top" onChange={handleFilter1} checked={type.includes("top")}/>
        <label>Top</label>
    </Box>
    <Box>
    <input type="checkbox" value="clothing" onChange={handleFilter1} checked={type.includes("clothing")}/>
        <label>Clothing</label>
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