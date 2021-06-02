import { Album, Artist } from ".prisma/client";
import { Preview, PreviewItem } from "../Preview";

export const convertSeachArtists = (artists: Artist[]) => {
  return artists.length > 0 ? (
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
  ) : null;
};

export const convertSearchAlbums = (albums: (Album & { artist: Artist })[]) => {
  return albums.length > 0 ? (
    <Preview title="ALbums">
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
  ) : null;
};

export const isEmpty = (data: { [key: string]: unknown[] }) => {
  const r: boolean[] = [];

  for (const key of Object.keys(data)) {
    r.push(data[key].length === 0);
  }

  return r.every((v) => v === true);
};
