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
  min-height: inherit;
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

export const StickyTop = styled.div`
  min-width: 1px;
  min-height: 1px;
`;

type StickyProps = {
  isSticky: boolean;
};

export const ContentControlsContainer = styled(FlexRow)<StickyProps>`
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 5;
  border-bottom: ${({ theme, isSticky }) =>
    isSticky ? `1px solid ${theme.darkBorder}` : "none"};
`;

export const ContentBG = styled(FlexRow)`
  position: absolute;
  inset: 0;
  transition: background-color 0.25s ease-in;
  z-index: -1;
  filter: brightness(0.5);
`;

export const ContentText = styled.span<StickyProps>`
  font-size: 24px;
  transition: opacity 0.5s ease-in;
  color: ${({ theme }) => theme.onSurface};
  margin-left: 25px;
  white-space: nowrap;
  opacity: ${({ isSticky }) => (isSticky ? 1 : 0)};
`;

export const TextOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
