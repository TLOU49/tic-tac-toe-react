import React, { useContext } from "react";
import { Title } from "./RoundOver.styled";
import { Subtitle } from "./RoundOver.styled";
import { ModalBody, ModalFooter, ModalHeader } from "../../Modal/Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { Link} from 'react-router-dom'
const RoundOverModal = () => {
  const { game, resetBoard, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title>{game.roundWinner ? `${game.roundWinner.name} wins round!` : "Round drawn!"} </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>{game.roundWinner ? `${game.roundWinner.name} won this round!` : "Round drawn!"}  Choices will be switched now.</Subtitle>
        <Subtitle>{game.player1.name} {game.player1.score}</Subtitle>
        <Subtitle>{game.player2.name} {game.player2.score}</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button color="#f9cB11" onClick={()=>{handleModal(); resetBoard()}}>Continue</Button>
       <Link to="/">
        <Button color="#B437f9" onClick={()=>{restartGame(); handleModal()}}>Restart</Button>
        </Link> 
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
