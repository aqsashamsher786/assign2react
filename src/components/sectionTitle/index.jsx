const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #141414;
  border-bottom: 0.25rem solid red;
  text-align: center;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;
