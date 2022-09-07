import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;

  padding: 32px 32px;
  border-radius: 15px;
  border: 1px solid hsla(225, 100%, 15%, 0.2);
  box-shadow: 0 0.2em 0.5em hsla(225, 100%, 15%, 0.2);
  background-color: #fff;
  .flex {
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px;
  }

  .Inputs {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    padding: 0.7em;
    border: 1px solid hsla(225, 100%, 15%, 0.2);
    border-radius: 0.3em;
  }

  textarea {
    margin-top: 10px;
    padding: 0.7em;
    border: 1px solid hsla(225, 100%, 15%, 0.2);
    border-radius: 0.3em;
    height: 12em;
    width: 100%;
    resize: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    .flex {
      display: flex;
      flex-direction: column;
    }
  }
`;
