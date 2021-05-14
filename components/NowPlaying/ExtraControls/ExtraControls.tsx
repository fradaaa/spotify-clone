import { ExtraControlContainer, QueueButton } from "./style";
import { MdQueueMusic } from "react-icons/md";
import VolumeBar from "./VolumeBar";

const ExtraControls = () => {
  return (
    <ExtraControlContainer>
      <QueueButton aria-label="Queue" width="50" height="50">
        <MdQueueMusic />
      </QueueButton>
      <VolumeBar />
    </ExtraControlContainer>
  );
};

export default ExtraControls;
