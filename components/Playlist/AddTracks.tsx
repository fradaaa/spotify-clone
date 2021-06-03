import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useMemo, useState } from "react";
import useSWR from "swr";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
import { useDebounce } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { SearchInput } from "../Forms";
import Empty from "../Search/Empty";
import DisplayTrack from "../Tracks/Track";
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
  const { data } = useSWR<Data[]>(
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

  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists: true,
      showImage: true,
      showPlayCount: false,
      showPlay: true,
      showDate: false,
      onlyPlay: true,
      playlist: true,
    }),
    []
  );

  return (
    <TrackConfigContext.Provider value={trackConfig}>
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
    </TrackConfigContext.Provider>
  );
};

export default AddTracks;
