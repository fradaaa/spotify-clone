import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow, StyledInput } from "../Globals";

export const FormRow = styled(FlexCol)`
  width: 100%;
  position: relative;
  margin: 0 0 10px 0;
`;

export const RowLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.onSurface};
`;

export const Input = styled(StyledInput)`
  width: 100%;
  height: 35px;
  padding: 5px 35px 5px 5px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.surface3};
`;

export const SearchInputContainer = styled(FlexRow)`
  position: relative;
  width: 100%;
`;

export const StyledSearchInput = styled(StyledInput)`
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 0 25px;
  background-color: ${({ theme }) => theme.surface2};
`;

export const SearchIcon = styled.label`
  position: absolute;
  left: 5px;
  color: ${({ theme }) => theme.primary};

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const ClearSearchIcon = styled(IconButton)`
  position: absolute;
  right: 5px;
`;
