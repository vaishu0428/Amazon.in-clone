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
export default class SimpleSlider extends Component {

render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
      <Box>
        <Heading as='h3' size='md' pb='3'>Today’s Deals  </Heading>
        <Slider {...settings}>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY200_.jpg" w="90%" height={'190px'}/>
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/41Ml+bxR8UL._AC_SY200_.jpg" w="90%" height={'190px'} />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/71JdO22IWBL._CB613517346_._SY200__AC_SY200_.png" w="90%" height={'190px'}/>
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/21Zm6-TFZEL._AC_SY200_.jpg" w="90%" height={'190px'} />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/41KGGnBmpgL._AC_SY200_.jpg" w="90%" height={'190px'} />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg" w="90%" height={'190px'}/>
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/31Jsbjg-WfL._AC_SY200_.jpg" w="90%" height={'190px'}/>
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/51d7rxTZmFL._AC_SY200_.jpg" w="90%" height={'190px'}  />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/31iM0EfRZ-L._AC_SY200_.jpg" w="90%" height={'190px'} />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY200_.jpg" w="90%" height={'190px'} />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/31XFxTn1DCL._AC_SY200_.jpg" w="90%" height={'190px'} />
         </Box>
         <Box bgColor={"#E3E6E6"} p='3'>
            <Image src="https://m.media-amazon.com/images/I/71Fn5PsIHjL._SX679__AC_SY200_.jpg"  w="90%" height={'190px'} />
         </Box>
        </Slider>
      </Box>
    );
}
}