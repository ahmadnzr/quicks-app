import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { Colors } from "../../helpers/utils";
import { Text } from "../Text";

interface Props {
  done?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TaskTitle = ({ done = false, value, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value) {
      inputRef.current?.classList.add("active");
    }
  }, [inputRef.current, value]);

  return (
    <Container>
      <Input
        ref={inputRef}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Type Task Title"
        $done={done}
        onFocus={() => {
          textContainerRef.current?.classList.add("hide");
        }}
        onBlur={(e) => {
          if (e.target.value) {
            inputRef.current?.classList.remove("active");
            textContainerRef.current?.classList.remove("hide");
          }
        }}
      />
      <TextContainer
        ref={textContainerRef}
        onClick={() => {
          inputRef.current?.classList.add("active");
          inputRef.current?.focus();
        }}
      >
        <Text
          size="lg"
          weight="bold"
          color={done ? Colors.primary.grayLight : Colors.primary.grayDark}
          style={{
            textDecoration: done ? "line-through" : undefined,
          }}
        >
          {value}
        </Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 370px;
  min-height: 40px;
  border-radius: 5px;
`;

const Input = styled.input<{ $done: boolean }>`
  display: none;
  padding: 0 14px;
  border: 1px solid ${Colors.primary.grayLight};
  border-radius: 5px;
  outline: none;
  width: 100%;
  height: 100%;
  color: ${Colors.primary.grayDark};

  &.active {
    display: block;
  }
`;

const TextContainer = styled.div`
  display: block;

  &.hide {
    display: none;
  }
`;
