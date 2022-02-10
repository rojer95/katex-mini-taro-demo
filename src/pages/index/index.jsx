import { useState } from "react";
import { View, Textarea, Button } from "@tarojs/components";
import Katex from "../../components/katex";
import "./index.less";

export default () => {
  const [latex, setLatex] = useState(
    "\\displaystyle \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)"
  );
  const [input, setInput] = useState(latex);

  return (
    <View className="container">
      <View className="latex">
        <Katex
          latex={latex}
          option={{
            displayMode: true
          }}
        />
      </View>
      <Textarea
        value={input}
        maxlength={-1}
        onInput={e => {
          setInput(e.target.value);
        }}
        autoHeight
      />
      <Button
        onClick={() => {
          setLatex(input);
        }}
      >
        渲染
      </Button>
    </View>
  );
};
