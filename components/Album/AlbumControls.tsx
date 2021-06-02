import useSWR from "swr";
import { useAlbum } from "../../Hooks";
import { PlayContentButton } from "../Buttons";
import { FlexRow } from "../Globals";
import { ContentControlsContainer } from "../Globals/style";
import SaveAlbumButton from "./AlbumSaveButton";

const AlbumControls = () => {
  const { id } = useAlbum();
  const { data } = useSWR<boolean[]>(
    () => (id ? `/api/me/albums/contains?ids=${id}` : null),
    { revalidateOnFocus: false }
  );

  return (
    <ContentControlsContainer>
      <FlexRow>
        <PlayContentButton id={id} />
        {data && <SaveAlbumButton albumId={id} isSaved={data[0]} />}
      </FlexRow>
    </ContentControlsContainer>
  );
};

export default AlbumControls;
