import Image from "next/image";
import Link from "next/link";
import {
  HeaderBackground,
  ContentHeaderType,
  ContentHeaderInfoText,
  ContentHeaderName,
  ContentHeaderInfo,
  ContentHeaderInfoPhoto,
  ContentHeaderTitle,
  ContentHeaderInfoContainer,
  HeaderGradient,
  StyledContentHeader,
  ContentHeaderCoverContainer,
  ContentHeaderDesc,
  ContentHeaderPlaylistPlaceholder,
} from "./style";
import { IoMusicalNotesOutline } from "react-icons/io5";

type ContentHeaderProps = {
  bg?: string;
  coverImage: string;
  type: string;
  title: string;
  infoImage?: string;
  infoId: string;
  infoName: string;
  total_tracks: number;
  year?: number;
  desc?: string;
  duration?: string;
};

const ContentHeader = ({
  bg,
  coverImage,
  type,
  title,
  infoImage,
  infoId,
  infoName,
  total_tracks,
  year,
  desc,
  duration,
}: ContentHeaderProps) => {
  const ownerLink =
    type === "playlist" ? `/user/${infoId}` : `/artist/${infoId}`;

  return (
    <StyledContentHeader>
      <HeaderBackground style={{ backgroundColor: bg }} />
      <HeaderGradient />
      <ContentHeaderCoverContainer>
        {coverImage ? (
          <Image
            src={coverImage}
            alt=""
            layout="fixed"
            width={200}
            height={200}
          />
        ) : (
          <ContentHeaderPlaylistPlaceholder>
            <IoMusicalNotesOutline />
          </ContentHeaderPlaylistPlaceholder>
        )}
      </ContentHeaderCoverContainer>
      <ContentHeaderInfoContainer>
        <ContentHeaderType>
          {type === "likedSongs" ? "playlist" : type}
        </ContentHeaderType>
        <ContentHeaderTitle>{title}</ContentHeaderTitle>
        {desc && <ContentHeaderDesc>{desc}</ContentHeaderDesc>}
        <ContentHeaderInfo>
          {infoImage && (
            <ContentHeaderInfoPhoto>
              <Image src={infoImage} alt="" width={25} height={25} />
            </ContentHeaderInfoPhoto>
          )}
          <Link href={ownerLink}>
            <ContentHeaderName>{infoName}</ContentHeaderName>
          </Link>
          {year && <ContentHeaderInfoText>{year}</ContentHeaderInfoText>}
          {total_tracks > 0 && (
            <>
              <ContentHeaderInfoText>{`${total_tracks} tracks`}</ContentHeaderInfoText>
              {duration && (
                <ContentHeaderInfoText>{duration}</ContentHeaderInfoText>
              )}
            </>
          )}
        </ContentHeaderInfo>
      </ContentHeaderInfoContainer>
    </StyledContentHeader>
  );
};

export default ContentHeader;
