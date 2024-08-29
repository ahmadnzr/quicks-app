import React from "react";
import styled from "styled-components";

import { Colors } from "../../helpers/utils";

import { Text } from "../Text";

interface Props {
  checked?: boolean;
  label: string;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CheckTask = ({ className, checked, label, onCheck }: Props) => {
  return (
    <LabelContainer className={className}>
      <Text
        size="lg"
        weight="bold"
        style={{
          textDecoration: checked ? "line-through" : "none",
        }}
        color={checked ? Colors.primary.grayLight : Colors.primary.grayDark}
      >
        {label}
      </Text>
      <input type="checkbox" checked={checked} onChange={onCheck} />
      <span className="checkmark"></span>
    </LabelContainer>
  );
};

const LabelContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: 0.3s ease;

  & > * {
    transition: 0.3s ease;
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkmark {
    height: 18px;
    width: 18px;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    border: 1px solid ${Colors.primary.grayLight};
  }

  & .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    width: 5px;
    height: 10px;

    position: absolute;
    left: 5px;
    top: 2px;
    transform: translate(-50%, -50%);

    border: solid ${Colors.primary.grayLight};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
