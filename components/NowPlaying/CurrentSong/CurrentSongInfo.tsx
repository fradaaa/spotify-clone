import { Artist } from ".prisma/client";
import Link from "next/link";
import { convertArtists } from "../../Tracks/utils";
import {
  CurrentSongArtistName,
  CurrentSongInfoContainer,
  CurrentSongTitle,
} from "./style";

type SongInfoProps = {
  title: string;
  artists: Artist[];
};

const CurrentSongInfo = ({ title, artists }: SongInfoProps) => {
  return (
    <CurrentSongInfoContainer>
      <CurrentSongTitle>{title}</CurrentSongTitle>
      {convertArtists(artists)}
      {/* <Link href={`/artist/${artists[0].id}`}>
        <CurrentSongArtistName>{artists[0].name}</CurrentSongArtistName>
      </Link> */}
    </CurrentSongInfoContainer>
  );
};

export default CurrentSongInfo;
