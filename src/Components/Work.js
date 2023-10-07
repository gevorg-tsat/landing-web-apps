import React from "react";
import Neuronet from "../Assets/neuronet-image.png";
import FrontEnd from "../Assets/frontend-image.png";
import BackEnd from "../Assets/backend-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Neuronet,
      title: "Нейросеть",
      text: "Будет разработана модель для определения состояния света в кабинете(вкл/выкл)",
    },
    {
      image: FrontEnd,
      title: "FrontEnd",
      text: "Страница в виде карты с возможностью перемещения по этажам",
    },
    {
      image: BackEnd,
      title: "BackEnd",
      text: "Анализ состояния по сети. Передача и анализ видеопотока с камер",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        {/* <p className="primary-subheading"></p> */}
        <h1 className="primary-heading">Как это работает?</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" width="150"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
