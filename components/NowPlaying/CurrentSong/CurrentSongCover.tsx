import { CurrentSongCoverContainer } from "./style";
import Image from "next/image";
import { useAppSelectior } from "../../../redux/hooks";
import Link from "next/link";

const getUrl = (id: string, type: string) => {
  if (type === "likedArtist") {
    return `/artist/${id}/liked`;
  } else if (type === "liked") {
    return "/collection/tracks";
  } else {
    return `/${type}/${id}`;
  }
};

const CurrentSongCover = ({ image }: { image: string }) => {
  const { id, type } = useAppSelectior((state) => state.nowPlaying.context);

  return (
    <CurrentSongCoverContainer>
      <Link href={getUrl(id!, type!)}>
        <a>
          <Image src={image} alt="" width={75} height={75} />
        </a>
      </Link>
    </CurrentSongCoverContainer>
  );
};

export default CurrentSongCover;
