import React from "react";
import styled from "styled-components";
import BouncingBg from "./components/BouncingBg/BouncingBg";
import { methods } from "./components/BouncingBg/methods";
import Ball from "./components/BouncingBg/Ball";


const Container = styled.div`
  background: var(--background);
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
        
  justify-content: center;
`

const Title = styled.h1`
  z-index: 3;
  color: white;
  text-align: center;
  font-size: 2em;
  mix-blend-mode: difference;

  h2{
    font-size: .5em;
  }
`

function App(props) {

  const balls = [
    new Ball("#FFD94F", 50, methods.getAngle(), 7),
    new Ball("#4B1EB3", 80, methods.getAngle(), 5),
    new Ball("#45FF67", 90, methods.getAngle(), 2),
    new Ball("#FF35FF", 30, methods.getAngle(), 10),
  ]

  return (
    <Container>
      <BouncingBg
        balls={balls}
      />
      <Title>Liandra <br /> Monteiro
      <h2>especialista em interfaces</h2>
      </Title>
    </Container>
  );
}

export default App;
