import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type  { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./index.ts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;