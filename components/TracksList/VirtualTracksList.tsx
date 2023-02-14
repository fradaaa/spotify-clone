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
import TrackLoader from "../Tracks/TrackLoader";
import { TrackData } from "./types";
import { loadTracks } from "./utils";

type VirtualTracksListProps = {
  url: string;
  total: number;
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
                      /* style={{ overflowY: "visible", overflowX: "visible" }}
                      containerStyle={{ overflow: "visible" }} */
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
