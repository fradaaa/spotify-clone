import styled from "@emotion/styled";
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
  min-width: 200px;
  margin-right: 25px;
  user-select: none;
`;

export const ContentHeaderInfoContainer = styled(FlexCol)`
  justify-content: flex-end;
  color: ${({ theme }) => theme.onSurface};
  justify-content: flex-end;
  flex: 1;
  z-index: 1;
`;

export const ContentHeaderType = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

export const ContentHeaderTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
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
  font-size: 14px;

  ::before {
    content: "•";
    font-size: 20px;
    margin: 0 3px;
  }
`;
