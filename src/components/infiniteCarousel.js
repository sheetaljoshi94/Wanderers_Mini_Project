import React, { Component } from "react";
import Slider from "react-slick";
import Review1 from '../assets/Story1.jpg'
import Review2 from '../assets/Story2.jpg'
import Review3 from '../assets/Story3.jpg'
import Review4 from '../assets/Story4.jpg'
import Review5 from '../assets/Story5.jpg'
import Review6 from '../assets/Story6.jpg'
import Review7 from '../assets/Story7.jpg'
import Review8 from '../assets/Story8.jpg'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 4,
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
      <div>
        <Slider {...settings}>
          <div>
            <img src={Review1} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review2} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review3} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review4} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review5} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review6} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review7} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review8} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review1} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review2} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review3} width="220" height="350" alt="8" />
          </div>
          <div>
            <img src={Review4} width="220" height="350" alt="8" />
          </div>
        </Slider>
      </div>
    );
  }
}