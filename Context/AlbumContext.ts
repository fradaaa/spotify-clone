import { Album, Artist } from ".prisma/client";
import { createContext } from "react";

const AlbumContext = createContext<Album & { artist: Artist }>(null);
AlbumContext.displayName = "Album";

export default AlbumContext;
