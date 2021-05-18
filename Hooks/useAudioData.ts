import { useContext } from "react";
import { AudioDataContext } from "../Context";

const useAudioData = () => useContext(AudioDataContext);

export default useAudioData;
