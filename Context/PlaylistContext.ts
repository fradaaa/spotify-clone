import { Playlist, User } from ".prisma/client";
import { createContext } from "react";

const PlaylistContext =
  createContext<
    (Playlist & { owner: User; total: number; duration: number }) | null
  >(null);
PlaylistContext.displayName = "Playlist";

export default PlaylistContext;
