import React from "react";
import styled from "styled-components";

import { Icon, listIcon } from "../Icon";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md";
  icon: keyof typeof listIcon;
  iconStyle?: React.CSSProperties;
}

export const IconButton = ({
  size = "md",
  icon,
  iconStyle,
  onClick,
  ...others
}: Props) => {
  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") onClick(e);
  };

  return (
    <ButtonStyled className={`${size}`} {...others} onClick={handleClickBtn}>
      <Icon name={icon} className="button_icon" style={iconStyle} />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(130, 130, 130, 0.1);
  }

  &:active {
    background: rgba(130, 130, 130, 0.2);
  }

  &.sm {
    box-sizing: content-box;
    padding: 8px;
    width: 14px;
    height: 14px;
    border-radius: 14px;
  }

  &.md {
    box-sizing: content-box;
    padding: 6px;
    width: 24px;
    height: 24px;
    border-radius: 24px;
  }

  & .button_icon {
    width: 100%;
    height: 100%;
    filter: brightness(0) saturate(100%) invert(11%) sepia(12%) saturate(33%)
      hue-rotate(326deg) brightness(96%) contrast(77%);
  }
`;
