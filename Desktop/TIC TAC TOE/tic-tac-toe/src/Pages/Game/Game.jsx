import React, { useContext } from 'react'
import { Tab } from '../../styles/General.styled'
import { GameBoardStyle } from './Game.styled'
import GameCell from '../../components/GameCell/GameCell'
import { GameContext } from '../../contexts/GameContext'
import Player from '../../components/Player/Player'

const Game = () => {
  const {game} = useContext(GameContext)

  // const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Tab >
      <Player player={game.player1} isPlayerActive={game.player1.choice === game.turn}/>
      <GameBoardStyle >
        {game.board.map((item, index) => (
        <GameCell key={index} cellItem={item} index={index}/>))}</GameBoardStyle>
        <Player player={game.player2} isPlayerActive={game.player2.choice === game.turn}/>
    </Tab>
  )

}

export default Game
