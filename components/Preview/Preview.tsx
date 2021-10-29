import { PreviewContainer, PreviewList, PreviewTitle } from "./style";

type PreviewProps = {
  title: string | JSX.Element;
};

const Preview = ({
  title,
  children,
}: React.PropsWithChildren<PreviewProps>) => {
  return (
    <PreviewContainer>
      <PreviewTitle>{title}</PreviewTitle>
      <PreviewList>{children}</PreviewList>
    </PreviewContainer>
  );
};

export default Preview;
