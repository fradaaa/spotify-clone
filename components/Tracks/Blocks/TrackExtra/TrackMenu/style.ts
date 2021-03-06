import styled from "@emotion/styled";
import { FlexRow, StyledLink } from "../../../../Globals";

export const TrackMenuContainer = styled.div`
  min-width: 200px;
  z-index: 500;
`;

export const TrackMenuOption = styled(FlexRow)`
  cursor: pointer;
  transition: background-color 0.1s ease-in;
  font-size: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`;

export const TrackMenuLink = styled(StyledLink)`
  padding: 10px;
  flex: 1;

  &:hover {
    color: ${({ theme }) => theme.onSurface};
  }
`;

export const TrackMenuButton = styled.button`
  padding: 10px;
  border: none;
  color: ${({ theme }) => theme.onSurface};
  background-color: ${({ theme }) => theme.surface2};
  font-size: 15px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  display: flex;
  height: 100%;
  align-items: center;
  transition: background-color 0.1s ease-in;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`;

export const TrackMenuText = styled.span``;

export const TrackMenuOptionList = styled(TrackMenuOption)`
  position: relative;
  padding: 10px;

  & svg {
    margin-right: 5px;
  }
`;

export const TrackMenuOptionsListContainer = styled(TrackMenuContainer)`
  position: absolute;
  top: 50%;
  right: 95%;
  transform: translateY(-50%);
  box-shadow: var(--bxshdw);
  background-color: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.onSurface};
  border: ${({ theme }) => `1px solid ${theme.lightBorder}`};
  border-radius: var(--brsm);
  z-index: 20;
`;
