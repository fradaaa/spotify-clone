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
import { SortString } from "../../TracksList/types";
import { showArrow } from "../../TracksList/utils";

type TracksListColumnsProps = {
  sort: SortString;
  order: "asc" | "desc";
  changeSort: (newSort: SortString) => void;
};

const TracksListColumns = ({
  sort,
  order,
  changeSort,
}: TracksListColumnsProps) => {
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
          {sort !== "artist" && (
            <ColumnName
              onClick={() =>
                changeSort(
                  sort === "title" && order === "desc" ? "artist" : "title"
                )
              }
            >
              title{showArrow(sort, "title", order)}
            </ColumnName>
          )}
          {sort === "artist" && (
            <ColumnName
              onClick={() => changeSort(order === "desc" ? "title" : "artist")}
            >
              artist{showArrow(sort, "artist", order)}
            </ColumnName>
          )}
        </TrackColumnTitle>
        <TrackColumnAlbum>
          <ColumnName onClick={() => changeSort("album")}>
            album{showArrow(sort, "album", order)}
          </ColumnName>
        </TrackColumnAlbum>
        <TrackColumnDate>
          <ColumnName onClick={() => changeSort("added")}>
            date added{showArrow(sort, "added", order)}
          </ColumnName>
        </TrackColumnDate>
        <TrackColumnExtra>
          <AiOutlineClockCircle />
        </TrackColumnExtra>
      </TrackColumnNames>
    </>
  );
};

export default TracksListColumns;
