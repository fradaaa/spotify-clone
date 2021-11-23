import { CSSProperties } from "react";
import { PreviewContainer, PreviewList, PreviewTitle } from "./style";

type PreviewProps = {
  title: string | JSX.Element;
  style?: CSSProperties;
};

const Preview = ({
  title,
  children,
  style,
}: React.PropsWithChildren<PreviewProps>) => {
  return (
    <PreviewContainer style={style}>
      <PreviewTitle>{title}</PreviewTitle>
      <PreviewList>{children}</PreviewList>
    </PreviewContainer>
  );
};

export default Preview;
