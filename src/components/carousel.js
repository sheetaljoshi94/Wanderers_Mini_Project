import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuid}  from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "60%", height: "300px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
