import React, { useEffect, useState } from "react";
import { RichText } from "@tarojs/components";

import parse from "@rojer/katex-mini";

import { useKatexLoaded } from "./Loader";

export default React.memo(
  ({ latex, option }) => {
    const [nodes, setNodes] = useState([]);
    const load = useKatexLoaded();

    useEffect(() => {
      if (load) setNodes(parse(latex, option));
    }, [latex, option, load]);

    return <RichText nodes={nodes} />;
  },
  (prevProps, nextProps) => prevProps.latex === nextProps.latex
);
