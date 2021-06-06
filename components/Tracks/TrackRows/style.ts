import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexRow } from "../../Globals";

export const TrackColumnNames = styled(FlexRow)`
  padding: 0 15px;
  height: 40px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.onSurface};
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const ColumnName = styled.span`
  letter-spacing: 0.1;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  white-space: nowrap;
`;

export const ColumnCount = styled(ColumnName)`
  width: 13ch;
  text-align: right;
`;

export const TrackColumnNumber = styled(FlexRow)`
  flex: 0 0 30px;
  justify-content: center;
  margin-right: 15px;
`;

export const TrackColumnTitle = styled(FlexRow)`
  flex: 6 0 250px;
  min-width: 0;
  margin-right: 15px;
`;

export const TrackColumnAlbum = styled(FlexRow)`
  flex: 4 0 150px;
  margin-right: 15px;

  display: none;

  ${mq["md"]} {
    display: flex;
  }
`;

export const TrackColumnDate = styled(FlexRow)`
  flex: 3 0 100px;
  margin-right: 15px;
  display: none;

  ${mq["lg"]} {
    display: flex;
  }
`;

export const TrackColumnPlayCount = styled(FlexRow)`
  flex: 3;
  margin-right: 15px;
  display: none;

  ${mq["md"]} {
    display: flex;
  }
`;

export const TrackColumnExtra = styled(FlexRow)`
  flex: 0 120px;
  justify-content: center;
`;