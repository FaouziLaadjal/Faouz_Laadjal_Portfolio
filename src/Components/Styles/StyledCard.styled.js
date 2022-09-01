import styled from "styled-components";
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #00b388;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.PrimaryColor};
    margin-bottom: 20px;
  }
  img {
    padding-top: 10px;
    width: 100px;
    height: 40px;
  }
  p {
    padding: 10px;
    height: 180px;
  }
`;
