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
import { StickyTop } from "../../Globals/style";
import { useRef } from "react";
import { useSticky } from "../../../Hooks";

const PlaylistColumns = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky(topRef);

  return (
    <>
      <StickyTop style={{ position: "relative", top: "-90px" }} ref={topRef} />
      <TrackColumnNames isSticky={isSticky}>
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
    </>
  );
};

export default PlaylistColumns;
