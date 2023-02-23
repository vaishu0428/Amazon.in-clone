import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Box, Heading, Image, Link,Text} from "@chakra-ui/react"
let arr=[
    {
        img:"https://m.media-amazon.com/images/I/71jDgbvJQCL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/8101uN22EvL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/91VxMFzTHGL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/61ByPaeEZkL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/91QeC8FRoaL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71jDgbvJQCL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/91F104LXpLL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/8101uN22EvL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71kp4OcxqlL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/912Ub6QvF6L._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/81EIQZgXtyL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/91OW5fHVO3L._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/91dlT-CoyFL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/81HVBLT6-hL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/51UpZe8VwrL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/51Y-GlagJfL._AC_SY200_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/A1T6Dn8xQeL._AC_SY200_.jpg"
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
export default class SimpleSliders6 extends Component {

render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
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
        <Heading as='h3' size='md' pb='3'>Under ₹599 | Popular home & kitchen picks on a budget from local shops
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