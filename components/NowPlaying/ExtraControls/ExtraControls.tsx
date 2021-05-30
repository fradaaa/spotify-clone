import { ExtraControlsContainer, QueueButton } from "./style";
import { MdQueueMusic } from "react-icons/md";
import VolumeBar from "./VolumeBar";
import { useRouter } from "next/dist/client/router";

const ExtraControls = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/queue");
  };

  return (
    <ExtraControlsContainer>
      <QueueButton
        onClick={handleClick}
        aria-label="Queue"
        width="25"
        height="25"
      >
        <MdQueueMusic />
      </QueueButton>
      <VolumeBar />
    </ExtraControlsContainer>
  );
};

export default ExtraControls;
