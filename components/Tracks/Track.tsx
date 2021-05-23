import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { useShow } from "../../Hooks";
import { TrackButton, TrackContainer, TrackDuration } from "./style";
import TrackPlayButton from "./TrackPlayButton";
import { ITrackProps } from "./types";
import { convertTrackDuration } from "./utils";

const Track = ({
  id,
  nowId,
  trackNumber,
  duration,
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
      <TrackButton aria-label="Remove from your library" width="15" height="15">
        <AiOutlineHeart />
      </TrackButton>
      <TrackDuration>{convertTrackDuration(duration)}</TrackDuration>
      {show && (
        <TrackButton aria-label="More" width="25" height="25">
          <AiOutlineEllipsis />
        </TrackButton>
      )}
    </TrackContainer>
  );
};

export default Track;
