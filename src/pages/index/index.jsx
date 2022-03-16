import Taro from "@tarojs/taro";
import { Button, View } from "@tarojs/components";
import "./index.less";

export default () => {
  return (
    <View>
      <Button
        className="btn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/katex/index"
          });
        }}
      >
        原生渲染Latex
      </Button>
      <Button
        className="btn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/katex-api/index"
          });
        }}
      >
        API渲染Latex
      </Button>
    </View>
  );
};
