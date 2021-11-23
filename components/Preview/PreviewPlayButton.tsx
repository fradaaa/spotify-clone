import { PlayContentButton } from "../Buttons";
import { PreviewPlayButtonContainer } from "./style";

const PreviewPlayButton = ({ id }: { id: string }) => {
  return (
    <PreviewPlayButtonContainer onClick={(e) => e.stopPropagation()}>
      <PlayContentButton id={id} style={{ margin: 0 }} />
    </PreviewPlayButtonContainer>
  );
};

export default PreviewPlayButton;
