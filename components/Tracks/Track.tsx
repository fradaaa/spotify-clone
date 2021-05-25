import { useShow } from "../../Hooks";
import SaveTrackButton from "./SaveTrackButton";
import { TrackContainer, TrackDuration } from "./style";
import TrackPlayButton from "./TrackPlayButton";
import { ITrackProps } from "./types";
import { convertTrackDuration } from "./utils";

const Track = ({
  id,
  nowId,
  trackNumber,
  duration,
  is_saved,
  handleClick,
  pauseTrack,
  children,
}: React.PropsWithChildren<ITrackProps>) => {
  const { show, disableShow, enableShow } = useShow();

  return (
    <TrackContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
      <TrackPlayButton
        id={id}
        nowId={nowId}
        show={show}
        trackNumber={trackNumber}
        handleClick={handleClick}
        pauseTrack={pauseTrack}
      />
      {children}
      <SaveTrackButton trackId={id} isSaved={is_saved} />
      <TrackDuration>{convertTrackDuration(duration)}</TrackDuration>
      {/* {show && (
        <TrackButton aria-label="More" width="25" height="25">
          <AiOutlineEllipsis />
        </TrackButton>
      )} */}
    </TrackContainer>
  );
};

export default Track;
