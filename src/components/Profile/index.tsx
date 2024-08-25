import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  primary?: boolean;
}

export const Profile = ({ primary = true, ...props }: Props) => {
  return (
    <ProfileStyled $primary={primary} {...props}>
      <Icon name="user" className="profile_icon" />
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div<{ $primary: boolean }>`
  --size: 34px;
  --icon-size: 18px;
  --bg: ${(props) => (props.$primary ? "#2F80ED" : "#E0E0E0")};
  --filter: ${
    (props) =>
      props.$primary
        ? "brightness(0) saturate(100%) invert(98%) sepia(47%) saturate(0%) hue-rotate(262deg) brightness(115%) contrast(100%)" // #fff
        : "brightness(0) saturate(100%) invert(27%) sepia(0%) saturate(4719%) hue-rotate(347deg) brightness(80%) contrast(68%)" // #4F4F4F
  };
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;

  & .profile_icon {
    width: var(--icon-size);
    height: var(--icon-size);
    filter: var(--filter);
  }
`;
