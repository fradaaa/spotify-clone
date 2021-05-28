import { useMemo } from "react";
import { MutatorCallback } from "swr/dist/types";

const useSavedMutate = (
  mutate: (
    data?:
      | boolean[]
      | Promise<boolean[]>
      | MutatorCallback<boolean[]>
      | undefined,
    shouldRevalidate?: boolean | undefined
  ) => Promise<boolean[] | undefined>
) => {
  const localMutate = (index: number, value: boolean) => {
    mutate((data) => {
      return data?.map((v, i) => {
        return index === i ? value : v;
      });
    }, false);
  };

  const asyncMutate = (index: number, asyncUpdate: () => Promise<boolean>) => {
    mutate(async (data) => {
      const updatedValue = await asyncUpdate();

      return data?.map((v, i) => {
        return index === i ? updatedValue : v;
      });
    });
  };

  const funcs = useMemo(() => ({ localMutate, asyncMutate }), []);

  return funcs;
};

export default useSavedMutate;
