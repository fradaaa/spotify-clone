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
      <Link href="/">
        <CurrentSongArtistName>{convertArtists(artists)}</CurrentSongArtistName>
      </Link>
    </CurrentSongInfoContainer>
  );
};

export default CurrentSongInfo;
