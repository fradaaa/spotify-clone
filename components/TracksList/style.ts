import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";

export const TracksListContainer = styled.div`
  padding: 0 5px;

  ${mq["md"]} {
    padding: 0 20px;
  }
`;

export const TracksColumnIcon = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.primary};
`;
