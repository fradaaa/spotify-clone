import Link from "next/link";
import { useTrack } from "../../../Hooks";
import { TrackAlbumContainer, TrackAlbumText } from "./style";

const TrackAlbum = () => {
  const {
    album: { id, name },
  } = useTrack();

  return (
    <TrackAlbumContainer>
      <Link href={`/album/${id}`} passHref>
        <TrackAlbumText>{name}</TrackAlbumText>
      </Link>
    </TrackAlbumContainer>
  );
};

export default TrackAlbum;
