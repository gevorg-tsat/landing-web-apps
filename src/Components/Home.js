import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Инфосистема отслеживания состояний устройств 
          </h1>
          <p className="primary-text">
            Интерфейсы для визуализации устройств и их режима работы в сети
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
