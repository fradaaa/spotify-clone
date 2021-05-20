import Image from "next/image";
import Link from "next/link";
import { useAlbum } from "../../Hooks";
import {
  AlbumHeaderArtistName,
  AlbumHeaderArtistPhoto,
  AlbumHeaderCoverContainer,
  AlbumHeaderInfo,
  AlbumHeaderInfoContainer,
  AlbumHeaderInfoText,
  AlbumHeaderTitle,
  AlbumHeaderType,
  HeaderBackground,
  HeaderGradient,
  StyledAlbumHeader,
} from "./style";

const AlbumHeader = ({ bg }: { bg: string }) => {
  const {
    album_type,
    name,
    image,
    release_date,
    total_tracks,
    album_duration,
    artist: { id, name: artistName, image: artistImage },
  } = useAlbum();
  const year = new Date(release_date).getFullYear();
  const minutes = Math.floor(album_duration / 60);
  const seconds = album_duration % 60;
  const dur = `${minutes} min ${seconds} sec`;

  return (
    <StyledAlbumHeader>
      <HeaderBackground style={{ backgroundColor: bg }} />
      <HeaderGradient />
      <AlbumHeaderCoverContainer>
        <Image src={image} alt="" layout="fixed" width={200} height={200} />
      </AlbumHeaderCoverContainer>
      <AlbumHeaderInfoContainer>
        <AlbumHeaderType>{album_type}</AlbumHeaderType>
        <AlbumHeaderTitle>{name}</AlbumHeaderTitle>
        <AlbumHeaderInfo>
          <AlbumHeaderArtistPhoto>
            <Image src={artistImage} alt="" width={25} height={25} />
          </AlbumHeaderArtistPhoto>
          <Link href={`/artist/${id}`}>
            <AlbumHeaderArtistName>{artistName}</AlbumHeaderArtistName>
          </Link>
          <AlbumHeaderInfoText>{year}</AlbumHeaderInfoText>
          <AlbumHeaderInfoText>{`${total_tracks} tracks, ${dur}`}</AlbumHeaderInfoText>
        </AlbumHeaderInfo>
      </AlbumHeaderInfoContainer>
    </StyledAlbumHeader>
  );
};

export default AlbumHeader;
