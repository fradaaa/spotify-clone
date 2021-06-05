import Image from "next/image";
import { useAppSelectior } from "../../redux/hooks";
import { PlayerCoverContainer } from "./style";

const PlayerCover = () => {
  const {
    album: { image },
  } = useAppSelectior((state) => state.nowPlaying.currentTrack!);

  return (
    <PlayerCoverContainer>
      <Image src={image} alt="" width={400} height={400} />
    </PlayerCoverContainer>
  );
};

export default PlayerCover;
