import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
import { useDebounce } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import { SearchInput } from "../Forms";
import DisplayTrack from "../Tracks/Track";
import Empty from "./Empty";
import { SearchHeader, SearchResultsContainer } from "./style";
import { convertSeachArtists, convertSearchAlbums, isEmpty } from "./utils";

type Data = {
  tracks: (Track & { artists: Artist[]; album: Album })[];
  artists: Artist[];
  albums: (Album & { artist: Artist })[];
};

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, 350);
  const { data } = useSWR<Data>(
    () => (debouncedSearch ? `/api/search?q=${debouncedSearch}` : null),
    {
      revalidateOnFocus: false,
    }
  );
  const { data: saved } = useSWR<boolean[]>(
    () => {
      return data
        ? `/api/me/tracks/contains?ids=${data.tracks
            .map(({ id }) => id)
            .join(",")}`
        : null;
    },
    { revalidateOnFocus: false }
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  }, []);

  const clearFiled = useCallback(() => {
    setSearchString("");
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists: true,
      showImage: true,
      showPlayCount: false,
      showPlay: true,
      showDate: false,
      onlyPlay: true,
    }),
    []
  );

  return (
    <TrackConfigContext.Provider value={trackConfig}>
      <SearchHeader>
        <div style={{ width: "30%" }}>
          <SearchInput
            ref={inputRef}
            handleChange={handleChange}
            clearField={clearFiled}
            placeholder="Artists, Songs or Albums"
            value={searchString}
          />
        </div>
      </SearchHeader>
      <SearchResultsContainer>
        {data ? (
          <>
            <ArtistSubHeaderText>Tracks</ArtistSubHeaderText>
            {saved &&
              data.tracks.map((track, i) => (
                <DisplayTrack
                  key={track.id}
                  track={track}
                  highlight={track.id === nowId}
                  isSaved={saved[i]}
                  index={i}
                  altIndex={i + 1}
                />
              ))}
            {convertSeachArtists(data.artists)}
            {convertSearchAlbums(data.albums)}
          </>
        ) : null}
        {data && searchString
          ? isEmpty(data) && <Empty query={debouncedSearch} />
          : null}
      </SearchResultsContainer>
    </TrackConfigContext.Provider>
  );
};

export default Search;
