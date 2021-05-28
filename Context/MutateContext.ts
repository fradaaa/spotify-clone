import { createContext } from "react";

type MutateContextType = {
  localMutate: (index: number, value: boolean) => void;
  asyncMutate: (index: number, asyncUpdate: () => Promise<boolean>) => void;
};

const MutateContext = createContext<MutateContextType | null>(null);
MutateContext.displayName = "Mutate";

export default MutateContext;
