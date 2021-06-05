import {
  ColumnName,
  TrackColumnNames,
  TrackColumnNumber,
  TrackColumnTitle,
  TrackColumnAlbum,
  TrackColumnDate,
  TrackColumnExtra,
} from "./style";
import { AiOutlineClockCircle } from "react-icons/ai";

const PlaylistColumns = () => {
  return (
    <TrackColumnNames>
      <TrackColumnNumber>
        <ColumnName>#</ColumnName>
      </TrackColumnNumber>
      <TrackColumnTitle>
        <ColumnName>title</ColumnName>
      </TrackColumnTitle>
      <TrackColumnAlbum>
        <ColumnName>album</ColumnName>
      </TrackColumnAlbum>
      <TrackColumnDate>
        <ColumnName>date added</ColumnName>
      </TrackColumnDate>
      <TrackColumnExtra>
        <AiOutlineClockCircle />
      </TrackColumnExtra>
    </TrackColumnNames>
  );
};

export default PlaylistColumns;
