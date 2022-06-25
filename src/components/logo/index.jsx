import React from "react";
import styled, { css } from "styled-components";
import logo from "../../images/logo.png";
//import { theme } from "../../themeu";
import { Link } from "react-router-dom";
const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  margin-top : 0.2rem;
  ${({ inline }) =>
    inline &&
    css`
      width: 4rem;
      height: 3rem;
      margin-right: 0.2rem;
      margin-left: -1.75rem;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

/*const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "1.75rem" : small ? "1rem" : "2rem"};
  color: ${({ inline }) => (inline ? "black" : theme.primary)};
  font-weight: bold;
  text-decoration: none;
`;
*/
export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <Link style={{ textDecoration: 'none' }}  to= '/' >
      <LogoImg src={logo} inline={inline} small={small} />
      </Link>
    </LogoContainer>
  );
}
