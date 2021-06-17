import { useUser } from "@auth0/nextjs-auth0";
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
  const { user } = useUser();
  const { id, image, name } = useArtist();
  const { data } = useSWR<number>(() =>
    user && id ? `/api/artists/${id}/liked-count` : null
  );

  return data && data > 0 ? (
    <ArtistLikedContainer>
      <ArtistSubHeaderText>Liked Songs</ArtistSubHeaderText>
      <FlexRow>
        <ArtistLikedImage>
          <Image layout="fixed" src={image} alt="" width={70} height={70} />
        </ArtistLikedImage>
        <ArtistLikedSection>
          <Link href={`/artist/${id}/liked`} passHref>
            <ArtistLikedLink>{`You've liked ${data} songs`}</ArtistLikedLink>
          </Link>
          <ArtistLikedText>{`By ${name}`}</ArtistLikedText>
        </ArtistLikedSection>
      </FlexRow>
    </ArtistLikedContainer>
  ) : null;
};

export default ArtistLikedSongs;
