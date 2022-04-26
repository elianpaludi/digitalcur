import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './News.module.scss'
import Image from 'next/image'

export default function News() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    centerPadding: '20px',
    className: 'sliderr',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    centerMode: true
  };
  return (
    <section className={styles.container}>
      <h3>News</h3>
      <Slider {...settings}>
            <Image src="/news.svg" width={420} height={200} alt=""/>
            <Image src="/news.svg" width={420} height={200} alt=""/>
            <Image src="/news.svg" width={420} height={200} alt=""/>
            <Image src="/news.svg" width={420} height={200} alt=""/>
            <Image src="/news.svg" width={420} height={200} alt=""/>
          </Slider>
    </section>
  )
};