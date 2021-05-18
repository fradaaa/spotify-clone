import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

export const NowPlayingContainer = styled(FlexRow)`
  grid-area: now-playing;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.surface};
`;

export const ProgressWrapper = styled(FlexRow)`
  position: relative;
  height: 12px;
  width: 100%;
  flex: 1;
`;

type ProgressProps = {
  show: boolean;
};

export const ProgressBackground = styled(FlexRow)`
  background-color: ${({ theme }) => theme.surface4};
  width: 100%;
  height: 4px;
  border-radius: var(--brsm);
  overflow: hidden;
`;

export const ProgressDuration = styled.div<ProgressProps>`
  background-color: ${({ theme, show }) =>
    show ? theme.primary : theme.onSurface};
  width: 100%;
  height: 100%;
`;

export const ProgressButton = styled.button<ProgressProps>`
  position: absolute;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
