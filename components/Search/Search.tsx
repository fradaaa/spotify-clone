import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "../../Hooks";
import { SearchInput } from "../Forms";
import Empty from "./Empty";
import { SearchHeader, SearchResultsContainer } from "./style";
import { convertSeachArtists, convertSearchAlbums, isEmpty } from "./utils";

type Data = {
  tracks: Track[];
  artists: Artist[];
  albums: (Album & { artist: Artist })[];
};

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, 350);
  const { data } = useSWR<Data>(
    () => (debouncedSearch ? `/api/search?q=${debouncedSearch}` : null),
    {
      revalidateOnFocus: false,
    }
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

  return (
    <>
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
            {convertSeachArtists(data.artists)}
            {convertSearchAlbums(data.albums)}
          </>
        ) : null}
        {data && searchString
          ? isEmpty(data) && <Empty query={debouncedSearch} />
          : null}
      </SearchResultsContainer>
    </>
  );
};

export default Search;
