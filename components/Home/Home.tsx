import { Album, Artist } from ".prisma/client";
import Link from "next/link";
import { ArtistSubHeaderText } from "../Artist/style";
import { Preview, PreviewItem } from "../Preview";
import { HomeContainer, SearchLink } from "./style";

type HomeProps = {
  artists: Artist[];
  albums: (Album & { artist: Artist })[];
};

const Home = ({ artists, albums }: HomeProps) => {
  return (
    <HomeContainer>
      <div style={{ width: "100%", height: "100%" }}>
        <ArtistSubHeaderText as="h1">
          Check Artists and Albums or{" "}
          <Link href="/search">
            <SearchLink>Search</SearchLink>
          </Link>
        </ArtistSubHeaderText>
        <Preview title="Artists">
          {artists.map(({ id, image, name }) => (
            <PreviewItem
              key={id}
              id={id}
              image={image}
              title={name}
              subText="Artist"
              type="artist"
              round
            />
          ))}
        </Preview>
        <Preview title="Albums">
          {albums.map(({ id, image, name, artist: { name: artistName } }) => (
            <PreviewItem
              key={id}
              id={id}
              image={image}
              title={name}
              subText={artistName}
              type="album"
            />
          ))}
        </Preview>
      </div>
    </HomeContainer>
  );
};

export default Home;
