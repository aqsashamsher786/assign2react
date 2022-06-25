import * as React from 'react';
import Box from '@material-ui/core/Box';
import styled from "styled-components";
import {  Marginer} from "./marginer";
import  { Button } from "./buttonf/index";



const Container = styled.div`
  width:100%;
  height: 8rem;
  padding-bottom:1rem;
  background-color: #49827D;
  position: relative;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;


const AboutContainer = styled.div`

margin-top: 6em;
text-align:center;
  position: relative;
  justify-content:center;
  @media screen and (max-width: 890px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;


export default function Footer() {
  return (
    <Box lg={{ flexGrow: 1 }}>
     
      <Container>
         <AboutContainer>
         <Marginer direction="vertical" margin="3rem" />
              <Button background-color= 'none'>Aesthetic@gmail.com</Button>
              </AboutContainer>
      </Container>
    </Box>
  );
}