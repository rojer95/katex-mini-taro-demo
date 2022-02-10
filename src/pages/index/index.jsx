import { Component, useState } from "react";
import { View, Text, Textarea, Button } from "@tarojs/components";
import Katex from "../../components/katex";
import "./index.less";

export default () => {
  const [latex, setLatex] = useState(
    "\\displaystyle \\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}} {1+\\frac{e^{-8\\pi}} {1+\\cdots} } } }"
  );
  const [input, setInput] = useState(latex);

  return (
    <View className="container">
      <View className="latex">
        <Katex latex={latex} />
      </View>
      <Textarea
        value={input}
        maxLength={1400}
        onInput={e => {
          setInput(e.target.value);
        }}
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
