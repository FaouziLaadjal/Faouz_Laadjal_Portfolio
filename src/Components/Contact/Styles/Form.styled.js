import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  background-color: #fff;
  box-shadow: var(--shadow);
  border-radius: 0.5em;
  padding: 2em;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
  label {
    font-size: 1.1em;
    
  }
  input {
    margin-top: 0.4em;
    width: 100%;
    padding: 0.7em;
    font-size: 1.1em;
    border-radius: 0.3em;
    border: 1px solid var(--color-primary);
  }

  textArea {
    margin-top: 0.4em;
    width: 100%;
    padding: 0.7em;
    resize: none;
    font-size: 1.1em;
    height: 12em;
    border: 1px solid var(--color-primary);
    border-radius: 0.3em;
  }
`;
