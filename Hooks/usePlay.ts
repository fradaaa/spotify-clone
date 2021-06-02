import { useContext } from "react";
import { PlayContext } from "../Context";

const useAlbum = () => useContext(PlayContext)!;

export default useAlbum;
