import { useField, useFormikContext } from "formik";
import { FormRow, Input, RowLabel } from "./style";

type TextInputProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
};

const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  const { isSubmitting } = useFormikContext();

  return (
    <FormRow>
      <RowLabel htmlFor={props.id || props.name}>{label}</RowLabel>
      <Input disabled={isSubmitting} {...field} {...props} />
    </FormRow>
  );
};

export default TextInput;
