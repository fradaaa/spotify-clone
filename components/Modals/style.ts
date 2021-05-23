import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Form } from "formik";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow, StyledTextArea } from "../Globals";

const show = keyframes`
  from {
    opacity: 0;
    scale: 1.2;
  }

  to {
    opacity: 1;
    scale: 1;
  }
`;

export const ModalOverlay = styled(FlexRow)`
  position: fixed;
  inset: 0;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65) !important;
  z-index: 100;
  animation: ${show} 0.1s ease;
`;

type ModalContentProps = {
  post?: boolean;
};

export const ModalContent = styled(FlexCol)<ModalContentProps>`
  width: ${({ post }) => (post ? "960px" : "350px")};
  justify-content: center;
  align-items: center;
  border-radius: var(--brlg);
  background-color: ${({ theme }) => theme.surface};
  overflow: hidden;
  box-shadow: var(--bxshdw);
`;

export const CreatePlaylistContainer = styled(FlexCol)`
  width: 100%;
  height: 350px;
`;

export const StyledCreatePlaylistHeader = styled(FlexRow)`
  padding: 10px;
`;

export const CreatePlaylistHeaderText = styled.div`
  color: ${({ theme }) => theme.onSurface};
  font-weight: 600;
`;

export const StyledCancelButton = styled(IconButton)`
  margin-left: auto;
`;

export const CreatePlaylistFormContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

export const StyledCreatePlaylistForm = styled(Form)`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
`;

export const CreatePlaylistTextArea = styled(StyledTextArea)`
  border-radius: var(--brmd);
  flex: 1;
`;
