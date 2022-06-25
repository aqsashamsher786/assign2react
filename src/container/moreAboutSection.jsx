import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "./sectionTitle";
import Aqsa from "../images/aqsa.jpeg";
import AboutImgUrl from "../images/ddd-min.png";
import Tel from "../images/tel.PNG";
import {  Marginer} from "../components/marginer";
import  { Button } from "../components/buttonp/index";
const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 350px;
  height: 350px;
  margin-left: 4em;
  margin-top: 3em;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;
const Divimage = styled.div`
  width: 150rem;
  height: 30rem;
  margin-left: 2em;
  position: relative;
  background-size:cover;
  
  background-image: url(${AboutImgUrl});
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
     
        <AboutContainer>
      
        <AboutText>
      <SectionTitle>About CEO Aqsa shamsher</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
        I am Aqsa Shamsher who turned out to be a photographer from clicking random pictures of event to
         becoming professional my main aim is to click canded aesthetic pictures and shots which can bring 
         smile to my client's face because .A good photographer is blessed with very special sense of good timing.
         <Marginer direction="vertical" margin="1rem" />
<h4>We take snapshots to preserve your memories.</h4>
         <Button>  <img src={Tel} height='26'alt='' />  + 92 (345) 1521767 </Button>
         
        </AboutText>
        <Divimage>
        <AboutImg src={Aqsa} alt=''/>
        </Divimage>
        
      </AboutContainer>
    </MoreAboutContainer>
  );
}
