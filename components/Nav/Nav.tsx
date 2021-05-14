import {
  NavContainer,
  NavItem,
  NavLibrary,
  NavPlaylistItem,
  NavPlaylists,
  StyledNav,
  NavSectionName,
} from "./style";

const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <NavLibrary>
          <NavSectionName>Your Library</NavSectionName>
          <NavItem>Songs</NavItem>
          <NavItem>Albums</NavItem>
          <NavItem>Artists</NavItem>
        </NavLibrary>
        <NavPlaylists>
          <NavSectionName>Playlists</NavSectionName>
          <NavPlaylistItem>Party music</NavPlaylistItem>
        </NavPlaylists>
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
