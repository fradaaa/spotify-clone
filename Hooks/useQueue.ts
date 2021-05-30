import { useContext } from "react";
import { QueueContext } from "../Context";

const useQueue = () => useContext(QueueContext)!;

export default useQueue;
