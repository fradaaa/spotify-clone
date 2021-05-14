import { PreviewContainer, PreviewList, PreviewTitle } from "./style";

type PreviewProps = {
  title: string;
  children: React.ReactNode;
};

const Preview = ({ title, children }: PreviewProps) => {
  return (
    <PreviewContainer>
      <PreviewTitle>{title}</PreviewTitle>
      <PreviewList>{children}</PreviewList>
    </PreviewContainer>
  );
};

export default Preview;
