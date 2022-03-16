import { useState } from "react";
import { View, Textarea, Button } from "@tarojs/components";
import Katex from "../../components/katex-api";
import "./index.less";

const katexOption = {
  displayMode: true,
  throwOnError: false
};

export default () => {
  const [latex, setLatex] = useState(`
  {{}_{ }^{ } \\int _{ }^{ }k \\text{d} x=kx+C}
`);
  const [input, setInput] = useState(latex);

  return (
    <View className="page">
      <View className="container">
        <View className="latex">
          <Katex latex={latex} option={katexOption} />
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

      <View>以下是一道题目：</View>
      <View>
        <View>
          <View className="inline">
            <Katex option={katexOption} latex="a, b, c" />
          </View>
          是三个互不相同的实数，证明：
          <View className="inline">
            <Katex
              option={katexOption}
              latex="\left(\frac{a+b}{a-b}\right)^2+\left(\frac{b+c}{b-c}\right)^2+\left(\frac{c+a}{c-a}\right)^2\ge 2"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
