import styled from 'styled-components'

export const PlayerWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem;
border-radius: 5px;
border-bottom: ${({isPlayerActive}) => isPlayerActive ? "1rem solid red" : ""};
filter: ${({isPlayerActive}) => !isPlayerActive ? "grayscale(100%)" : ""};


${(props) => props.theme.media.mobile}{
    flex-direction: row;
    margin: 2rem;
  }
  `

export const AvatarWrapper = styled.div`

div{
    display: flex;
    ${props => props.theme.media.mobile}{
        height: 0.5rem;
        width: 0.5rem;
    }
}
`

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: "Pacifico", cursive;
  font-size: 1rem; 

`;