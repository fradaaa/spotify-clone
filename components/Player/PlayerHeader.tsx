import { AiOutlineDown } from "react-icons/ai";
import { PlayerButton, PlayerHeaderContainer } from "./style";

const PlayerHeader = ({ hide }: { hide: () => void }) => {
  return (
    <PlayerHeaderContainer>
      <PlayerButton
        onClick={hide}
        aria-label="Hide player"
        width="35"
        height="35"
      >
        <AiOutlineDown />
      </PlayerButton>
    </PlayerHeaderContainer>
  );
};

export default PlayerHeader;
