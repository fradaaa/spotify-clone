import React, { useEffect, useRef, useState } from "react";
import { DropdownIcon, DropdownMenu, StyledDropdown } from "./style";

const Dropdown = ({
  icon,
  children,
}: React.PropsWithChildren<{ icon: React.ReactNode }>) => {
  const node = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (node.current?.contains(e.target as Node)) return;

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <StyledDropdown ref={node} onClick={toggleOpen}>
      <DropdownIcon>{icon}</DropdownIcon>
      {isOpen && <DropdownMenu>{children}</DropdownMenu>}
    </StyledDropdown>
  );
};

export default Dropdown;
