import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

export const TrackContainer = styled(FlexRow)`
  height: 55px;
  color: ${({ theme }) => theme.gray};
  padding: 0 15px;
  border-radius: var(--brsm);
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`;

type TrackCoverButtonProps = {
  show?: boolean;
};

export const TrackCoverButton = styled(FlexRow)<TrackCoverButtonProps>`
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${({ show }) => show && "rgba(0,0,0,0.5)"};
`;

export const TrackArtistsContainer = styled(FlexRow)``;

export const TrackLoaderContainer = styled(FlexRow)``;
