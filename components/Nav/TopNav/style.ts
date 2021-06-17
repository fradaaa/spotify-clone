import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexRow, StyledLink } from "../../Globals";

export const TopNavContainer = styled(FlexRow)`
  grid-area: top-nav;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-between;
  display: flex;

  ${mq["sm"]} {
    display: none;
  }
`;

export const TopNavGithubLink = styled(StyledLink)`
  display: flex;
  margin-left: auto;
`;

export const TopNavLogo = styled(FlexRow)`
  max-width: 150px;
  margin-left: 15px;
`;

export const TopNavDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  background-color: ${({ theme }) => theme.surface2};
  border-radius: var(--brsm);
  overflow: hidden;
`;

export const TopNavItem = styled(FlexRow)`
  cursor: pointer;
  border-bottom: ${({ theme }) => `1px solid ${theme.lightBorder}`};
  transition: color 0.1s ease-in, background-color 0.1s ease-in;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.surface4};
  }
`;

export const TopNavLink = styled(StyledLink)`
  padding: 15px;
  display: flex;
  width: 100%;
`;

export const TopNavText = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin-left: 10px;
  flex: 1;
`;
