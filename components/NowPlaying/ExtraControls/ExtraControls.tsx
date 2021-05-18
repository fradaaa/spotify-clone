import { ExtraControlsContainer, QueueButton } from "./style";
import { MdQueueMusic } from "react-icons/md";
import VolumeBar from "./VolumeBar";

const ExtraControls = () => {
  return (
    <ExtraControlsContainer>
      <QueueButton aria-label="Queue" width="25" height="25">
        <MdQueueMusic />
      </QueueButton>
      <VolumeBar />
    </ExtraControlsContainer>
  );
};

export default ExtraControls;
