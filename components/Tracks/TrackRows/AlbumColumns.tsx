import { AiOutlineClockCircle } from "react-icons/ai";
import {
  ColumnCount,
  ColumnName,
  TrackColumnExtra,
  AlbumColumnNames,
  TrackColumnNumber,
  TrackColumnPlayCount,
  TrackColumnTitle,
} from "./style";

const AlbumColumns = () => {
  return (
    <AlbumColumnNames>
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
    </AlbumColumnNames>
  );
};

export default AlbumColumns;
