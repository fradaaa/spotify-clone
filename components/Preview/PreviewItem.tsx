import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import {
  PreviewItemContainer,
  PreviewItemCoverContainer,
  PreviewItemTitle,
  PreviewItemSubText,
} from "./style";

type PreviewItemProps = {
  id: string;
  image: string;
  title: string;
  subText: string;
  type: string;
  round?: boolean;
};

const PreviewItem = ({
  id,
  image,
  title,
  subText,
  type,
  round,
}: PreviewItemProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${type}/${id}`);
  };

  return (
    <PreviewItemContainer onClick={handleClick}>
      <PreviewItemCoverContainer style={round ? { borderRadius: "50%" } : {}}>
        <Image src={image} alt="" width={250} height={250} />
      </PreviewItemCoverContainer>
      <PreviewItemTitle title={title}>{title}</PreviewItemTitle>
      <PreviewItemSubText>{subText}</PreviewItemSubText>
    </PreviewItemContainer>
  );
};

export default PreviewItem;
