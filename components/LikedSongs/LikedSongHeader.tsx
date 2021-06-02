import ContentHeader from "../ContentHeader/ContentHeader";
import { ContentGradient } from "../Globals";
import LikedSongsControls from "./LikedSongsControls";

type HeaderProps = {
  userName: string;
  total: number;
};

const LikedSongHeader = ({ userName, total }: HeaderProps) => {
  return (
    <>
      <ContentHeader
        coverImage="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        type="likedSongs"
        title="Liked Songs"
        infoId={userName}
        infoName={userName}
        total_tracks={total}
        bg="rgb(80, 56, 160)"
      />
      <ContentGradient style={{ backgroundColor: "rgb(80, 56, 160)" }} />
      <LikedSongsControls />
    </>
  );
};

export default LikedSongHeader;
