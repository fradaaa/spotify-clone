import { AiOutlineClockCircle } from "react-icons/ai";
import {
  ColumnCount,
  ColumnName,
  TrackColumnExtra,
  TrackColumnNamesContainer,
  TrackColumnNumber,
  TrackColumnPlayCount,
  TrackColumnTitle,
} from "./style";

const AlbumColumns = () => {
  return (
    <TrackColumnNamesContainer>
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
    </TrackColumnNamesContainer>
  );
};

export default AlbumColumns;
