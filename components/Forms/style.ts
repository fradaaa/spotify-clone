import styled from "@emotion/styled";
import { FlexCol, StyledInput } from "../Globals";

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
