import styled from "styled-components";
export const Button = styled.button`
  border-radius: 2em;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 1em 2em;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};
  margin-right: 16px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
