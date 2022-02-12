import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { loadKatex } from "@rojer/katex-mini";

const Context = React.createContext({
  load: false
});

export const KatexProvider = ({ children }) => {
  const [load, setLoad] = React.useState(false);

  useEffect(() => {
    Taro.request({
      url: "https://lib.baomitu.com/KaTeX/latest/katex.min.js",
      success: ({ data: code }) => {
        loadKatex(code);
        setLoad(true);
      }
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
