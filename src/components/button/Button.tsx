import React from "react";
import styled from "styled-components";
import { useTheme } from "../theme";

const StyledButton = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};

  border: none;
  outline: none;

  padding: 10px 10px;
  border-radius: 2px;

  &:active {
    opacity: 0.4;
  }
`;

const Button: React.FC = (props) => {
  const theme = useTheme();

  return <StyledButton {...props} theme={theme} />;
};

export default Button;
