import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Products.module.scss";
import Card from "./Card";
import Image from "next/image";
export default function Products({title}) {
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 750,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      centerPadding: '20px',
      className: 'slider',
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1152,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <div className={styles.title}>
          <div className={styles.left}>
            <h3>{title}</h3>
            <button className={styles.top}>Top</button>
            <button className={styles.popular}>Popular</button>
            <button className={styles.mostSold}>Most sold</button>
          </div>
          <div className={styles.categories}>
            <a>See all</a>
            {/* <Image src="/icons/downtriangle.svg" width={18} height={18} /> */}
          </div>
        </div>
        <div className={styles.cards}>
          <Slider {...settings}>
            <Card
              image="/games/horizonzero.jpg"
              name="Horizon Zero Dawn"
              type="Digital Game"
              price="$9.99"
              subprice="$15.99"
            />
            <Card
              image="/games/fc6.jpg"
              name="Far cry 6"
              type="Digital Game"
              price="$19.99"
              subprice="$29.99"
            />
            <Card
              image="/games/bsinfinite.jpg"
              name="Bioshock Infinite"
              type="Digital game"
              price="$3.99"
              subprice="$9.99"
            />
            <Card
              image="/games/wow.jpg"
              name="World of Warcraft"
              type="Digital Game"
              price="$29.99"
              subprice="$49.99"
            />
            <Card
              image="/games/horizonzero.jpg"
              name="Horizon Zero Dawn"
              type="Digital Game"
              price="$9.99"
              subprice="$15.99"
            />
            <Card
              image="/games/fc6.jpg"
              name="Far cry 6"
              type="Digital Game"
              price="$19.99"
              subprice="$29.99"
            />
            <Card
              image="/games/bsinfinite.jpg"
              name="Bioshock Infinite"
              type="Digital game"
              price="$3.99"
              subprice="$9.99"
            />
            <Card
              image="/games/wow.jpg"
              name="World of Warcraft"
              type="Digital Game"
              price="$29.99"
              subprice="$49.99"
            />
          </Slider>
        </div>
      </section>
    );
  }