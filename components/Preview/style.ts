import styled from "@emotion/styled";
import { FlexCol, FlexRow } from "../Globals";

export const PreviewContainer = styled.div`
  padding: 20px;
`;

export const PreviewTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.onSurface};
`;

export const PreviewList = styled(FlexRow)``;

export const PreviewItemContainer = styled(FlexCol)`
  justify-content: center;
  max-width: 250px;
  padding: 10px;
  background-color: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.onSurface};
  border-radius: var(--brsm);
  cursor: pointer;
  margin-right: 20px;
  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`;

export const PreviewItemCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
  margin-bottom: 10px;
`;

export const PreviewItemTitle = styled.div`
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PreviewItemSubText = styled(FlexRow)`
  text-transform: capitalize;
`;
