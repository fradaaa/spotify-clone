import { createContext } from "react";

type QueueContextType = {
  nextTrack: () => void;
  prevTrack: () => void;
};

const QueueContext = createContext<QueueContextType | null>(null);
QueueContext.displayName = "Queue";

export default QueueContext;
