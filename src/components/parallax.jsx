import React from 'react';
import { Parallax } from 'react-parallax';
import Para from "../images/para.jpg";
import  { Button } from "./button/index";

const inlineStyle = {
  color: '#fff',
  left: '50%',
  top: '50%',
  fontSize: '50px',
  fontWeight : 'bold',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

const inlineStyleh6 = {
  color: '#fff',
  left: '50%',
  top: '70%',
  fontSize: '20px',
  position: 'absolute',
  padding: '5px',
  transform: 'translate(-50%, -50%)',
}
const inlineStyleb = {
  color: '#fff',
  left: '50%',
  top: '90%',
  fontSize: '20px',
  position: 'absolute',
  padding: '5px',
  transform: 'translate(-50%, -50%)',
}


function Parallaximage() {
  return (
    <div style={{ textAlign: 'center' }}>
     
      <Parallax bgImage={ Para } strength={-200} >
        <div style={{ height: 500 }}>
          <h1 style={inlineStyle}>OUR AIM</h1>
          <p style={inlineStyleh6}>Let's communicate and document your precious moment together. you live we will capture.</p>
      <div top="80px">
          <Button style={inlineStyleb }>   PRE BOOKING </Button>
</div>
        </div>


      </Parallax>
    </div>
  );
}

export default Parallaximage;