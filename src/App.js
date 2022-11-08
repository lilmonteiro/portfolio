import React from "react";
import styled from "styled-components";
import BouncingBg from "./components/BouncingBg/BouncingBg";

const Container = styled.div`
  background: var(--background);
  height: 100vh;
  width: 100%;
`

function App(props) {
  return (
    <Container>
      <BouncingBg
      />
    </Container>
  );
}

export default App;
