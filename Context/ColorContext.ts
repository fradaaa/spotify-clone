import { createContext } from "react";

const ColorContext = createContext<string>("transparent");
ColorContext.displayName = "Color";

export default ColorContext;
