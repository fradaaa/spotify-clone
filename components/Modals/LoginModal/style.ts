import styled from "@emotion/styled";
import { Button } from "../../Buttons/style";
import { FlexRow } from "../../Globals";

export const LoginModalContainer = styled.div`
  background-color: #2e77d0;
  width: 350px;
  height: 150px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.onSurface};
`;

export const LoginTextContainer = styled.div`
  height: 70%;
`;

export const LoginModalText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 15px;
`;

export const LoginModalSubText = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const LoginButtonsContainer = styled(FlexRow)`
  justify-content: space-around;
  height: 30%;
`;

export const LoginModalLaterButton = styled(Button)`
  background-color: transparent !important;
`;
