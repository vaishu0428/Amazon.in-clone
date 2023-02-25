import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {border, Box, Heading, Image, Link,Text} from "@chakra-ui/react"
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black"}}
        onClick={onClick}
      />
    );
  }
export default class ChildSlider extends Component {

render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      initialSlide: 0,
      autoplaySpeed: 2000,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Box p="2">
       
        <Slider {...settings}>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img2020/img21/kids/KidsCarnival/Feb2023/Ingress/Halo._SS300_QL85_FMpng_.png" w="85%" height={'140px'}  borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Kids Carnival</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/kidsfashion/halo/2._SS300_QL85_.jpg" w="85%" height={'140px'}  borderRadius="100%" />
            <Text color={'gray'} textAlign='center'>Girls Clothing</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/kidsfashion/halo/7_Character._SS300_QL85_.jpg" w="85%" height={'140px'}  borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Toons</Text>
         </Box>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/kidsfashion/halo/3._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Boys Clothing</Text>
         </Box>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/kidsfashion/halo/5._SS300_QL85_.jpg" w="85%" height={'140px'}  borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Footware</Text>
         </Box>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/kidsfashion/halo/4._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Baby Clothing</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/kidsfashion/halo/7._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Bagpacks</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/kidsfashion/halo/6._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%" />
            <Text color={'gray'} textAlign='center'>Watches</Text>
         </Box>
         
        </Slider>
      </Box>
    );
}
}