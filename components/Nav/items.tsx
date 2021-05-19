import {
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";

export const libraryItems = [
  {
    Icon: <AiOutlineClockCircle />,
    link: "/recently-played",
    text: "Recently Played",
  },
  {
    Icon: <AiOutlineHeart />,
    link: "/collection/favorite-tracks",
    text: "Favorite Songs",
  },
  { Icon: <CgProfile />, link: "/collection/artists", text: "Artists" },
  { Icon: <IoAlbumsOutline />, link: "/collection/albums", text: "Albums" },
];

export const menuItems = [
  { Icon: <AiOutlineHome />, link: "/", text: "Home" },
  { Icon: <AiOutlineSearch />, link: "/search", text: "Search" },
  { Icon: <BsCollectionPlay />, link: "/collection", text: "Collection" },
];
