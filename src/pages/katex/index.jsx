import { useState } from "react";
import { View, Textarea, Button } from "@tarojs/components";
import Katex from "../../components/katex";
import "./index.less";

export default () => {
  const [latex, setLatex] = useState(
    "\\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}\\\\"
  );
  const [input, setInput] = useState(latex);

  return (
    <View className="container">
      <View className="latex">
        <Katex
          latex={latex}
          option={{
            displayMode: true,
            throwOnError: false
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
