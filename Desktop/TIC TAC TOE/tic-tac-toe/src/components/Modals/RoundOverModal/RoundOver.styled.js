import styled from "styled-components";


export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background: transparent;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
  font-weight: 200;
`;