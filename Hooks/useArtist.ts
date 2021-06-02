import { useContext } from "react";
import { ArtistContext } from "../Context";

const useArtist = () => useContext(ArtistContext)!;

export default useArtist;
