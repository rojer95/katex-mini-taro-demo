import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Katex from "../../components/katex";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Katex latex={`c = \\pm\\sqrt{a^2 + b^2}`} />
        <Katex latex={`a=b^2`} />
        <Katex
          latex={`\\displaystyle \\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}} {1+\\frac{e^{-8\\pi}} {1+\\cdots} } } }`}
        />
        <Text>Hello world!</Text>
      </View>
    );
  }
}
