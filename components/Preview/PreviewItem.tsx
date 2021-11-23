import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { useAppDispatch } from "../../redux/hooks";
import { addItem, removeItem } from "../../redux/slices/recentSearchesSlice";
import { ContentHeaderPlaylistPlaceholder } from "../ContentHeader/style";
import {
  PreviewItemButton,
  PreviewItemContainer,
  PreviewItemCoverContainer,
  PreviewItemSubText,
  PreviewItemTitle,
} from "./style";

export type PreviewItemType = {
  id: string;
  image: string;
  title: string;
  subText: string;
  type: string;
  round?: boolean;
};

type PreviewItemProps = PreviewItemType & {
  search?: boolean;
  showClear?: boolean;
};

const PreviewItem = ({
  id,
  image,
  title,
  subText,
  type,
  round,
  search,
  showClear,
}: PreviewItemProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    search && dispatch(addItem({ id, image, title, subText, type, round }));
    router.push(`/${type}/${id}`);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeItem(id));
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
      {showClear && (
        <PreviewItemButton
          width="20"
          height="20"
          aria-label="Remove from recent searches"
          onClick={handleRemove}
        >
          <MdClear />
        </PreviewItemButton>
      )}
    </PreviewItemContainer>
  );
};

export default PreviewItem;
