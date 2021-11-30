import { AlbumProps } from "../components/Album/types";
import { createContext } from "react";

const AlbumContext = createContext<AlbumProps | null>(null);
AlbumContext.displayName = "Album";

export default AlbumContext;
