import React from "react";

import { Subtitle, Tab, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <>
      <Tab><Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Link to='/game-on'>
      <Button>Play Now</Button>
      </Link>
      </Tab>

      
    </>
  );
};

export default Home;
