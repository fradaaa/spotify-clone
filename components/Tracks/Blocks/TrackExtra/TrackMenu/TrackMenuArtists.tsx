import { Artist } from ".prisma/client";
import Link from "next/link";
import { AiFillCaretLeft } from "react-icons/ai";
import { useShow } from "../../../../../Hooks";
import {
  TrackMenuLink,
  TrackMenuOption,
  TrackMenuOptionList,
  TrackMenuOptionsListContainer,
} from "./style";

const TrackMenuArtists = ({ artists }: { artists: Artist[] }) => {
  const { show, disableShow, enableShow } = useShow();

  return artists.length > 1 ? (
    <TrackMenuOptionList onMouseOver={enableShow} onMouseLeave={disableShow}>
      <AiFillCaretLeft /> Go to artist
      {show && (
        <TrackMenuOptionsListContainer>
          {artists.map(({ id, name }) => (
            <TrackMenuOption key={id}>
              <Link href={`/artist/${id}`} passHref>
                <TrackMenuLink href={`/artist/${id}`}>{name}</TrackMenuLink>
              </Link>
            </TrackMenuOption>
          ))}
        </TrackMenuOptionsListContainer>
      )}
    </TrackMenuOptionList>
  ) : (
    <TrackMenuOption>
      <Link href={`/artist/${artists[0].id}`} passHref>
        <TrackMenuLink href={`/artist/${artists[0].id}`}>
          Go to artist
        </TrackMenuLink>
      </Link>
    </TrackMenuOption>
  );
};

export default TrackMenuArtists;
