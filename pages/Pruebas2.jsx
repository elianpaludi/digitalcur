
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Products/Card";
import styles from './pruebas2.module.scss'

export default class MultipleItemsSe extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 750,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerPadding: '50px',
      className: "slider"
    };
    return (
      <div className={styles.container}>
        <h2 className={styles.title}> Multiple items </h2>
        <Slider {...settings}>
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
          <Card
            image="/games/horizonzero.jpg"
            name="Horizon Zero Dawn"
            type="Digital Game"
            price="$9.99"
            subprice="$15.99"
          />
        </Slider>
      </div>
    );
  }
}