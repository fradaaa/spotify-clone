import { Playlist, User } from ".prisma/client";
import { createContext } from "react";

const PlaylistContext =
  createContext<
    Playlist & { owner: User; _count: number; _sum: { duration: number } }
  >(null);
PlaylistContext.displayName = "Playlist";

export default PlaylistContext;
