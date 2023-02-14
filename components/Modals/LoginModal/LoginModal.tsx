import { useRouter } from "next/dist/client/router";
import { Button } from "../../Buttons/style";
import {
  LoginButtonsContainer,
  LoginModalContainer,
  LoginModalLaterButton,
  LoginModalSubText,
  LoginModalText,
  LoginTextContainer,
} from "./style";

type LoginModalProps = {
  text: string;
  subText: string;
  closeModal: () => void;
};

const LoginModal = ({ text, subText, closeModal }: LoginModalProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <LoginModalContainer>
      <LoginTextContainer>
        <LoginModalText>{text}</LoginModalText>
        <LoginModalSubText>{subText}</LoginModalSubText>
      </LoginTextContainer>
      <LoginButtonsContainer>
        <LoginModalLaterButton onClick={closeModal}>
          NOT NOW
        </LoginModalLaterButton>
        <Button onClick={handleClick}>LOGIN OR SIGN UP</Button>
      </LoginButtonsContainer>
    </LoginModalContainer>
  );
};

export default LoginModal;
