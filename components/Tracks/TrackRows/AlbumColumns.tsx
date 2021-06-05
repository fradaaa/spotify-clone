import { AiOutlineClockCircle } from "react-icons/ai";
import {
  ColumnCount,
  ColumnName,
  TrackColumnExtra,
  TrackColumnNames,
  TrackColumnNumber,
  TrackColumnPlayCount,
  TrackColumnTitle,
} from "./style";

const AlbumColumns = () => {
  return (
    <TrackColumnNames>
      <TrackColumnNumber>
        <ColumnName>#</ColumnName>
      </TrackColumnNumber>
      <TrackColumnTitle>
        <ColumnName>title</ColumnName>
      </TrackColumnTitle>
      <TrackColumnPlayCount>
        <ColumnCount>plays</ColumnCount>
      </TrackColumnPlayCount>
      <TrackColumnExtra>
        <AiOutlineClockCircle />
      </TrackColumnExtra>
    </TrackColumnNames>
  );
};

export default AlbumColumns;
