import { useCallback, useState } from "react";

const useShow = () => {
  const [show, setShow] = useState(false);

  const enableShow = useCallback(() => {
    setShow(true);
  }, []);

  const disableShow = useCallback(() => {
    setShow(false);
  }, []);

  return { show, enableShow, disableShow };
};

export default useShow;
