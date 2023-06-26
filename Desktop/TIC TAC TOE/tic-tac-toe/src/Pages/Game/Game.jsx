import React, { useContext } from 'react'
import { Tab } from '../../styles/General.styled'
import { GameBoardStyle } from './Game.styled'
import GameCell from '../../components/GameCell/GameCell'
import { GameContext } from '../../contexts/GameContext'

const Game = () => {
  const {game} = useContext(GameContext)

  // const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Tab>
      <GameBoardStyle >
        {game.board.map((item, index) => (
        <GameCell key={index} cellItem={item} index={index}/>))}</GameBoardStyle>
    </Tab>
  )

}

export default Game
