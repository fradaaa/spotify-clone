import { useMemo } from "react";
import { TrackConfigContext } from "../../Context";
import { TrackConfigContextType } from "../../Context/TrackConfigContext";

const TrackConfigProvider = ({
  showArtists = true,
  showImage = true,
  showPlayCount = false,
  showPlay = true,
  showDate = false,
  onlyPlay = false,
  playlist = false,
  children,
}: React.PropsWithChildren<Partial<TrackConfigContextType>>) => {
  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists,
      showImage,
      showPlayCount,
      showPlay,
      showDate,
      onlyPlay,
      playlist,
    }),
    [
      showArtists,
      showImage,
      showPlayCount,
      showPlay,
      showDate,
      onlyPlay,
      playlist,
    ]
  );

  return (
    <TrackConfigContext.Provider value={trackConfig}>
      {children}
    </TrackConfigContext.Provider>
  );
};

export default TrackConfigProvider;
