import { useContext } from "react";
import { NowPlayingContext } from "../Context";

const useNowPlaying = () => useContext(NowPlayingContext);

export default useNowPlaying;
