import { useEffect, useState } from "react";
import { RichText } from "@tarojs/components";

import parse from "./parse";

import "./index.less";
import { useKatexLoaded } from "./Loader";

export default ({ latex, option }) => {
  const [nodes, setNodes] = useState([]);

  const load = useKatexLoaded();
  useEffect(() => {
    if (load) setNodes(parse(latex, option));
  }, [latex, option, load]);

  return <RichText nodes={nodes} />;
};
