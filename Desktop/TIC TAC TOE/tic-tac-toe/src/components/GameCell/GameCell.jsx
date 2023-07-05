import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/Icon-X.svg";
import { ReactComponent as IconO } from "../../assets/svgs/Icon-O.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/X-outline.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/O-outline.svg";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modals/RoundOverModal/RoundOverModal";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);

  const { handleModal } = useContext(ModalContext);
  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);

    if (result) {
      roundComplete(result)      
      handleModal(<RoundOverModal/>)
    }
  };

  if (cellItem === "X") {
    return (
      <CellStyle>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "O") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "X" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
