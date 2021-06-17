import { createContext } from "react";

export type TrackConfigContextType = {
  showArtists: boolean;
  showImage: boolean;
  showPlayCount: boolean;
  showPlay: boolean;
  showDate: boolean;
  onlyPlay: boolean;
  playlist: boolean;
};

const TrackConfigContext = createContext<TrackConfigContextType | null>(null);
TrackConfigContext.displayName = "Track Config";

export default TrackConfigContext;
