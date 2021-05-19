import { Artist } from ".prisma/client";
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
      {convertArtists(artists, CurrentSongArtistName)}
    </CurrentSongInfoContainer>
  );
};

export default CurrentSongInfo;
