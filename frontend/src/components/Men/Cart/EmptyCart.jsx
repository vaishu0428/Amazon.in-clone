import { Heading,Box,Image } from '@chakra-ui/react'

const EmptyCart = () => {
    return (
        <Box height={'auto'} width="50%" m="auto" mt="20px" >
            <Image src="https://png.pngtree.com/png-clipart/20201229/ourmid/pngtree-wicker-four-corners-basket-clip-art-png-image_2666978.jpg"  alt="Empty Cart" w="100%"/>
             <Heading m="20px" textAlign={'center'}>Empty...!</Heading>
        </Box>
    )
}

export { EmptyCart }