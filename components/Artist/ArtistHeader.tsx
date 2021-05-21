import Image from "next/image";
import { useArtist } from "../../Hooks";
import {
  ArtistImageContainer,
  ArtistName,
  ArtistNameContainer,
  StyledArtistHeader,
} from "./style";

const ArtistHeader = () => {
  const { name, image } = useArtist();

  return (
    <StyledArtistHeader>
      <ArtistImageContainer>
        <Image src={image} alt="" layout="fixed" width={200} height={200} />
      </ArtistImageContainer>
      <ArtistNameContainer>
        <ArtistName>{name}</ArtistName>
      </ArtistNameContainer>
    </StyledArtistHeader>
  );
};

export default ArtistHeader;
