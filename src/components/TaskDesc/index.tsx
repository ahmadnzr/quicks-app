import React from "react";
import styled from "styled-components";

import { Colors } from "../../helpers/utils";

interface Props {
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TaskDesc = ({ placeholder, value, onChange }: Props) => {
  return (
    <TextArea
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
    />
  );
};

const TextArea = styled.textarea`
  resize: none;
  border-radius: 5px;
  color: ${Colors.primary.grayDark};

  &:placeholder-shown {
    cursor: pointer;
    position: relative;
    padding: 0;
    width: 110px;
    height: 40px;
    border: 0;
    outline: none;
  }

  &::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:not(:placeholder-shown) {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid ${Colors.primary.grayLight};
  }

  &:focus {
    cursor: text;
    width: 100%;
    height: fit-content;
    padding: 10px 12px;
    border: 1px solid ${Colors.primary.grayLight};
  }

  &:focus::placeholder {
    position: static;
    transform: none;
  }
`;
