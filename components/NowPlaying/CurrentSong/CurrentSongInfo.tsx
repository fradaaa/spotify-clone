import Link from "next/link";
import {
  CurrentSongArtistName,
  CurrentSongInfoContainer,
  CurrentSongTitle,
} from "./style";

const CurrentSongInfo = () => {
  return (
    <CurrentSongInfoContainer>
      <CurrentSongTitle>Miracle</CurrentSongTitle>
      <Link href="/">
        <CurrentSongArtistName>CHVRCHES</CurrentSongArtistName>
      </Link>
    </CurrentSongInfoContainer>
  );
};

export default CurrentSongInfo;
