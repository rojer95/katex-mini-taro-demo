import { useState } from "react";
import { View, Textarea, Button } from "@tarojs/components";
import Katex from "../../components/katex";
import "./index.less";

export default () => {
  const [latex, setLatex] = useState(`
  {{}_{ }^{ } \\int _{ }^{ }k \\text{d} x=kx+C}\\\\
  {{}_{ }^{ } \\int _{ }^{ }\\mathop{{x}}\\nolimits^{{ \\mu }} \\text{d} x=\\frac{{\\mathop{{x}}\\nolimits^{{ \\mu +1}}}}{{ \\mu +1}}+C,{ \\left( { \\mu  \\neq -1} \\right) }}\\\\
  {{}_{ }^{ } \\int _{ }^{ }\\frac{{1}}{{x}} \\text{d} x= \\text{ln} { \\left| {x} \\right| }+C}\\\\
  {{}_{ }^{ } \\int _{ }^{ }\\frac{{1}}{{1+\\mathop{{x}}\\nolimits^{{2}}}} \\text{d} x= \\text{arctan} x+C}\\\\
  {{}_{ }^{ } \\int _{ }^{ }\\frac{{1}}{{\\sqrt{{1-\\mathop{{x}}\\nolimits^{{2}}}}}} \\text{d} x= \\text{arcsin} x+C}\\\\
  {L=\\mathop{{L}}\\nolimits_{{1}}+\\mathop{{L}}\\nolimits_{{2}} \\Rightarrow \\mathop{ \\int }\\nolimits_{{L}}f{ \\left( {x,y} \\right) } \\text{d} s=\\mathop{ \\int }\\nolimits_{{\\mathop{{L}}\\nolimits_{{1}}}}f{ \\left( {x,y} \\right) } \\text{d} s+\\mathop{ \\int }\\nolimits_{{\\mathop{{L}}\\nolimits_{{2}}}}f{ \\left( {x,y} \\right) } \\text{d} s}\\\\
  {\\mathop{ \\iint }\\nolimits_{{L}}{ \\left[ { \\alpha f{ \\left( {x,y} \\right) }+ \\beta f{ \\left( {x,y} \\right) }} \\right] } \\text{d} s= \\alpha \\mathop{ \\iint }\\nolimits_{{L}}f{ \\left( {x,y} \\right) } \\text{d} s+ \\beta \\mathop{ \\iint }\\nolimits_{{L}}f{ \\left( {x,y} \\right) } \\text{d} s}\\\\
  {f{ \\left( {x,y} \\right) } \\le g{ \\left( {x,y} \\right) } \\Rightarrow \\mathop{ \\iint }\\nolimits_{{L}}f{ \\left( {x,y} \\right) } \\text{d} s \\le \\mathop{ \\iint }\\nolimits_{{L}}g{ \\left( {x,y} \\right) } \\text{d} s}\\\\
  { \\left| {\\mathop{ \\iint }\\nolimits_{{L}}f{ \\left( {x,y} \\right) } \\text{d} s} \\left|  \\le \\mathop{ \\iint }\\nolimits_{{L}}{ \\left| {f{ \\left( {x,y} \\right) }} \\right| } \\text{d} s\\right. \\right. }\\\\
  \\begin{matrix} 0 & 1 \\\\ 1 & 0 \\end{matrix}\\quad
  \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}\\\\
  \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\quad
  \\begin{Bmatrix} 1 & 0 \\\\ 0 & -1 \\end{Bmatrix}\\\\
  \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}\\quad
  \\begin{Vmatrix} i & 0 \\\\ 0 & -i \\end{Vmatrix}\\\\
  \\mathop{ \\int }\\nolimits_{{a}}^{{b}}f{ \\left( {x} \\right) } \\text{d} x=-\\mathop{ \\int }\\nolimits_{{b}}^{{a}}f{ \\left( {x} \\right) } \\text{d} x\\\\
  \\int_a^b f(x)\\,dx
  \\sum_{k=1}^n k^2 = \\frac{1}{2} n (n+1)
`);
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
