import { useUser } from "@auth0/nextjs-auth0";
import { Album, Artist, Track } from "@prisma/client";
import useSWR from "swr";
import ContentHeader from "../ContentHeader/ContentHeader";
import { ContentGradient } from "../Globals";
import PlaylistControls from "../Playlist/PlaylistControls";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

const LikedSongHeader = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<{ items: Data[]; total: number }>("/api/me/tracks");

  return isLoading || !data ? null : (
    <>
      <ContentHeader
        coverImage="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        type="likedSongs"
        title="Liked Songs"
        infoId={user.nickname}
        infoName={user.nickname}
        total_tracks={data.total}
        bg="rgb(80, 56, 160)"
      />
      <ContentGradient style={{ backgroundColor: "rgb(80, 56, 160)" }} />
      <PlaylistControls />
    </>
  );
};

export default LikedSongHeader;
