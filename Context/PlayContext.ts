import { createContext } from "react";

const PlayContext = createContext<((index: number) => void) | null>(null);
PlayContext.displayName = "Play";

export default PlayContext;
