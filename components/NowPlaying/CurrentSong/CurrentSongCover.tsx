import { CurrentSongCoverContainer } from "./style";
import Image from "next/image";

const CurrentSongCover = () => {
  return (
    <CurrentSongCoverContainer>
      <Image
        src="https://i.scdn.co/image/ab67616d0000b2730b9e33e107816121c00a644c"
        alt=""
        width={75}
        height={75}
      />
    </CurrentSongCoverContainer>
  );
};

export default CurrentSongCover;
