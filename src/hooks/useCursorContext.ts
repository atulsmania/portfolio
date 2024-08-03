import { CursorContext } from "@/context/CursorContext";
import { useContext } from "react";

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error(
      "useCursorContext must be used within a CursorContextProvider"
    );
  }
  return context;
};
