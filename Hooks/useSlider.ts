import { useCallback, useRef, useState } from "react";

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
  const element = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!element.current) element.current = e.currentTarget;

    setIsDragging(true);
    const value = calculateRelativeMousePositionPercent(
      e.clientX,
      e.currentTarget
    );
    updateFunction(value);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const value = calculateRelativeMousePositionPercent(
      e.clientX,
      element.current
    );
    updateFunction(value);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return { isDragging, handleMouseDown };
};

export default useSlider;
