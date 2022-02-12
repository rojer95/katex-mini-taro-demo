import React, { useEffect, useState } from "react";
import { RichText } from "@tarojs/components";

import "@rojer/katex-mini/src/index.less";
import parse from "@rojer/katex-mini";

import { useKatexLoaded } from "./Loader";

export default React.memo(
  ({ latex, option }) => {
    const [nodes, setNodes] = useState([]);
    const load = useKatexLoaded();

    useEffect(() => {
      if (load) setNodes(parse(latex, option));
    }, [latex, option, load]);

    console.log("nodes", JSON.stringify(nodes));
    return <RichText nodes={nodes} />;
  },
  (prevProps, nextProps) => prevProps.latex === nextProps.latex
);
