import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Ожидаемые результаты</p>
        <h1 className="primary-heading">
          ПК. Камеры. Кабинеты.
        </h1>
        <ol className="primary-text">
          {/* <li>ПО для сбора устройств в сети и сохранения их в базу данных</li> */}
          <li>Страница с текущим состоянием устройств</li>
          <li>Интерфейс расположения устройств на схеме</li>
          <li>Cоздание объектов и добавления слоев на карту</li>
          <li>Модель определяющая уровень света в помещении по камере</li>
          <li>Просмотр видео с камер</li>
        </ol>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}

      </div>
    </div>
  );
};

export default About;
