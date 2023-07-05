import React from "react";
import { AvatarWrapper, PlayerWrapper, Text } from "./Player.styled";
import Avatar, { genConfig } from 'react-nice-avatar'

const Player = ({player, isPlayerActive}) => {
  const config = genConfig({ sex: "man", hairStyle: "mohawk" }) 

  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false}>
      <AvatarWrapper>
      <Avatar style={{ width: '7rem', height: '7rem'}} {...config} />
      </AvatarWrapper>
  <Text>{player.name} ({player.choice.toUpperCase()})</Text>
  <Text className="score-text">{player.score}</Text>
  </PlayerWrapper>
  )
};

export default Player;
