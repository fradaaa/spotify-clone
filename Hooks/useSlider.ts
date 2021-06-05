import { useCallback, useMemo, useRef, useState } from "react";

const calculateRelativeMousePositionPercent = (
  clientX: number,
  element: HTMLElement
) => {
  const { left, width } = element.getBoundingClientRect();
  const posX = clientX - left;

  let value = (posX / width) * 100;
  value = Math.max(value, 0);
  value = Math.min(value, 100);

  return value;
};

const useSlider = (updateFunction: (value: number) => void) => {
  const element = useRef<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const value = calculateRelativeMousePositionPercent(
        e.clientX,
        element.current!
      );
      updateFunction(value);
    },
    [updateFunction]
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    },
    [handleMouseMove]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (!element.current) element.current = e.currentTarget;

      setIsDragging(true);
      const value = calculateRelativeMousePositionPercent(
        e.clientX,
        e.currentTarget
      );
      updateFunction(value);

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handleMouseMove, handleMouseUp, updateFunction]
  );

  const value = useMemo(
    () => ({ isDragging, handleMouseDown }),
    [handleMouseDown, isDragging]
  );

  return value;
};

export default useSlider;
