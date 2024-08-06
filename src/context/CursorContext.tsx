import { CursorType } from "@/components/ui/cursor";
import React, { PropsWithChildren, useRef } from "react";

type CursorContextProps = {
  hoveredElement: React.MutableRefObject<HoveredElementRef>;
};

type HoveredElementRef = {
  target: HTMLElement | null;
  type: CursorType | null;
};

export const CursorContext = React.createContext({} as CursorContextProps);

const CursorContextProvider = ({ children }: PropsWithChildren) => {
  const hoveredElement = useRef<HoveredElementRef>({
    target: null,
    type: null,
  });

  return (
    <CursorContext.Provider value={{ hoveredElement }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
