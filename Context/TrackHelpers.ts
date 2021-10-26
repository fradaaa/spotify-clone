import { createContext } from "react";

export type TrackHelpersContext = {
  deleteRow: (index: number) => void;
};

const TrackHelpers = createContext<TrackHelpersContext | null>(null);
TrackHelpers.displayName = "Track Helpers";

export default TrackHelpers;
