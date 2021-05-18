import { useContext } from "react";
import { AudioHelpersContext } from "../Context";

const useAudioHelpers = () => useContext(AudioHelpersContext);

export default useAudioHelpers;
