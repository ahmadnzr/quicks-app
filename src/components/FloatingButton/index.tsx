import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { Icon, listIcon } from "../Icon";

type ButtonType = "primary" | "secondary";
type BtnSvgColor = "yellowDark" | "purple";
type IconType = keyof typeof listIcon;
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  title?: string;
  btnType?: ButtonType;
}

const getSvgFilter = (color: BtnSvgColor) => {
  const filters = {
    yellowDark:
      "brightness(0) saturate(100%) invert(97%) sepia(81%) saturate(3986%) hue-rotate(307deg) brightness(100%) contrast(95%)",
    purple:
      "brightness(0) saturate(100%) invert(47%) sepia(75%) saturate(1000%) hue-rotate(213deg) brightness(101%) contrast(102%)",
  };

  return filters[color];
};

export const FloatingButton = forwardRef<HTMLButtonElement, Props>(
  ({ icon, btnType = "primary", ...otherProps }, ref) => {
    return (
      <ButtonStyled {...otherProps} ref={ref} $type={btnType} $icon={icon}>
        <Icon name={icon} className="btn__icon" />
      </ButtonStyled>
    );
  },
);

const ButtonStyled = styled.button<{ $type: ButtonType; $icon: IconType }>`
  ${(props) => {
    const color: BtnSvgColor = props.$icon === "chat" ? "purple" : "yellowDark";

    return css`
      --bg-btn: ${props.$type === "primary"
        ? props.$icon === "chat"
          ? "#8785FF"
          : props.$icon === "task"
            ? "#F8B76B"
            : props.theme.color.primary.blue
        : props.theme.color.primary.light};
      --btn-size: ${props.$type === "primary" ? "68px" : "60px"};
      --svg-filter: ${props.$type !== "primary"
        ? getSvgFilter(color)
        : undefined};
    `;
  }}

  position: relative;
  width: var(--btn-size);
  height: var(--btn-size);
  border: none;
  border-radius: var(--btn-size);
  background-color: var(--bg-btn);

  & .btn__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: var(--svg-filter);
  }
`;
