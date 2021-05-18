import { Artist } from ".prisma/client";
import Link from "next/link";
import { TrackArtistName } from "./style";

export const convertSeconds = (duration: number) => {
  const time = Math.round(duration);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60 > 9 ? time % 60 : `0${time % 60}`;
  return `${minutes}:${seconds}`;
};

export const convertArtists = (artists: Artist[]) => {
  return (
    <div>
      {artists.map(({ id, name }, i) => (
        <Link key={id} href={`/artist/${id}`}>
          <TrackArtistName>
            {name}
            {i !== artists.length - 1 && ", "}
          </TrackArtistName>
        </Link>
      ))}
    </div>
  );
};
