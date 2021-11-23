import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "../../Hooks";
import { useAppDispatch, useAppSelectior } from "../../redux/hooks";
import { setItems } from "../../redux/slices/recentSearchesSlice";
import { SearchInput } from "../Forms";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import Empty from "./Empty";
import RecentSearches from "./RecentSearches";
import { SearchHeader, SearchResultsContainer } from "./style";
import {
  convertSeachArtists,
  convertSearchAlbums,
  ConvertSearchTracks,
  isEmpty,
} from "./utils";

type Data = {
  tracks: (Track & { artists: Artist[]; album: Album })[];
  artists: Artist[];
  albums: (Album & { artist: Artist })[];
};

const Search = () => {
  const recentSearches = useAppSelectior((state) => state.recentSearches.items);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, 350);
  const { data } = useSWR<Data>(
    () => (debouncedSearch ? `/api/search?q=${debouncedSearch}` : null),
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    try {
      const items = localStorage.getItem("recentSearches");
      if (items) {
        dispatch(setItems(JSON.parse(items)));
      } else {
        dispatch(setItems([]));
      }
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  }, []);

  const clearFiled = useCallback(() => {
    setSearchString("");
  }, []);

  return (
    <TrackConfigProvider onlyPlay>
      <SearchHeader>
        <div style={{ minWidth: "250px" }}>
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
        {!searchString && <RecentSearches />}
        {data && searchString ? (
          isEmpty(data) ? (
            <Empty query={debouncedSearch} />
          ) : (
            <>
              <ConvertSearchTracks tracks={data.tracks} />
              {convertSeachArtists(data.artists)}
              {convertSearchAlbums(data.albums)}
            </>
          )
        ) : null}
      </SearchResultsContainer>
    </TrackConfigProvider>
  );
};

export default Search;
