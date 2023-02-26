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
export default class MenSlider extends Component {

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
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/halo-4._SS300_QL85_.jpg" w="85%" height={'140px'}  borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Mens Clothing</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/5._SS300_QL85_.jpg" w="85%" height={'140px'}  borderRadius="100%" />
            <Text color={'gray'} textAlign='center'>Footware</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/6._SS300_QL85_.jpg" w="85%" height={'140px'}  borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Watches</Text>
         </Box>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/8._SS300_QL85_FMpng_.png" w="85%" height={'140px'}   borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Luggage</Text>
         </Box>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/10._SS300_QL85_FMpng_.png" w="85%" height={'140px'}  borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Sunglasses</Text>
         </Box>
         <Box  >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/amzon-brands._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>Amazon brands</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/Luxury-brands-edited._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%"/>
            <Text color={'gray'} textAlign='center'>luxury brands</Text>
         </Box>
         <Box >
            <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/CML_Revised._SS300_QL85_.jpg" w="85%" height={'140px'}   borderRadius="100%" />
            <Text color={'gray'} textAlign='center'>4 star rated</Text>
         </Box>
         
        </Slider>
      </Box>
    );
}
}