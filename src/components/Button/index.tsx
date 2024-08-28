import React from "react";
import styled from "styled-components";

import { Text } from "../Text";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...others }: Props) => {
  return (
    <ButtonStyled {...others}>
      <Text size="lg" weight="bold" color="#fff">
        {children}
      </Text>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 8px 16px;

  border: none;
  border-radius: 5px;

  background-color: #2f80ed;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;
