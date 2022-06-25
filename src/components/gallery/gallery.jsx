import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Happy from "../../images/happy.jpg";
import Pose from "../../images/pose.jpg";
import Kid from "../../images/kid.PNG";
import Hug from "../../images/hug.jpg";
import Sleep from "../../images/sleep.jpg";
import Wed from "../../images/p2.jpg";
import styled from "styled-components";
import {  Marginer} from "../marginer";

const AboutImg = styled.img`
  width: 450px;
  height: 300px;
  margin-left: 1.5em;
  margin-top: 3em;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

const Container = styled.div`
width:100%;
height: 650px;
margin-top: 3em;
  padding-bottom:1rem;
  background-color: #FFB5C4;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;



const AboutContainer = styled.div`

margin-top: 3em;
padding-top : 5rem;
text-align:center;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;


export default function Gallery() {
  return (
    <Box lg={{ flexGrow: 1 }} name="gallery" id = "gallery">
     
      <Container>
         <AboutContainer>
              <h1>Aesthetic photoshoot</h1>
              <Marginer direction="vertical" margin="2rem" />
              </AboutContainer>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
      <AboutImg src={Kid}/>
        </Grid>
        <Grid item xs={6} md={4}>
      <AboutImg src={Pose}/>
        </Grid>
        <Grid item xs={6} md={4}>
      <AboutImg src={Happy}/>
        </Grid>
        
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
      <AboutImg src={Hug}/>
        </Grid>
        <Grid item xs={6} md={4}>
      <AboutImg src={Sleep}/>
        </Grid>
        <Grid item xs={6} md={4}>
      <AboutImg src={Wed}/>
        </Grid>
        
      </Grid>
      </Container>
    </Box>
  );
}