import { PropsWithChildren, createContext } from "react";
import { useMobileIdentifier } from "hooks/useMobileIdentifier";

type Context = {
  isMobile: boolean;
};

export const AppContext = createContext({} as Context);

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const { isMobile } = useMobileIdentifier();
  return (
    <AppContext.Provider value={{ isMobile }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
