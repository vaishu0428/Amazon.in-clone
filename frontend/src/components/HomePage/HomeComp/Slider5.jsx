import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Box, Heading, Image, Link,Text} from "@chakra-ui/react"
let arr=[
    {
        img:"https://m.media-amazon.com/images/I/41qJr0DwcxL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41-hzS+9BKL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/713ev5gNpFL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/41rPNSflUVL._AC_SY200_.jpg"
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
export default class SimpleSliders5 extends Component {

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
            dots: false
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
        <Heading as='h3' size='md' pb='3'>Up to 50% off on kid's toys
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