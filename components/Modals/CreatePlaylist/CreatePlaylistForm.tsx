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

const CreatePlaylistForm = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <CreatePlaylistFormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values: Values) => {
          try {
            await fetch("/api/playlists/create", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(values),
            });
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
          <label id="description" htmlFor="description">
            <Field
              as={CreatePlaylistTextArea}
              id="description"
              name="description"
              placeholder="Add an optional description"
              autoComplete="off"
              autoCorrect="off"
            />
          </label>
          <SubmitButton>Create</SubmitButton>
        </StyledCreatePlaylistForm>
      </Formik>
    </CreatePlaylistFormContainer>
  );
};

export default CreatePlaylistForm;
