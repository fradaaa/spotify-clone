import { CurrentSongCoverContainer } from "./style";
import Image from "next/image";

const CurrentSongCover = ({ image }: { image: string }) => {
  return (
    <CurrentSongCoverContainer>
      <Image src={image} alt="" width={75} height={75} />
    </CurrentSongCoverContainer>
  );
};

export default CurrentSongCover;
