import React from 'react';
import './styles.css';

const logoImg = require("../../assets/images/logo.svg") as string;
const landingImg = require("../../assets/images/landing.svg") as string;
const studyIcon = require("../../assets/images/icons/study.svg") as string;
const giveClassesIcon = require("../../assets/images/icons/give-classes.svg") as string;
const purpleHeartIcon = require("../../assets/images/icons/purple-heart.svg") as string;


function Landing(){
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2> 
        </div>
        <img 
          src={landingImg} 
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  )
}
export default Landing;