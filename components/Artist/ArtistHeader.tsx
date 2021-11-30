import Image from "next/image";
import { useArtist } from "../../Hooks";
import { HeaderGradient } from "../ContentHeader/style";
import { convertPlayCount } from "../Tracks/utils";
import {
  ArtistListeners,
  ArtistName,
  ArtistStats,
  StyledArtistHeader,
} from "./style";

const getRandomNumber = () => {
  const arr = new Uint16Array(1);
  crypto.getRandomValues(arr);
  return arr[0];
};

const ArtistHeader = () => {
  const {
    artist: { name, header_image },
  } = useArtist();

  return (
    <StyledArtistHeader>
      <Image
        src={header_image}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 15%"
        alt={`${name}'s header picture`}
        priority
      />
      <HeaderGradient />
      <ArtistStats>
        <ArtistName>{name}</ArtistName>
        <ArtistListeners>{`${convertPlayCount(
          getRandomNumber()
        )} monthly listeners`}</ArtistListeners>
      </ArtistStats>
    </StyledArtistHeader>
  );
};

export default ArtistHeader;
