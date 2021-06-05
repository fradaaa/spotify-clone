import { createContext } from "react";

const MutateContext = createContext<((trackId: string) => void) | null>(null);
MutateContext.displayName = "Mutate";

export default MutateContext;
