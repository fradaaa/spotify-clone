import { useContext } from "react";
import { TrackConfigContext } from "../Context";

const useTrackConfig = () => useContext(TrackConfigContext)!;

export default useTrackConfig;
