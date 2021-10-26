import { useContext } from "react";
import { TrackHelpers } from "../Context";

const useTrackHelpers = () => useContext(TrackHelpers)!;

export default useTrackHelpers;
