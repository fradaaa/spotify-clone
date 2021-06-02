import { Artist } from ".prisma/client";
import { createContext } from "react";

const ArtistContext = createContext<Artist | null>(null);
ArtistContext.displayName = "Artist";

export default ArtistContext;
