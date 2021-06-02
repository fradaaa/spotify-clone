import { Album, Artist } from ".prisma/client";
import { createContext } from "react";

const AlbumContext =
  createContext<(Album & { artist: Artist; duration: number }) | null>(null);
AlbumContext.displayName = "Album";

export default AlbumContext;
