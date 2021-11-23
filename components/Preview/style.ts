import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow } from "../Globals";

export const PreviewContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

export const PreviewTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.onSurface};
`;

export const PreviewList = styled(FlexRow)`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const PreviewItemContainer = styled(FlexCol)`
  position: relative;
  justify-content: center;
  max-width: 250px;
  padding: 20px;
  background-color: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.onSurface};
  border-radius: var(--brsm);
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.1s ease-in;

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

export const PreviewItemButton = styled(IconButton)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const PreviewPlayButtonContainer = styled(FlexRow)`
  justify-content: center;
  position: absolute;
  right: 5%;
  bottom: 25%;
`;
