import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const StyledContentHeader = styled.header`
  display: flex;
  position: relative;
  height: 30vh;
  padding: 0 20px 20px;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeaderGradient = styled(HeaderBackground)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

export const ContentHeaderCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
  align-self: flex-end;
  max-width: 150px;
  max-height: 150px;
  margin-right: 25px;
  user-select: none;

  ${mq["sm"]} {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const ContentHeaderPlaylistPlaceholder = styled(FlexRow)`
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.surface4};
  color: ${({ theme }) => theme.onSurface};
  z-index: 1;

  & svg {
    display: block;
    width: 70px;
    height: 70px;
  }
`;

export const ContentHeaderInfoContainer = styled(FlexCol)`
  justify-content: flex-end;
  color: ${({ theme }) => theme.onSurface};
  justify-content: flex-end;
  flex: 1;
  z-index: 1;
  overflow: hidden;
`;

export const ContentHeaderType = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

export const ContentHeaderTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${mq["sm"]} {
    font-size: 50px;
  }
`;

export const ContentHeaderDesc = styled.div`
  font-size: 14px;
`;

export const ContentHeaderInfo = styled(FlexRow)`
  font-size: 15px;
`;

export const ContentHeaderInfoPhoto = styled(FlexRow)`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
  user-select: none;
`;

export const ContentHeaderName = styled(StyledLink)`
  font-weight: 600;
`;

export const ContentHeaderInfoText = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;

  ::before {
    content: "•";
    font-size: 20px;
    margin: 0 3px;
  }
`;
