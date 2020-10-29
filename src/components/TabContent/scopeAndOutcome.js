import React from "react";

import { Heading, Description, ImageContainer } from "./Style";

import ReactPlayer from 'react-player';

const ScopeOutcomeData = (props) => {
  return (
    <div id="Scope & Outcome">
      <Heading>{props.data.title}</Heading>
      <Description>
        <p>{props.data.description}</p>
      </Description>
      <ImageContainer>
        {/* <img
          src={require(`../../assests/Images/${props.data.image}.png`)}
          alt="Slider"
        /> */}

      <ReactPlayer url='https://www.youtube.com/watch?v=Cx5aNwnZYDc' />

      </ImageContainer>
    </div>
  );
};

export default ScopeOutcomeData;
