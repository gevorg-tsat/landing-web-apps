import React, { Component } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Gevorg from "../Assets/gevorg-photo.jpg"
import Denis from "../Assets/denis-photo.jpg"
import Semen from "../Assets/semen-photo.jpg"
// export default class Team extends Component {
  const Team = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="work-section-wrapper" id="team">
      <div className="work-section-top">
        <h2 className="primary-heading">Команда</h2>
      </div>
      <div className="testimonial-section-bottom">
        <Slider {...settings}>
          <div>
            <img src={Gevorg} height="400px" width="400px" style={{margin : "0 auto"}}></img>
          </div>
          <div>
            <img src={Denis} height="400px" width="400px" object-fit="cover" style={{margin : "0 auto"}}></img>
          </div>
          <div>
            <img src={Semen} height="400px" width="400px" object-fit="cover" style={{margin : "0 auto"}}></img>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
// }
export default Team;