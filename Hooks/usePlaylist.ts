import { useContext } from "react";
import { PlaylistContext } from "../Context";

const usePlaylist = () => useContext(PlaylistContext)!;

export default usePlaylist;
