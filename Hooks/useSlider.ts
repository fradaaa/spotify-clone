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

type UseSliderConfig = {
  updateFunction: (value: number) => void;
  targetElement: HTMLElement;
};

const useSlider = ({ updateFunction, targetElement }: UseSliderConfig) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const value = calculateRelativeMousePositionPercent(
      e.clientX,
      targetElement
    );
    updateFunction(value);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const value = calculateRelativeMousePositionPercent(
      e.clientX,
      targetElement
    );
    updateFunction(value);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const value = calculateRelativeMousePositionPercent(
      e.clientX,
      targetElement
    );
    updateFunction(value);
  };

  return { handleMouseDown, handleClick };
};

export default useSlider;
