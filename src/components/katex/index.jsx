import React, { useEffect, useState } from "react";
import { RichText } from "@tarojs/components";

import parse from "@rojer/katex-mini";

export default React.memo(
  ({ latex, option }) => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
      setNodes(parse(latex, option));
    }, [latex, option]);

    return <RichText nodes={nodes} />;
  },
  (prevProps, nextProps) => prevProps.latex === nextProps.latex
);
