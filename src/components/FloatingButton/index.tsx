import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const FloatingButton = (props: Props) => {
  return (
    <ButtonStyled {...props}>
      <Icon name="feather" className="btn__icon" />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  --btn-size: 68px;
  --bg-btn-primary: ${(props) => props.theme.color.primary.blue};

  position: relative;
  width: var(--btn-size);
  height: var(--btn-size);
  border: none;
  border-radius: var(--btn-size);
  background-color: var(--bg-btn-primary);

  & .btn__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
