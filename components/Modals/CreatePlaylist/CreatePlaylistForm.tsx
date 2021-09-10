import { Field, Formik } from "formik";
import { mutate } from "swr";
import * as Yup from "yup";
import { SubmitButton } from "../../Buttons";
import TextInput from "../../Forms/TextInput";
import {
  CreatePlaylistFormContainer,
  CreatePlaylistTextArea,
  StyledCreatePlaylistForm,
} from "../style";

export type PlaylistForm = {
  closeModal: () => void;
  buttonText: string;
  method: "POST" | "PUT";
  playlistId?: string;
};

type Values = {
  name: string;
  description: string;
};

const initialValues: Values = {
  name: "",
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required").max(30, "Max 30 characters").trim(),
  description: Yup.string().max(255, "Max 255 characters").trim(),
});

const CreatePlaylistForm = ({
  closeModal,
  buttonText,
  method,
  playlistId,
}: PlaylistForm) => {
  return (
    <CreatePlaylistFormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values: Values) => {
          try {
            await fetch("/api/playlists", {
              method,
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                ...values,
                id: playlistId ? playlistId : "",
              }),
            });

            if (playlistId) {
              mutate(`/api/playlists/${playlistId}`);
            }

            mutate("/api/me/playlists");
            closeModal();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <StyledCreatePlaylistForm>
          <TextInput
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Add a name"
          />
          <label id="description" htmlFor="description" style={{ flex: 1 }}>
            <Field
              as={CreatePlaylistTextArea}
              id="description"
              name="description"
              placeholder="Add an optional description"
              autoComplete="off"
              autoCorrect="off"
            />
          </label>
          <SubmitButton>{buttonText}</SubmitButton>
        </StyledCreatePlaylistForm>
      </Formik>
    </CreatePlaylistFormContainer>
  );
};

export default CreatePlaylistForm;
