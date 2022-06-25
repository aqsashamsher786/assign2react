import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
 import "swiper/swiper-bundle.min.css";
import P1 from "../../images/p1.jpg";
import P2 from "../../images/p2.jpg";
import P3 from "../../images/p3.jpg";
import P4 from "../../images/p4.jpg";
import styled from "styled-components";
import {  Marginer} from "../marginer";

const AboutContainer = styled.div`
width: 100%;
height: 500px;
margin-top: 5em;
  padding-left:2rem;
  padding-right:2rem;
  padding-bottom:1rem;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <Marginer direction="vertical" margin="20rem" />

      <span >GALLERY CHECK</span>
      <Marginer direction="vertical" margin="2rem" />
     
<AboutContainer>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={P1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P4} alt="" />
        </SwiperSlide>
      </Swiper>
      </AboutContainer>
    </div>
  );
};

export default Portfolio;
