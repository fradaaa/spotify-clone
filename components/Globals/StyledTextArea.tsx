import styled from "@emotion/styled";

const StyledTextArea = styled.textarea`
  resize: none;
  font-size: 13px;
  padding: 5px;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.onSurface};
  background-color: ${({ theme }) => theme.surface3};
  border-radius: var(--brsm);
  outline: none;
  /* overflow-y: scroll; */
  scrollbar-width: thin;
  transition: border 0.1s ease-in, background-color 0.1s ease-in;

  &:hover {
    border-color: ${({ theme }) => theme.darkBorder};
  }

  &:focus {
    background-color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.primary};
  }

  &::selection {
    color: ${({ theme }) => theme.onSurface};
    background-color: ${({ theme }) => theme.primaryVariant};
  }
`;

export default StyledTextArea;
