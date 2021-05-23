import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FlexRow } from ".";

const spin = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn)
  }
`;

export const SpinnerContainer = styled(FlexRow)`
  justify-content: center;
  height: 100%;
  flex: 1;
`;

export const Spinner = styled.span`
  &::after {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    inset: 0;
    margin: auto;
    border: 6px solid transparent;
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.primary};
    animation: ${spin} 0.8s ease infinite;
  }
`;
