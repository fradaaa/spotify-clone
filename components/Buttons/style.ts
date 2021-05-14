import styled from "@emotion/styled";

type IconButtonProps = {
  width: string;
  height: string;
  "aria-label": string;
};

export const IconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.onSurface};
  transition: color 0.1s ease-in;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  & svg {
    display: block;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
`;
