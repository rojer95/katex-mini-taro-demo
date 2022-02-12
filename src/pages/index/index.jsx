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
        KaTeX渲染Demo
      </Button>
    </View>
  );
};
