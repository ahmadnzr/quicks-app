import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  primary?: boolean;
  initial?: string;
}

export const Profile = ({ primary = true, initial, ...props }: Props) => {
  return (
    <ProfileStyled $primary={primary} $initial={initial} {...props}>
      {!initial ? <Icon name="user" className="profile_icon" /> : null}
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div<{ $primary: boolean; $initial?: string }>`
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

  &:before {
    display: ${(props) => (props.$initial ? "block" : "none")};
    content: "${(props) => props.$initial}";
    color: #fff;
    font-weight: 700;
  }

  & .profile_icon {
    width: var(--icon-size);
    height: var(--icon-size);
    filter: var(--filter);
  }
`;
