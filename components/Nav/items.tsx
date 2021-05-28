import {
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const libraryItems = [
  {
    Icon: <AiOutlineClockCircle />,
    link: "/recently-played",
    text: "Recently Played",
  },
  {
    Icon: <AiOutlineHeart />,
    link: "/collection/tracks",
    text: "Liked Songs",
  },
  { Icon: <CgProfile />, link: "/collection/artists", text: "Artists" },
  { Icon: <BsCollectionPlay />, link: "/collection/albums", text: "Albums" },
];

export const menuItems = [
  { Icon: <AiOutlineHome />, link: "/", text: "Home" },
  { Icon: <AiOutlineSearch />, link: "/search", text: "Search" },
];
