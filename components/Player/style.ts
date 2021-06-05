import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow, StyledLink } from "../Globals";
import { TextOverflow } from "../Globals/style";

const show = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0.5
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PlayerContainer = styled(FlexCol)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.surface2};
  z-index: 10;
  padding: 15px;

  animation: ${show} 0.3s ease-in-out;
`;

export const PlayerHeaderContainer = styled(FlexRow)`
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const PlayerButton = styled(IconButton)``;

export const PlayerCoverContainer = styled(FlexRow)`
  justify-content: center;
  margin-bottom: 20px;
`;

export const PlayerInfoContainer = styled.div`
  overflow: hidden;
  flex: 1;
`;

export const PlayerInfoTitle = styled(TextOverflow)`
  color: ${({ theme }) => theme.onSurface};
  font-size: 25px;
  font-weight: 600;
`;

export const PlayerInfoArtist = styled(StyledLink)`
  color: ${({ theme }) => theme.gray};
  font-size: 22px;
`;

export const PlayerProgressContainer = styled(FlexRow)`
  justify-content: center;
  flex: 1;
`;

export const PlayerControlsContainer = styled(FlexRow)`
  justify-content: center;
  flex: 1;
`;
