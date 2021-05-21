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
} from "./style";

type ContentHeaderProps = {
  bg: string;
  coverImage: string;
  type: string;
  title: string;
  infoImage: string;
  infoId: string;
  infoName: string;
  total_tracks: number;
  year: number;
  duration: string;
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
  duration,
}: ContentHeaderProps) => {
  return (
    <StyledContentHeader>
      <HeaderBackground style={{ backgroundColor: bg }} />
      <HeaderGradient />
      <ContentHeaderCoverContainer>
        <Image
          src={coverImage}
          alt=""
          layout="fixed"
          width={200}
          height={200}
        />
      </ContentHeaderCoverContainer>
      <ContentHeaderInfoContainer>
        <ContentHeaderType>{type}</ContentHeaderType>
        <ContentHeaderTitle>{title}</ContentHeaderTitle>
        <ContentHeaderInfo>
          <ContentHeaderInfoPhoto>
            <Image src={infoImage} alt="" width={25} height={25} />
          </ContentHeaderInfoPhoto>
          <Link href={`$[artist/${infoId}]`}>
            <ContentHeaderName>{infoName}</ContentHeaderName>
          </Link>
          <ContentHeaderInfoText>{year}</ContentHeaderInfoText>
          <ContentHeaderInfoText>{`${total_tracks} tracks`}</ContentHeaderInfoText>
          <ContentHeaderInfoText>{duration}</ContentHeaderInfoText>
        </ContentHeaderInfo>
      </ContentHeaderInfoContainer>
    </StyledContentHeader>
  );
};

export default ContentHeader;
