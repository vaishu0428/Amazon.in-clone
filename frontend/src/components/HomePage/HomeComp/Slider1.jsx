import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Box, Heading, Image} from "@chakra-ui/react"
let arr=[
    {
        img:"https://m.media-amazon.com/images/I/71PO0B7z7DL._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/61mWRsVO4oL._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/81aKds7BOeL._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg"
    },
    {
        img:"https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg"
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
export default class SimpleSliders2 extends Component {

render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      fade: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
       
        <Slider {...settings}>
            {arr.map((e,index)=>(
                    <Box  w="100%" h='auto' key={index}>
                    <Image src={e.img} w="100%" height={'300px'}/>
                   </Box>
                ))}
        </Slider>
      </Box>
    );
}
}