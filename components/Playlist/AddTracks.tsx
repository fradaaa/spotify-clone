import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { useDebounce, usePlaylist } from "../../Hooks";
import PlaylistSearchTrack from "../Tracks/PlaylistSearchTrack";
import {
  AddTracksContainer,
  AddTrackSearchContainer,
  AddTracksSearchInput,
  AddTracksText,
  InputContainer,
  AddTracksSearchResults,
} from "./style";

type Data = Track & { artists: Artist[]; album: Album };

const AddTracks = () => {
  const { id: playlistId } = usePlaylist();
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, 250);
  const { data } = useSWR<Data[]>(() =>
    debouncedSearch ? `/api/search?q=${debouncedSearch}&type=track` : null
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  }, []);

  return (
    <AddTracksContainer>
      <AddTrackSearchContainer>
        <AddTracksText>Let's find something for your playlist</AddTracksText>
        <InputContainer>
          <AddTracksSearchInput
            type="search"
            name="searchInput"
            id="searchInput"
            placeholder="Search for songs"
            value={searchString}
            onChange={handleChange}
          />
        </InputContainer>
      </AddTrackSearchContainer>
      <AddTracksSearchResults>
        {data &&
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
            />
          ))}
      </AddTracksSearchResults>
    </AddTracksContainer>
  );
};

export default AddTracks;
