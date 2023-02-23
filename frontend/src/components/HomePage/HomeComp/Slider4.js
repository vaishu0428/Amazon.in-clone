import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Box, Heading, Image, Link,Text} from "@chakra-ui/react"
let arr=[
    {
        img:"https://m.media-amazon.com/images/I/71RpTYfbRiL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/81uJOXAfODL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71Ar15Ki1jL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/61AVMkuN+BL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/51cf92qyyAS._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/51eYerc4PRS._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/61IA8eSPIWL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71gqs-m95EL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71aJ5xKHwML._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71razUsFk9L._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/61Xm0MrGWPL._AC_SY200_.jpg"
    },
]
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
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
export default class SimpleSliders1 extends Component {

render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      
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
        <Heading as='h3' size='md' pb='3'>Season's best sellers from small businesses
  </Heading>
        <Slider {...settings}>
            {arr.map((e,index)=>(
                    <Box  p='3' key={index}>
                    <Image src={e.img} w="90%" height={'190px'}/>
                   </Box>
                ))}
        </Slider>
      </Box>
    );
}
}