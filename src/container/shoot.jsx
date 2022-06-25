import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Road from "../images/road.png";
import styled from "styled-components";
import {  Marginer} from "../components/marginer";


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

const Container = styled.div`
width:100%;
height: 500px;
margin-top: 3em;
  padding-bottom:1rem;
  background-color: #FFEBEF;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;
const AboutContainer = styled.div`
width: 850px;
height: 350px;
margin-top: 3em;
padding-top : 5rem;
  padding-left:2rem;
  padding-right:2rem;
  padding-bottom:1rem;
  background-color: #DBC3C8;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;


const AboutText = styled.span`
  font-size: 1rem;
  color: black;
  margin-top: 1em;
  font-family: "GoldmanBold";
  line-height: 1.4;
  padding : 0.5rem;
  @media screen and (max-width: 890px) {
    font-size: 0.99rem;
    padding : 0.5rem;
  }
`;

export default function FullWidthGrid() {
  return (
    <Box lg={{ flexGrow: 1 }}>
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
      <AboutImg src={Road}/>
        </Grid>
        <Grid item xs={6} md={6}>
            <AboutContainer>
              <h1>Aesthetic photoshoot</h1>
              <Marginer direction="vertical" margin="2rem" />
              <AboutText>our target is to provide the best aesthetic customize albums to our client fo there precious treasure.</AboutText>
            </AboutContainer>
        </Grid>       
      </Grid>
      </Container>
    </Box>
  );
}
