import React from 'react';
import { Jumbotron as Jumbo,Container } from "react-bootstrap";
import styled from "styled-components";

import classImage from '../assets/classImage.jpg';


const Styles = styled.div`
.jumbo {
    background: url(${classImage}) no-repeat fixed bottom;
    background-size: auto;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
        <Container>
            <h1>Los Angeles Jiu-Jitsu</h1>
            <p>Located in East Los Angeles</p>
        </Container>
    </Jumbo>
    </Styles>
)