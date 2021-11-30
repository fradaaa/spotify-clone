import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexRow, StyledLink } from "../../Globals";

export const TopNavContainer = styled(FlexRow)`
  grid-area: top-nav;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-between;
  display: flex;
  position: relative;

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

const show = keyframes`
  from {
    transform: translateY(-5%);
    opacity: 0.1;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const TopNavDropdown = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  width: 100%;
  background-color: ${({ theme }) => theme.surface2};
  border-radius: 0 0 var(--brsm) var(--brsm);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);
  animation: ${show} 0.1s 1 ease;
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
