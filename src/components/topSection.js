import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import BackgroundImg from "../images/face.jpg";
import couple from "../images/dfdfdf.jpg";
import c from "../images/C.PNG";
//import image from "../../assets/illustrations/c.png";
const Container = styled.div`
 width: 100%;
  padding-left:2rem;
  padding-right:2rem;
  position: relative;
  background-color: white;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
  padding-top : 1rem;
  
  }
`;

const TopContainer1 = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;
const MiddleContainer = styled.div`
  width: 60%;
  padding-top:3rem;
  border-radius : 50%;
  height : 50rem;
  position: cover;
  justify-content: center;
  align-items: center;
  margin-left: 15rem;
  @media screen and (max-width: 890px) {
   
    top:1rem;
    height:20rem;
    background-size:cover;
    background-position:center;
  }
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 50%;
  justify-content : center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 890px) {
    height:10rem;
  }
`;
const MinBackgroundFilter = styled.div`
  width: 30%;
  height: 12rem;
  border-radius: 50%;
  position:relative;
  float:right;
  margin-left:33rem;
  @media screen and (max-width: 890px) {
    height:10rem;
  }
`;
const MBackgroundFilter = styled.div`
  display: grid;
  width:125%;
  height: 15rem;
  padding : 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, auto);
  list-style: none;
  align-items: center;
  text-align: flex;
  justify-content: end;
  @media screen and (max-width: 890px) {
    height:10rem;
  }
`;
const Image = styled.img`
border-radius: 50%;
`


export function TopSection(props) {
 

  return (
    <Element name="topSection" id ="home">
     <Container>
       <TopContainer1>
        <MiddleContainer>
          < MBackgroundFilter>
          <MinBackgroundFilter><Image src={c} width="250" height="200" /></MinBackgroundFilter>
          <MinBackgroundFilter><Image src={couple} width="250" height="200" /></MinBackgroundFilter>
          </MBackgroundFilter>
    
          <BackgroundFilter><Image src={BackgroundImg} width="600" height="600" /></BackgroundFilter>
      
        </MiddleContainer></TopContainer1></Container> 
    </Element>
  );
}
