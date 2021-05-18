import { Artist } from ".prisma/client";
import { createContext } from "react";

export type NowPlayingType = {
  id: string;
  title: string;
  image: string;
  duration: number;
  artists: Artist[];
  track_url: string;
};

const NowPlayingContext = createContext<NowPlayingType>(null);
NowPlayingContext.displayName = "Now Playing";

export default NowPlayingContext;
