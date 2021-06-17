import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { MutateContext } from "../../Context";
import { useDebounce } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { SearchInput } from "../Forms";
import Empty from "../Search/Empty";
import DisplayTrack from "../Tracks/Track";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import {
  AddTracksContainer,
  AddTrackSearchContainer,
  AddTracksSearchResults,
  AddTracksText,
  InputContainer,
} from "./style";

type Data = Track & { artists: Artist[]; album: Album };

const AddTracks = () => {
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, 350);
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data, mutate } = useSWR<Data[]>(
    () =>
      debouncedSearch ? `/api/search?q=${debouncedSearch}&type=track` : null,
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

  const mutateSearch = useCallback(
    (trackId: string) => {
      mutate((data) => {
        return data?.filter(({ id }) => id !== trackId);
      }, false);
    },
    [mutate]
  );

  return (
    <MutateContext.Provider value={mutateSearch}>
      <TrackConfigProvider onlyPlay playlist>
        <AddTracksContainer>
          <AddTrackSearchContainer>
            <AddTracksText>
              Let&apos;s find something for your playlist
            </AddTracksText>
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
              data.map((track, i) => (
                <DisplayTrack
                  key={track.id}
                  track={track}
                  highlight={track.id === nowId}
                  isSaved={false}
                  index={i}
                  altIndex={i + 1}
                />
              ))
            ) : searchString ? (
              <Empty query={debouncedSearch} />
            ) : null}
          </AddTracksSearchResults>
        </AddTracksContainer>
      </TrackConfigProvider>
    </MutateContext.Provider>
  );
};

export default AddTracks;
