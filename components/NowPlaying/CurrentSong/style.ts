import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexCol, FlexRow, StyledLink } from "../../Globals";
import { TextOverflow } from "../../Globals/style";

export const CurrentSongContainer = styled(FlexRow)`
  height: 100%;
  width: 50%;
  margin-right: 25px;

  ${mq["md"]} {
    width: 25%;
  }
`;

export const CurrentSongCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
  cursor: pointer;
  min-width: 50px;
`;

export const CurrentSongInfoContainer = styled(FlexCol)`
  margin-left: 10px;
  overflow: hidden;
`;

export const CurrentSongTitle = styled(TextOverflow)`
  color: ${({ theme }) => theme.onSurface};
  font-size: 15px;
  font-weight: 600;
`;

export const CurrentSongArtistName = styled(StyledLink)`
  color: ${({ theme }) => theme.onSurface};
  font-size: 12px;
`;
