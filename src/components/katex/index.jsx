import { useEffect, useState } from "react";
import { RichText } from "@tarojs/components";

import parse from "./parse";

import "./index.less";

export default ({ latex, option }) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setNodes(parse(latex, option));
  }, [latex, option]);

  return <RichText nodes={nodes} />;
};
