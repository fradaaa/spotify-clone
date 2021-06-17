import { Artist } from ".prisma/client";
import { differenceInDays, format, formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";
import { CurrentTrack } from "../../redux/slices/nowPlayingSlice";
import { TrackArtistsContainer } from "./style";
import DisplayTrack from "./Track";

export const formatAddedAt = (addedAt: Date) => {
  const date = new Date(addedAt);
  if (differenceInDays(date, new Date()) > 30) {
    return format(date, "MMMM d, yyyy");
  } else {
    return formatDistanceToNowStrict(date, { addSuffix: true });
  }
};

export const convertDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const dur = `${minutes} min ${seconds} sec`;
  return dur;
};

export const convertTrackDuration = (duration: number) => {
  const time = Math.round(duration);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60 > 9 ? time % 60 : `0${time % 60}`;
  return `${minutes}:${seconds}`;
};

export const convertArtists = (artists: Artist[], Wrapper: React.FC) => {
  return (
    <TrackArtistsContainer>
      {artists.map(({ id, name }, i) => (
        <Link key={id} href={`/artist/${id}`} passHref>
          <Wrapper>
            {name}
            {i !== artists.length - 1 && ", "}
          </Wrapper>
        </Link>
      ))}
    </TrackArtistsContainer>
  );
};

export const convertPlayCount = (x: number) => {
  const n = x.toString();
  let s = "",
    i,
    j;
  i = n.length;
  while (i > 3) {
    j = i - 3;
    s = " " + n.slice(j, i) + s;
    i = j;
  }
  return n.slice(0, i) + s;
};

export const renderSingleTrack = (
  track: CurrentTrack,
  isSaved: boolean,
  nowId: string,
  index: number,
  altIndex?: number
) => {
  return (
    <DisplayTrack
      key={track.id}
      track={track}
      highlight={track.id === nowId}
      isSaved={isSaved}
      index={index}
      altIndex={altIndex}
    />
  );
};
