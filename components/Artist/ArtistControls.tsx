import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { FollowArtistButton, PlayContentButton } from "../Buttons";
import { ContentControlsContainer } from "../Globals/style";

const ArtistControls = () => {
  const { id } = useArtist();
  const { data } = useSWR<boolean[]>(() =>
    id ? `/api/me/following/contains?ids=${id}` : null
  );

  return (
    <ContentControlsContainer>
      <PlayContentButton />
      {data && <FollowArtistButton artistId={id} isFollowed={data[0]} />}
    </ContentControlsContainer>
  );
};

export default ArtistControls;
