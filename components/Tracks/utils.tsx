import { Artist } from ".prisma/client";
import Link from "next/link";

export const convertSeconds = (duration: number) => {
  const time = Math.round(duration);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60 > 9 ? time % 60 : `0${time % 60}`;
  return `${minutes}:${seconds}`;
};

export const convertArtists = (artists: Artist[], Wrapper: React.FC) => {
  return (
    <div>
      {artists.map(({ id, name }, i) => (
        <Link key={id} href={`/artist/${id}`}>
          <Wrapper>
            {name}
            {i !== artists.length - 1 && ", "}
          </Wrapper>
        </Link>
      ))}
    </div>
  );
};
