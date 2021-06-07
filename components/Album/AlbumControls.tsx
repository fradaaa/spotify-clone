import useSWR from "swr";
import { useAlbum } from "../../Hooks";
import { PlayContentButton } from "../Buttons";
import { ContentControls } from "../Globals";
import SaveAlbumButton from "./AlbumSaveButton";

const AlbumControls = () => {
  const { id, name } = useAlbum();
  const { data } = useSWR<boolean[]>(
    () => (id ? `/api/me/albums/contains?ids=${id}` : null),
    { revalidateOnFocus: false }
  );

  return (
    <ContentControls text={name}>
      <PlayContentButton id={id} />
      {data && <SaveAlbumButton albumId={id} isSaved={data[0]} />}
    </ContentControls>
  );
};

export default AlbumControls;
