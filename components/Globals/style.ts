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

export const ContentGradient = styled.div`
  height: 240px;
  position: absolute;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    #1d1d1d 100%
  );
  z-index: -1;
`;

export const ContentControlsContainer = styled(FlexRow)`
  padding: 20px;
`;

export const TextOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
