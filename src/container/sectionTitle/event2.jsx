import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../sectionTitle";
import Aqsa from "../../images/kid.jpg";
import {  Marginer} from "../../components/marginer";
import  { Button } from "../../components/button/index";
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
  width: 450px;
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

export function Birthday2(props) {
  return (
    <MoreAboutContainer>
     
        <AboutContainer>
      
        <AboutText>
      <SectionTitle>Formal Party</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      
we have also cover many others event like formal parties, gender reveals, wedding events. for our portfolio you can visit our gallery
         <Marginer direction="vertical" margin="1rem" />
         <Button>   Leran More</Button>
         
        </AboutText>
        <AboutImg src={Aqsa} />
        
      </AboutContainer>
    </MoreAboutContainer>
  );
}
