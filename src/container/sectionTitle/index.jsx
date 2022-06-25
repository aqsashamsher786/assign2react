const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #000;
  border-bottom: 0.5rem solid  pink;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
