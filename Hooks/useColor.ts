import { useContext } from "react";
import { ColorContext } from "../Context";

const useColor = () => useContext(ColorContext)!;

export default useColor;
