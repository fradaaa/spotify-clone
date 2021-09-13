import { useLayoutEffect, useRef, useState } from "react";
import { StyledDropdownMenu } from "./style";

const DropdownMenu = ({ children }: React.PropsWithChildren<{}>) => {
  const node = useRef<HTMLDivElement | null>(null);
  const [toBottom, setToBottom] = useState(true);

  useLayoutEffect(() => {
    const { bottom } = node.current?.getBoundingClientRect()!;
    setToBottom(window.innerHeight - bottom > 310);
  }, []);

  return (
    <StyledDropdownMenu toBottom={toBottom} ref={node}>
      {children}
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
