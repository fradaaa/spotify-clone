import { Data, SortString, TrackData } from "./types";
import { TracksColumnIcon } from "./style";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export const loadTracks = async (url: string, offset: number) => {
  const res = await fetch(`${url}&offset=${offset}`);
  const data = (await res.json()) as { items: Data[] };
  const savedRes = await fetch(
    `/api/me/tracks/contains?ids=${data.items.map(({ id }) => id).join(",")}`
  );
  const savedData = (await savedRes.json()) as boolean[];

  const loadedTracks: { [index: string]: TrackData } = {};

  let i = offset;
  data.items.forEach((track, trackIndex) => {
    loadedTracks[i] = { ...track, isSaved: savedData[trackIndex] };
    i++;
  });

  return loadedTracks;
};

export const buildURL = (
  baseURL: string,
  sort: SortString,
  order: "asc" | "desc",
  take = 20
) => {
  return `${baseURL}?sort=${sort}&order=${order}&take=${take}`;
};

export const showArrow = (
  currentSort: SortString,
  checkSort: SortString,
  order: "asc" | "desc"
) => {
  return currentSort === checkSort ? (
    order === "asc" ? (
      <TracksColumnIcon>
        <GoTriangleDown />
      </TracksColumnIcon>
    ) : (
      <TracksColumnIcon>
        <GoTriangleUp />
      </TracksColumnIcon>
    )
  ) : null;
};
