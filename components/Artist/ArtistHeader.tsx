import { useArtist } from "../../Hooks";
import { HeaderGradient } from "../ContentHeader/style";
import {
  ArtistHeaderImage,
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
  const { name, header_image } = useArtist();

  return (
    <StyledArtistHeader>
      <ArtistHeaderImage style={{ backgroundImage: `url(${header_image})` }} />
      <HeaderGradient />
      <ArtistStats>
        <ArtistName>{name}</ArtistName>
        <ArtistListeners>{`${getRandomNumber()} monthly listeners`}</ArtistListeners>
      </ArtistStats>
    </StyledArtistHeader>
  );
};

export default ArtistHeader;
