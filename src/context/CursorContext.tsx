import React, { PropsWithChildren, useRef } from "react";

type CursorContextProps = {
  hoveredElement: React.MutableRefObject<HTMLElement | null>;
};

export const CursorContext = React.createContext({} as CursorContextProps);

const CursorContextProvider = ({ children }: PropsWithChildren) => {
  const hoveredElement = useRef<HTMLUnknownElement | null>(null);

  return (
    <CursorContext.Provider value={{ hoveredElement }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
