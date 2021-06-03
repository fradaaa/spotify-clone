import { useContext } from "react";
import { TrackContext } from "../Context";

const useTrack = () => useContext(TrackContext)!;

export default useTrack;
