import { Component } from "react";
import "./app.less";
import { KatexProvider } from "./components/katex/Loader";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <KatexProvider>{this.props.children}</KatexProvider>;
  }
}

export default App;
