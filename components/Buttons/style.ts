import styled from "@emotion/styled";

export const PlaylistIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 25px;
`;

export const Button = styled.button`
  margin: 20px;
  background-color: ${({ theme }) => theme.primaryVariant};
  border: none;
  border-radius: 30px;
  padding: 20px;
  color: ${({ theme }) => theme.onSurface};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  transition: color 0.1s ease-in, background-color 0.3s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:active {
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.onPrimary};
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.3;
  }
`;

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
