import { useEffect, useState } from "react";

const useSticky = (topRef: React.RefObject<HTMLDivElement>) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const copyRef = topRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.intersectionRatio === 0) {
          setIsSticky(true);
        } else if (entry.intersectionRatio === 1) {
          setIsSticky(false);
        }
      },
      {
        threshold: [0, 1],
      }
    );

    if (copyRef) {
      observer.observe(copyRef);
    }

    return () => observer.unobserve(copyRef!);
  }, [topRef]);

  return isSticky;
};

export default useSticky;
