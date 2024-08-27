import React, { useRef } from "react";
import styled from "styled-components";

import { Icon, listIcon } from "../Icon";
import { ActionMenuButton, ActionMenuProps } from "../ActionMenuButton";

interface Props<T> extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md";
  icon: keyof typeof listIcon;
  iconStyle?: React.CSSProperties;
  withMenu?: boolean;
  actionMenuProp?: ActionMenuProps<T>;
}

export const IconButton = <T,>({
  size = "md",
  icon,
  iconStyle,
  withMenu,
  actionMenuProp,
  onClick,
  ...others
}: Props<T>) => {
  const actionMenuRef = useRef<HTMLDivElement>(null);

  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") onClick(e);

    if (withMenu && actionMenuProp) {
      actionMenuRef.current?.classList.toggle("active");
    }
  };

  return (
    <ButtonContainer>
      <ButtonStyled className={`${size}`} {...others} onClick={handleClickBtn}>
        <Icon name={icon} className="button_icon" style={iconStyle} />
      </ButtonStyled>
      {withMenu && actionMenuProp && (
        <ActionMenuContainer ref={actionMenuRef} className="button_action-menu">
          <ActionMenuButton {...actionMenuProp} />
        </ActionMenuContainer>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: relative;

  & .button_action-menu {
    z-index: 999;
    position: absolute;
    display: none;
  }

  & .button_action-menu.active {
    display: block;
  }
`;

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

const ActionMenuContainer = styled.div``;
