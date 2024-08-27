import React from "react";
import styled from "styled-components";
import { Text } from "../Text";

type ColorName = "blue";
interface Props {
  ref?: React.MutableRefObject<HTMLDivElement>;
  color: ColorName;
  className?: string;
  children: string;
}

export const Tag = React.forwardRef<HTMLDivElement, Props>(
  ({ color = "blue", className, children }, ref) => {
    const tagColor: Record<string, { color: string; bg: string }> = {
      blue: {
        color: "#2F80ED",
        bg: "#E9F3FF",
      },
    };

    return (
      <TagStyled ref={ref} className={className} $bg={tagColor[color].bg}>
        <Text size="lg" weight="bold" color={tagColor[color].color}>
          {children}
        </Text>
      </TagStyled>
    );
  },
);

const TagStyled = styled.div<{ $bg: string }>`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props) => props.$bg};
`;
