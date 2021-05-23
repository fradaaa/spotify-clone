import { useFormikContext } from "formik";
import { Button } from "./style";

const SubmitButton = ({ children }: React.PropsWithChildren<{}>) => {
  const { isValid, dirty, isSubmitting } = useFormikContext<{}>();

  return (
    <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
      {children}
    </Button>
  );
};

export default SubmitButton;
