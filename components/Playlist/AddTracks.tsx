import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { useDebounce, usePlaylist } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { SearchInput } from "../Forms";
import Empty from "../Search/Empty";
import PlaylistSearchTrack from "../Tracks/PlaylistSearchTrack";
import {
  AddTracksContainer,
  AddTrackSearchContainer,
  AddTracksSearchResults,
  AddTracksText,
  InputContainer,
} from "./style";

type Data = Track & { artists: Artist[]; album: Album };

const AddTracks = () => {
  const { id: playlistId } = usePlaylist();
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, 350);
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data } = useSWR<Data[]>(() =>
    debouncedSearch ? `/api/search?q=${debouncedSearch}&type=track` : null
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  }, []);

  const clearFiled = useCallback(() => {
    setSearchString("");
  }, []);

  return (
    <AddTracksContainer>
      <AddTrackSearchContainer>
        <AddTracksText>Let's find something for your playlist</AddTracksText>
        <InputContainer>
          <SearchInput
            handleChange={handleChange}
            clearField={clearFiled}
            placeholder="Search for songs"
            value={searchString}
          />
        </InputContainer>
      </AddTrackSearchContainer>
      <AddTracksSearchResults>
        {data && data.length ? (
          data.map(({ id, artists, album, track_url, title, duration }) => (
            <PlaylistSearchTrack
              key={id}
              id={id}
              image={album.image}
              title={title}
              artists={artists}
              duration={duration}
              track_url={track_url}
              album={album}
              playlistId={playlistId}
              highlight={id === nowId}
            />
          ))
        ) : searchString ? (
          <Empty query={debouncedSearch} />
        ) : null}
      </AddTracksSearchResults>
    </AddTracksContainer>
  );
};

export default AddTracks;
