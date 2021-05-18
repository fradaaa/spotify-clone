import {
  ProgressBackground,
  ProgressButton,
  ProgressDuration,
  ProgressWrapper,
} from "./style";

type ProgressBarProps = {
  value: number;
  show: boolean;
  isDragging: boolean;
  enableShow: () => void;
  disableShow: () => void;
  handleMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
};

const ProgressBar = ({
  value,
  show,
  isDragging,
  enableShow,
  disableShow,
  handleMouseDown,
}: ProgressBarProps) => {
  return (
    <ProgressWrapper
      onMouseOver={enableShow}
      onMouseLeave={disableShow}
      onMouseDown={handleMouseDown}
    >
      <ProgressBackground>
        <ProgressDuration
          style={{ transform: `translateX(-${100 - value}%)` }}
          show={isDragging || show}
        />
        <ProgressButton
          style={{ left: `${value}%` }}
          aria-label=""
          show={isDragging || show}
        />
      </ProgressBackground>
    </ProgressWrapper>
  );
};

export default ProgressBar;
