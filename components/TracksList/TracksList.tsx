import { useCallback, useState } from "react";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { TracksListColumns } from "../Tracks/TrackRows";
import { TracksListContainer } from "./style";
import { SortString } from "./types";
import { buildURL } from "./utils";
import VirtualTracksList from "./VirtualTracksList";

type TracksListProps = {
  url: string;
  total: number;
};

const TracksList = ({ url, total }: TracksListProps) => {
  const [sort, setSort] = useState<SortString>("added");
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const changeSort = useCallback(
    (newSort: SortString) => {
      if (newSort !== sort) {
        setSort(newSort);
        setOrder("asc");
      } else {
        setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
      }
    },
    [sort]
  );

  return (
    <TrackConfigProvider showDate>
      <TracksListColumns sort={sort} order={order} changeSort={changeSort} />
      <TracksListContainer>
        <VirtualTracksList url={buildURL(url, sort, order)} total={total} />
      </TracksListContainer>
    </TrackConfigProvider>
  );
};

export default TracksList;
