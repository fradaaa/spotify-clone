import React, { useRef } from "react";
import { useColor, useSticky } from "../../Hooks";
import {
  ContentBG,
  ContentControlsContainer,
  ContentText,
  StickyTop,
} from "./style";

const ContentControls = ({
  text,
  children,
}: React.PropsWithChildren<{ text: string }>) => {
  const topRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky(topRef);
  const bg = useColor();

  return (
    <>
      <StickyTop ref={topRef} />
      <ContentControlsContainer isSticky={isSticky}>
        <ContentBG style={{ backgroundColor: isSticky ? bg : "transparent" }} />
        {children}
        <ContentText isSticky={isSticky}>{text}</ContentText>
      </ContentControlsContainer>
    </>
  );
};

export default ContentControls;
