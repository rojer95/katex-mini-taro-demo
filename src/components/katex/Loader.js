import React, { useEffect } from "react";
import { loadKatex } from "@rojer/katex-mini";
import Taro from "@tarojs/taro";

const Context = React.createContext({
  load: false
});

export const KatexProvider = ({ children }) => {
  const [load, setLoad] = React.useState(false);

  useEffect(() => {
    Taro.request({
      url: "https://lib.baomitu.com/KaTeX/latest/katex.min.js",
      success: ({ data: code }) => {
        console.log(code);
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
