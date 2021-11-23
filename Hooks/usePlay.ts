import { useContext } from "react";
import { PlayContext } from "../Context";

const usePlay = () => useContext(PlayContext)!;

export default usePlay;
