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
  SearchIcon,
  ClearSearchIcon,
  EmptyResultsTitle,
  EmptyResultsPar,
  EmptyResults,
} from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

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
          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
          <AddTracksSearchInput
            type="search"
            name="searchInput"
            id="searchInput"
            placeholder="Search for songs"
            value={searchString}
            onChange={handleChange}
          />
          {searchString && (
            <ClearSearchIcon
              aria-label="Clear search"
              width="20"
              height="20"
              onClick={() => setSearchString("")}
            >
              <MdClear />
            </ClearSearchIcon>
          )}
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
            />
          ))
        ) : searchString ? (
          <EmptyResults>
            <EmptyResultsTitle>
              No results found for &laquo;{debouncedSearch}&raquo;
            </EmptyResultsTitle>
            <EmptyResultsPar>
              Please make sure your words are spelled correctly or use less or
              different keywords.
            </EmptyResultsPar>
          </EmptyResults>
        ) : null}
      </AddTracksSearchResults>
    </AddTracksContainer>
  );
};

export default AddTracks;
