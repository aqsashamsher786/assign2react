import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../sectionTitle";
import Aqsa from "../../images/girl.jpg";
import {  Marginer} from "../../components/marginer";
import  { Button } from "../../components/button/index";
const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  
  background-color: #FFEBEF;
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
  margin-right:-3rem;
  padding-left:5rem;
`;

const AboutImg = styled.img`
  width: 1000px;
  height: 350px;
  margin-left: 1em;
  margin-top: 3em;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;


export function Birthday(props) {
  return (
    <MoreAboutContainer  name="birthday" id = "birthday">
     
        <AboutContainer>
      
        <AboutImg src={Aqsa} />
        <AboutText>
      <SectionTitle>Birthday Bash</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      we have cover tons of birthday event and our clients gives us positive responses to our work and services we provided them.
         <Marginer direction="vertical" margin="1rem" />
         <Button>  Leran More</Button>
         
        </AboutText>
       
      </AboutContainer>
    </MoreAboutContainer>
    
  );
}
