import styled from 'styled-components'

export const GameBoardStyle = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1.5rem;


${props => props.theme.media.mobile}{
    gap: 1rem;

}
}
`