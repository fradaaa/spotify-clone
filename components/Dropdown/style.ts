import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FlexCol, FlexRow } from "../Globals";

export const StyledDropdown = styled(FlexRow)`
  justify-content: center;
  position: relative;
  height: 100%;
`;

export const DropdownIcon = styled(FlexRow)`
  justify-content: center;
  padding: 0 10px;
  transition: color 0.1s ease-in;
  color: ${({ theme }) => theme.onSurface};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const show = keyframes`
  from {
    opacity: 0.8;
  }

  to {
    opacity: 1;
  }
`;

export const DropdownMenu = styled(FlexCol)`
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.onSurface};
  border: ${({ theme }) => `1px solid ${theme.lightBorder}`};
  border-radius: var(--brsm);
  white-space: nowrap;
  z-index: 10;
  /* overflow: hidden; */
  animation: ${show} 0.1s ease;
  box-shadow: var(--bxshdw);
`;
