import React from "react";
import styled from "styled-components";
import {  Marginer} from "./marginer";
import { makeStyles } from '@material-ui/core/styles';
import {MoreAboutSection} from "../container/moreAboutSection"
import  { Button } from "./button/index";
import Parallaximage from "./parallax";
import { Birthday }from "../container/sectionTitle/event";
import { Birthday2 }from "../container/sectionTitle/event2";
import FullWidthGrid from "../container/shoot";
import Portfolio from "./Portfolio/Portfolio";
import Gallery from "./gallery/gallery";
import Footer from "./Footer";
// import { NavLink as Link  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const ServicesContainer = styled.div`
text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  
  background-color: #FFEBEF;
`;


const AboutContainer = styled.div`
  width:100%;
  margin-top:1rem;
  padding-right: 20rem;
  padding-left: 20rem;
  @media screen and (max-width: 480px) {
    font-size: 0.99rem;
    padding : 0.5rem;
  }
`;

const AboutText = styled.span`
  font-size: 1rem;
  color: black;
  font-family: "GoldmanBold";
  line-height: 1.4;
  padding : 0.5rem;
  @media screen and (max-width: 890px) {
    font-size: 0.99rem;
    padding : 0.5rem;
  }
`;

export const Element1 =() =>{
    const classes = useStyles();
  return(
    <div className={classes.root}>
      <Marginer direction="vertical" margin="5rem" />
      <ServicesContainer>
    <AboutContainer> 
     <AboutText>
     The only real treasure is in your head. Memories are better than diamonds and nobody can steal them from you and me.Taking  photos have always been a way tangible way holding onto my favorite memories. It makes me happy to hold a small, shiny pictureand be transported back in time. The way a photo of the sun escaping below the ocean could bring  back the feeling of wind rustling through my hair and across my skin, the aroma of sea salt wafting from the crashing waves makes me happy. 
      </AboutText>
      <Marginer direction="vertical" margin="2rem" />
      <Button> VIEW COURSE </Button>
      <Marginer direction="vertical" margin="5rem" />
    </AboutContainer> 
   
     
    </ServicesContainer>
<MoreAboutSection/>
   <Parallaximage/>
  
   <Birthday/>
   <Birthday2/>
   <FullWidthGrid/>
   <Portfolio/>
   <Gallery/>
   <Marginer direction="vertical" margin="20rem" />
   <Footer/>
  </div>
 
  )
}
