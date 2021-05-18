import { useContext } from "react";
import { AudioContext } from "../Context";

const useAudio = () => useContext(AudioContext);

export default useAudio;
