import { useUser } from "@supabase/auth-helpers-react";
import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { RingLoader } from "../Globals";
import DisplayTrack from "../Tracks/Track";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import ArtistLikedSongs from "./ArtistLikedInfo";
import {
  ArtistSubHeaderText,
  ArtistTopTracksContainer,
  ArtistTrackWrapper,
} from "./style";

const ArtistTopTracks = () => {
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { topTracks } = useArtist();
  const user = useUser();
  const { data: saved } = useSWR<boolean[]>(
    () => {
      return topTracks
        ? `/api/me/tracks/contains?ids=${topTracks
            .map(({ id }) => id)
            .join(",")}`
        : null;
    },
    { revalidateOnFocus: false }
  );

  return (
    <TrackConfigProvider showPlayCount>
      <ArtistTrackWrapper>
        <ArtistTopTracksContainer>
          <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
          <div style={{ minHeight: "550px" }}>
            {saved ? (
              topTracks.map((track, i) => (
                <DisplayTrack
                  key={track.id}
                  track={track}
                  highlight={track.id === nowId}
                  index={i}
                  isSaved={saved[i]}
                  altIndex={i + 1}
                />
              ))
            ) : (
              <RingLoader />
            )}
          </div>
        </ArtistTopTracksContainer>
        {user && <ArtistLikedSongs />}
      </ArtistTrackWrapper>
    </TrackConfigProvider>
  );
};

export default ArtistTopTracks;
