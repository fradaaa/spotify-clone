import styled from "@emotion/styled";
import { FlexRow } from "../../Globals";

export const TrackColumnNamesContainer = styled(FlexRow)`
  height: 40px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.onSurface};
  padding: 0 15px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const ColumnName = styled.span`
  letter-spacing: 0.1;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;

export const ColumnCount = styled(ColumnName)`
  width: 11ch;
  text-align: right;
`;

export const TrackColumnNumber = styled(FlexRow)`
  flex: 0 30px;
  justify-content: center;
  margin-right: 10px;
`;

export const TrackColumnTitle = styled(FlexRow)`
  flex: 5;
`;

export const TrackColumnAlbum = styled(FlexRow)`
  flex: 4;
`;

export const TrackColumnDate = styled(FlexRow)`
  flex: 3;
`;

export const TrackColumnPlayCount = styled(FlexRow)`
  flex: 2;
`;

export const TrackColumnExtra = styled(FlexRow)`
  justify-content: center;
  flex: 0 100px;
`;
