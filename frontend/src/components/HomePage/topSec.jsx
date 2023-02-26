import React from 'react'
import { Box, Grid, GridItem, Heading, Image, Link, Text,  Button } from "@chakra-ui/react"
import SimpleSlider from './HomeComp/Slider2'
import SimpleSliders from './HomeComp/Slider3'
import SimpleSliders1 from "./HomeComp/Slider4"
import SimpleSliders2 from "./HomeComp/Slider1"
import SimpleSliders5 from "./HomeComp/Slider5"
import SimpleSliders6 from "./HomeComp/Slider6"
import { NavLink } from "react-router-dom"
const topSec = () => {
   let token=JSON.parse(localStorage.getItem("token"))
   return (
      <Box width={'100%'} height="auto" >
         <Box width={'100%'} height='auto'>
            <SimpleSliders2 />
         </Box>
         <Box mb="15px" >
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
               templateRows={['repeat(8, 1fr)', 'repeat(4, 1fr)', 'repeat(2, 1fr)']}
               columnGap={'4'}
               rowGap={'4'}>
               <NavLink to="/men">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="5">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Starting ₹87 | Amazon Brands & more</Heading>

                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap='4'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg' />
                           <Text fontSize='xs'>Starting ₹149 | Choppers & more</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile3-home_186x116_in-en._SY116_CB612501076_.jpg' />
                           <Text fontSize='xs'>Starting ₹87 | String lights & more</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile1-kitchen_186x116_in-en._SY116_CB612501057_.jpg' />
                           <Text fontSize='xs'>Starting ₹239 | Kitchen storage & containers</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg' />
                           <Text fontSize='xs'>Starting ₹189 | Wall Stickers & more</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">Shop Now</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/women">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Shop & Pay | Earn rewards daily</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap={'4'}
                        rowGap={'4'}
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg' w="100%" h="110px" />
                           <Text fontSize='xs'>Claim your scratch cards</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg' w="100%" h="110px" />
                           <Text fontSize='xs'>
                              Redeem your collected rewards</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg' w="100%" h="110px" />
                           <Text fontSize='xs'>Pay & Win scratch cards</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg' w="100%" h="110px" />
                           <Text fontSize='xs'>Shop & Pay
                              Shop & Collect Rewards daily</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">See more</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/kid">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>SUp to 60% off | Styles for men</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap={'4'}
                        rowGap={'4'}
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Clothing</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Footware</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Watches</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>bags & lagguge</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">See all offers</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/men">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Starting ₹87 | Amazon Brands & more</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap='4'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg' />
                           <Text fontSize='xs'>Starting ₹149 | Choppers & more</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile3-home_186x116_in-en._SY116_CB612501076_.jpg' />
                           <Text fontSize='xs'>Starting ₹87 | String lights & more</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile1-kitchen_186x116_in-en._SY116_CB612501057_.jpg' />
                           <Text fontSize='xs'>Starting ₹239 | Kitchen storage & containers</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg' />
                           <Text fontSize='xs'>Starting ₹189 | Wall Stickers & more</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">Shop Now</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/kid">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Up to 70% off | Clearance store</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg' h="310px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">See more</Text></Link>
                  </GridItem>
               </NavLink>

               <NavLink to="/kid">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Automotive essentials | Up to 60% off</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap='4'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Cleaning accessories</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Tyre & rim care</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Helmates</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Vacuum cleaner</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">See more</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/women">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Up to 50% off | Monitor blood sugar at home</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_lowres_ap_desk_rev._SY304_CB612821865_.jpg' h="290px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">Visit store</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/men">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Up to 60% off | Professional tools, testing & more</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap={'4'}
                        rowGap={'4'}
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Proffesional tools</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>measuring Instruments</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Cleaning Supplies</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Medical Supplies</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">See more</Text></Link>
                  </GridItem>
               </NavLink>
            </Grid>
         </Box>
         {/*  */}
         <Box bgColor={'white'} p="10" mb='15px'>
            <SimpleSlider />
         </Box>
         <Box bgColor={'white'} p="7" mb='15px'>
            <SimpleSliders />
         </Box>
         <Box bgColor={'white'} p="3" mb='15px'>
            <SimpleSliders1 />




         </Box>
         {/*  */}
         <Box mb='15px'>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
               templateRows={['repeat(4, 1fr)', 'repeat(2, 1fr)', 'repeat(1, 1fr)']}
               columnGap={'4'}
               rowGap={'4'}>
               <NavLink to="/men">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Sell on Amazon with 1-Click Launch Support</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/BTF_Nov22_0.5x._SY304_CB620465154_.png' h="290px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">Visit store</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/women">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Up to 60% off | Professional tools, testing & more</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap={'4'}
                        rowGap={'4'}
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_2_1x._SY116_CB616376703_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Laundry essentials</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_1_1x._SY116_CB616376703_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Household cleaners</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_4_1x._SY116_CB616376703_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Oral care</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_3_1x._SY116_CB616376703_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Air fresheners</Text>
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="5">See all offers</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/kid">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Daily essentials | Amazon Brands & more</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap={'4'}
                        rowGap={'4'}
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/DailyEss_QC_PC_186x116_1._SY116_CB606705068_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Up to 40% off | Grocery</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/DailyEss_QC_PC_186x116_2._SY116_CB606705068_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Up to 55% off | Household essentials</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/DailyEss_QC_PC_186x116_4a._SY116_CB606705068_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Up to 50% off | Beauty & grooming essentials</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/DailyEss_QC_PC_186x116_3._SY116_CB606705068_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>
                              Up to 40% off | Baby grooming essentials
                           </Text>
                        </GridItem>

                     </Grid>

                  </GridItem>
               </NavLink>
               <NavLink to="/men">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Under ₹499 | Pocket-friendly fashion</Heading>
                     <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap={'4'}
                        rowGap={'4'}
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Clohing</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Back Packs</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>Footware</Text>
                        </GridItem>
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg' w="100%" h="118px" />
                           <Text fontSize='xs'>
                              View all
                           </Text>
                        </GridItem>


                     </Grid>

                  </GridItem>
               </NavLink>
            </Grid>
         </Box>
         <Box bgColor={'white'} p="5" mb='15px'>
            <SimpleSliders5 />
         </Box>
         <Box bgColor={'white'} p="5" mb='15px'>
            <SimpleSliders6 />
         </Box>


         {/*  */}
         <Box mb='15px'>

            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
               templateRows={['repeat(4, 1fr)', 'repeat(2, 1fr)', 'repeat(1, 1fr)']}
               columnGap={'4'}
               rowGap={'4'}>
               <NavLink to="/kid">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Diapers & wipes | Starting ₹99</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg' h="290px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">Visit store</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/men">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Sell on Amazon with 1-Click Launch Support</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/BTF_Nov22_0.5x._SY304_CB620465154_.png' h="290px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">Visit store</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/kid">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Diapers & wipes | Starting ₹99</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg' h="290px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">Visit store</Text></Link>
                  </GridItem>
               </NavLink>
               <NavLink to="/women">
                  <GridItem w='100%' h='420px' m='auto' bg='white' p="4">
                     <Heading as='h3' size={['md', 'sm', 'md']} pb='3'>Computers & Accessories</Heading>
                     <Grid
                        templateColumns='repeat(1, 1fr)'
                        templateRows='repeat(1, 1fr)'
                     >
                        <GridItem w='100%' h='auto'>
                           <Image src='https://m.media-amazon.com/images/I/71kSLhL3NDL._AC_SY200_.jpg' h="290px" w="100%" />
                        </GridItem>
                     </Grid>
                     <Link color={'blue'} ><Text fontSize='sm' mt="3">Visit store</Text></Link>
                  </GridItem>

               </NavLink>

            </Grid>
         </Box>

         <Box w='100%' h='auto' m='auto' textAlign={'center'} borderTop="1px solid gray" borderBottom={"1px solid gray"} pt='20px' pb="20px">
            <Text fontSize='md'>See personalized recommendations</Text>
{token?<Button colorScheme='yellow' w='150px' p='10px'onClick={()=>{
   localStorage.removeItem("token")
localStorage.removeItem("name")}}>Sign out</Button>:<Button colorScheme='yellow' w='150px' p='10px'><Link to="/login">Sign in</Link></Button>}
    
            <Text fontSize='md'>New Customer?</Text>
            <Text fontSize='md' color={'blue'}>Start here</Text>
         </Box>
      </Box>
   )
}

export default topSec;