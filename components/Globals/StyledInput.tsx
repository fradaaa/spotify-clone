import styled from "@emotion/styled";

const StyledInput = styled.input`
  outline: none;
  border: 2px solid transparent;
  border-radius: var(--brmd);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: ${({ theme }) => theme.onSurface};
  transition: border-color 0.1s ease-in, background-color 0.1s ease-in,
    color 0.1s ease-in;

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

export default StyledInput;
