import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { RichText } from "@tarojs/components";

export default React.memo(
  ({ latex }) => {
    const [nodes, setNodes] = useState([]);

    const loadLatexNodesFromApi = async text => {
      Taro.request({
        url: "http://katex-api.eqistu.cn",
        data: {
          latex: text
        },
        dataType: "json",
        success(res) {
          setNodes(res.data);
        }
      });
    };

    useEffect(() => {
      loadLatexNodesFromApi(latex);
    }, [latex]);

    return <RichText nodes={nodes} />;
  },
  (prevProps, nextProps) => prevProps.latex === nextProps.latex
);
