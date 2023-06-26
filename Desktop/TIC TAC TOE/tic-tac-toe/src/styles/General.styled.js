import styled from "styled-components";

export const Tab = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 80vh;
width: 100vw;
background-color: ${(props) => props.theme.colors.primary};
padding: 0 2rem;
text-align: center;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background: transparent;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 200;
`;