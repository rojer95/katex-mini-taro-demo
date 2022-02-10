import { useEffect, useState } from "react";
import { RichText } from "@tarojs/components";

import parse from "./parse";

import "./index.less";

export default ({ latex }) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setNodes(parse(latex));
  }, [latex]);

  return <RichText nodes={nodes} />;
};
