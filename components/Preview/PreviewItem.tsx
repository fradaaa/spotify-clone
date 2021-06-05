import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { ContentHeaderPlaylistPlaceholder } from "../ContentHeader/style";
import {
  PreviewItemContainer,
  PreviewItemCoverContainer,
  PreviewItemSubText,
  PreviewItemTitle,
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
        {!image && type === "playlist" ? (
          <ContentHeaderPlaylistPlaceholder>
            <IoMusicalNotesOutline />
          </ContentHeaderPlaylistPlaceholder>
        ) : (
          <Image src={image} alt="" width={250} height={250} />
        )}
      </PreviewItemCoverContainer>
      <PreviewItemTitle title={title}>{title}</PreviewItemTitle>
      <PreviewItemSubText>{subText}</PreviewItemSubText>
    </PreviewItemContainer>
  );
};

export default PreviewItem;
