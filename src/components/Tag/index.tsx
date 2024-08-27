import React from "react";
import styled from "styled-components";
import { Text } from "../Text";

type ColorName = "blue";
interface Props {
  color: ColorName;
  className?: string;
  children: string;
}

export const Tag = ({ color = "blue", className, children }: Props) => {
  const tagColor: Record<ColorName, { color: string; bg: string }> = {
    blue: {
      color: "#2F80ED",
      bg: "#E9F3FF",
    },
  };

  return (
    <TagStyled className={className} $bg={tagColor[color].bg}>
      <Text size="lg" weight="bold" color={tagColor[color].color}>
        {children}
      </Text>
    </TagStyled>
  );
};

const TagStyled = styled.div<{ $bg: string }>`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props) => props.$bg};
`;
