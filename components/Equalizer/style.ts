import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

const equalizer = keyframes(
  `0% {
    height: 20px;
  }
  4% {
    height: 19px;
  }
  8% {
    height: 18px;
  }
  12% {
    height: 14px;
  }
  16% {
    height: 10px;
  }
  20% {
    height: 14px;
  }
  24% {
    height: 18px;
  }
  28% {
    height: 5px;
  }
  32% {
    height: 18px;
  }
  36% {
    height: 20px;
  }
  40% {
    height: 10px;
  }
  44% {
    height: 18px;
  }
  48% {
    height: 20px;
  }
  52% {
    height: 14px;
  }
  56% {
    height: 5px;
  }
  60% {
    height: 14px;
  }
  64% {
    height: 20px;
  }
  68% {
    height: 14px;
  }
  72% {
    height: 20px;
  }
  76% {
    height: 10px;
  }
  80% {
    height: 20px;
  }
  84% {
    height: 17px;
  }
  88% {
    height: 20px;
  }
  92% {
    height: 10px;
  }
  96% {
    height: 20px;
  }
  100% {
    height: 20px;
  }`
);

export const EqualizerContainer = styled(FlexRow)`
  background-color: transparent;
  align-items: flex-end;
  height: 20px;
`;

export const EqualizerBar = styled.div`
  width: 2px;
  margin-right: 2px;
  transition: 0.5s;
  vertical-align: bottom;
  animation: ${equalizer} 4s 0s infinite;
  animation-timing-function: linear;
  background-color: ${({ theme }) => theme.primary};
`;

export const FirstBar = styled(EqualizerBar)`
  height: 18px;
  transition: 0.5s;
  animation-delay: -1.9s;
`;

export const SecondBar = styled(EqualizerBar)`
  height: 20px;
  animation-delay: -2.9s;
`;

export const ThirdBar = styled(EqualizerBar)`
  height: 17px;
  animation-delay: -3.9s;
`;

export const FourthBar = styled(EqualizerBar)`
  height: 16px;
  animation-delay: -4.9s;
`;

export const FifthBar = styled(EqualizerBar)`
  height: 20px;
  animation-delay: -5.9s;
`;
