import React, { useContext } from "react";

import { Subtitle, Tab, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { SfxContext } from "../../contexts/SfxContext";

const Home = () => {
  const {hoverSfx} = useContext(SfxContext)
  return (
    <>
      <Tab columnBased><Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Link to='/game-on'>
      <Button onMouseEnter={() => hoverSfx}>Play Now</Button>
      </Link>
      </Tab>

      
    </>
  );
};

export default Home;
