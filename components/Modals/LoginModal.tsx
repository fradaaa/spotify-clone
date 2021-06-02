import { useRouter } from "next/dist/client/router";
import { Button } from "../Buttons/style";

const LoginModal = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/api/auth/login");
  };

  return (
    <div>
      <Button onClick={handleClick}>LOGIN OR SIGN UP</Button>
    </div>
  );
};

export default LoginModal;
