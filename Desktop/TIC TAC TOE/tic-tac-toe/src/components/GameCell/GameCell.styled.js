import styled from 'styled-components'

export const CellStyle = styled.button`
background-color: ${props => props.theme.colors.secondary};
color: ${props => props.theme.colors.primary};
font-size: 3rem;
border: none;
width: 8rem;
height: 8rem;
border-radius: 2.5rem;
box-shadow: 5px 10px ${props => props.theme.colors.gray};
cursor: pointer;
padding: 2rem;

${props => props.theme.media.mobile}{
    height: 9rem;
    width: 7rem;
    height: 7rem;
    font-size: 1.5rem;
    padding: 2rem;
}

.markedItem{
    fill: ${props => props.theme.colors.primary};
}

.outlineIcon{
    path{
        stroke-width: 0;
    }
}

&:hover{
    .outlineIcon{
        path{
            fill: ${props => props.theme.colors.tertiary};
            stroke-width: 2;
        }
    }
}
`

