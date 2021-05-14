export const convertDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60 > 10 ? duration % 60 : `0${duration % 60}`;
  return `${minutes}:${seconds}`;
};
