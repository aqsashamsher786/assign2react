import React from 'react';
import '../App.css';
import './HeroSection.css';
import { TopSection }from "./topSection";
import {Element1} from "./intoduction";
function HeroSection() {
  return (
    <div>
        
    <div className='hero-container'>
     <h3>Guide to Capture </h3>
     <h2>Precious Moments</h2>
      </div>
      <TopSection/>
    <Element1/>
      </div>

  );
}

export default HeroSection;