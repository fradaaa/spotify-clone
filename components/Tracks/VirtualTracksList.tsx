import { Album, Artist, Track } from ".prisma/client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AutoSizer,
  IndexRange,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import "react-virtualized/styles.css";
import { TrackHelpers } from "../../Context";
import { useAppSelectior } from "../../redux/hooks";
import DisplayTrack from "../Tracks/Track";
import TrackLoader from "./TrackLoader";

type VirtualTracksListProps = {
  url: string;
  total: number;
};

type Data = Track & {
  artists: Artist[];
  album: Album;
  added_at: Date;
};

type TrackData = Data & { isSaved: boolean };

const loadTracks = async (url: string, offset: number, take = 20) => {
  const res = await fetch(`${url}?offset=${offset}&take=${take}`);
  const data = (await res.json()) as { items: Data[] };
  const savedRes = await fetch(
    `/api/me/tracks/contains?ids=${data.items.map(({ id }) => id).join(",")}`
  );
  const savedData = (await savedRes.json()) as boolean[];

  const loadedTracks: { [index: string]: TrackData } = {};

  let i = offset;
  data.items.forEach((track, trackIndex) => {
    loadedTracks[i] = { ...track, isSaved: savedData[trackIndex] };
    i++;
  });

  return loadedTracks;
};

const VirtualTracksList = ({ url, total }: VirtualTracksListProps) => {
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const infiniteLoaderRef = useRef<InfiniteLoader>(null);
  const tracksMap = useRef(new Map<number, TrackData>());
  const [mainElement, setMainElement] = useState<HTMLElement | null>(null);

  const isRowLoaded = useCallback(({ index }: { index: number }) => {
    return tracksMap.current.has(index);
  }, []);

  const loadMoreRows = useCallback(
    async ({ startIndex }: IndexRange) => {
      const loadedTracks = await loadTracks(url, startIndex);

      Object.entries(loadedTracks).forEach(([index, track]) => {
        tracksMap.current.set(+index, track);
      });

      return;
    },
    [url]
  );

  const deleteRow = useCallback((index: number) => {
    tracksMap.current.delete(index);
    infiniteLoaderRef.current?.resetLoadMoreRowsCache(true);
  }, []);

  const rowRenderer: ListRowRenderer = useCallback(
    ({ key, index, isScrolling, style }) => {
      const track = tracksMap.current.get(index);

      if (isScrolling && !track) {
        return <TrackLoader key={key} style={style} />;
      }

      return track ? (
        <DisplayTrack
          key={key}
          track={track}
          highlight={track.id === nowId}
          index={index}
          isSaved={track.isSaved}
          altIndex={index + 1}
          style={style}
        />
      ) : (
        <TrackLoader key={key} style={style} />
      );
    },
    [nowId]
  );

  const helpers = useMemo(() => ({ deleteRow }), [deleteRow]);

  useEffect(() => {
    setMainElement(document.querySelector("main"));
  }, []);

  useEffect(() => {
    tracksMap.current.clear();
    infiniteLoaderRef.current?.resetLoadMoreRowsCache(true);
  }, [url, loadMoreRows]);

  return (
    <TrackHelpers.Provider value={helpers}>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        minimumBatchSize={20}
        rowCount={total}
        threshold={10}
        ref={infiniteLoaderRef}
      >
        {({ onRowsRendered, registerChild }) =>
          mainElement && (
            <WindowScroller scrollElement={mainElement}>
              {({ height, isScrolling, scrollTop, onChildScroll }) => (
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <List
                      ref={registerChild}
                      autoHeight
                      height={height}
                      onRowsRendered={onRowsRendered}
                      isScrolling={isScrolling}
                      scrollTop={scrollTop}
                      rowCount={total}
                      onScroll={onChildScroll}
                      rowHeight={50}
                      rowRenderer={rowRenderer}
                      width={width}
                    />
                  )}
                </AutoSizer>
              )}
            </WindowScroller>
          )
        }
      </InfiniteLoader>
    </TrackHelpers.Provider>
  );
};

export default VirtualTracksList;
