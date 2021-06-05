import { Album, Artist } from ".prisma/client";
import Link from "next/link";
import useSWR from "swr";
import { ArtistSubHeaderText } from "../Artist/style";
import { RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";
import { SearchLink } from "./style";

type Data = Album & { artist: Artist };

const HomeContent = () => {
  const { data: artists } = useSWR<Artist[]>("/api/artists", {
    revalidateOnFocus: false,
  });
  const { data: albums } = useSWR<Data[]>("/api/albums", {
    revalidateOnFocus: false,
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {artists && albums ? (
        <>
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
        </>
      ) : (
        <RingLoader />
      )}
    </div>
  );
};

export default HomeContent;
