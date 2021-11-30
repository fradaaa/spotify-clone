import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { FollowArtistButton, PlayContentButton } from "../Buttons";
import { ContentControls } from "../Globals";

const ArtistControls = () => {
  const {
    artist: { id, name },
  } = useArtist();
  const { data } = useSWR<boolean[]>(() =>
    id ? `/api/me/following/contains?ids=${id}` : null
  );

  return (
    <ContentControls text={name}>
      <PlayContentButton id={id} />
      {data && <FollowArtistButton artistId={id} isFollowed={data[0]} />}
    </ContentControls>
  );
};

export default ArtistControls;
