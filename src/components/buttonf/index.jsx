import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
 
  background-color: transparent;
  color: #fff;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: pink;
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
