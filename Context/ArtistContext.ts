import { createContext } from "react";
import { ArtistProps } from "../components/Artist/types";

const ArtistContext = createContext<ArtistProps | null>(null);
ArtistContext.displayName = "Artist";

export default ArtistContext;
