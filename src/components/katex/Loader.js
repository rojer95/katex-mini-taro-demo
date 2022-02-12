import React, { useEffect } from "react";
import { loadKatex } from "./parse";

const Context = React.createContext({
  load: false
});

export const KatexProvider = ({ children }) => {
  const [load, setLoad] = React.useState(false);

  useEffect(() => {
    loadKatex("https://lib.baomitu.com/KaTeX/latest/katex.min.js").then(() => {
      setLoad(true);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        load
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useKatexLoaded = () => {
  const context = React.useContext(Context);
  return context.load;
};
