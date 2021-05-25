import { useUser } from "@auth0/nextjs-auth0";
import { Track, Artist, Album } from "@prisma/client";
import useSWR from "swr";
import ContentHeader from "../ContentHeader/ContentHeader";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

const LikedSongHeader = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<{ items: Data[]; total: number }>("/api/me/tracks");

  return isLoading || !data ? null : (
    <ContentHeader
      coverImage="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
      type="likedSongs"
      title="Liked Songs"
      infoId={user.nickname}
      infoName={user.nickname}
      total_tracks={data.total}
      bg="rgb(80, 56, 160)"
    />
  );
};

export default LikedSongHeader;
