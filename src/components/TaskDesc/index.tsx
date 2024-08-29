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
  padding: 0;
  transition: 0.1s ease;
  outline: none;

  &:placeholder-shown {
    cursor: pointer;
    position: relative;
    width: 110px;
    height: 40px;
    border: none;
  }

  &:not(:placeholder-shown) {
    width: 100%;
    border: none;
  }

  &:focus {
    cursor: text;
    width: 100%;
    height: fit-content;
    padding: 10px 12px;
    border: 1px solid ${Colors.primary.grayLight};
  }

  &:focus:placeholder-shown {
    position: static;
    transform: none;
  }
`;
