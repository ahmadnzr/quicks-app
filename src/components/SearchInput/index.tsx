import React, { useRef } from "react";
import styled from "styled-components";

import { Icon } from "../Icon";

type Props = React.HTMLAttributes<HTMLInputElement>;

export const SearchInput = (inputProps: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchInputStyled
      ref={containerRef}
      onClick={() => inputRef.current?.focus()}
    >
      <Input
        ref={inputRef}
        placeholder="Search"
        {...inputProps}
        onFocus={() => containerRef.current?.classList.add("outlined")}
        onBlur={() => containerRef.current?.classList.remove("outlined")}
      />
      <Icon name="search" className="search_icon" />
    </SearchInputStyled>
  );
};

const SearchInputStyled = styled.div`
  padding: 10px 58px;
  position: relative;
  border: 1px solid #828282;
  border-radius: 5px;

  display: flex;
  align-items: center;

  & .search_icon {
    width: 12px;
    height: 12px;
    filter: brightness(0) saturate(100%) invert(17%) sepia(2%) saturate(0%)
      hue-rotate(85deg) brightness(95%) contrast(90%);
  }

  &.outlined {
    border: 1px solid black;
  }
`;

const Input = styled.input`
  flex: 1;
  color: #4f4f4f;
  background: transparent;
  border: none;
  outline: none;
`;
