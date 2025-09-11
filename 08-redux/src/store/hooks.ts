import type { AppDispatch } from "./store.ts";
import { useDispatch } from "react-redux";

type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = useDispatch;
