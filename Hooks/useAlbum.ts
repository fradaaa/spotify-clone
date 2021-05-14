import { useContext } from "react";
import { AlbumContext } from "../Context";

const useAlbum = () => useContext(AlbumContext);

export default useAlbum;
