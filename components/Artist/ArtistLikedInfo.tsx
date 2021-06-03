import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { FlexRow } from "../Globals";
import {
  ArtistLikedContainer,
  ArtistLikedImage,
  ArtistLikedLink,
  ArtistLikedSection,
  ArtistLikedText,
  ArtistSubHeaderText,
} from "./style";

const ArtistLikedSongs = () => {
  const { id, image, name } = useArtist();
  const { data } = useSWR<number>(() =>
    id ? `/api/artists/${id}/liked-count` : null
  );

  return data && data > 0 ? (
    <ArtistLikedContainer>
      <ArtistSubHeaderText>Liked Songs</ArtistSubHeaderText>
      <FlexRow>
        <ArtistLikedImage>
          <Image layout="fixed" src={image} alt="" width={70} height={70} />
        </ArtistLikedImage>
        <ArtistLikedSection>
          <Link href={`/artist/${id}/liked`}>
            <ArtistLikedLink>{`You've liked ${data} songs`}</ArtistLikedLink>
          </Link>
          <ArtistLikedText>{`By ${name}`}</ArtistLikedText>
        </ArtistLikedSection>
      </FlexRow>
    </ArtistLikedContainer>
  ) : null;
};

export default ArtistLikedSongs;
