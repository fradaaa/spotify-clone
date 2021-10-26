import ContentLoader from "react-content-loader";
import {
  TrackAlbumContainer,
  TrackDateContainer,
  TrackTitleContainer,
} from "./Blocks/style";
import { TrackExtraContainer } from "./Blocks/TrackExtra/style";
import { TrackLoaderContainer } from "./style";

const MyLoader = ({
  style,
  ...props
}: React.PropsWithoutRef<{ style?: React.CSSProperties }>) => (
  <TrackLoaderContainer style={style}>
    <TrackTitleContainer>
      <ContentLoader
        speed={2}
        height={50}
        backgroundColor="#282828"
        foregroundColor="#282828"
        style={{ display: "flex" }}
        {...props}
      >
        <rect x="15" y="10" rx="5" ry="5" width="30" height="30" />
        <rect x="60" y="5" rx="5" ry="5" width="40" height="40" />
        <rect x="115" y="10" rx="5" ry="5" width="90" height="15" />
        <rect x="115" y="30" rx="5" ry="5" width="70" height="15" />
      </ContentLoader>
    </TrackTitleContainer>
    <TrackAlbumContainer>
      <ContentLoader
        height={50}
        backgroundColor="#282828"
        foregroundColor="#282828"
        {...props}
      >
        <rect x="15" y="15" rx="5" ry="5" width="80" height="20" />
      </ContentLoader>
    </TrackAlbumContainer>
    <TrackDateContainer>
      <ContentLoader
        height={50}
        backgroundColor="#282828"
        foregroundColor="#282828"
        {...props}
      >
        <rect x="0" y="15" rx="5" ry="5" width="80" height="20" />
      </ContentLoader>
    </TrackDateContainer>
    <TrackExtraContainer>
      <ContentLoader
        height={50}
        backgroundColor="#282828"
        foregroundColor="#282828"
        {...props}
      >
        <rect x="15" y="15" rx="5" ry="5" width="50" height="20" />
      </ContentLoader>
    </TrackExtraContainer>
  </TrackLoaderContainer>
);

export default MyLoader;
