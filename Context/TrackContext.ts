import { Album, Artist, Track } from ".prisma/client";
import { createContext } from "react";

export type TrackContextType = Track & {
  artists: Artist[];
  album: Album;
  added_at?: Date;
  meta: {
    highlight: boolean;
    index: number;
    isSaved: boolean;
    altIndex?: number;
  };
};

const TrackContext = createContext<TrackContextType | null>(null);
TrackContext.displayName = "Track";

export default TrackContext;
