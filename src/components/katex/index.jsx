import { useCallback, useEffect, useState } from "react";
import { RichText } from "@tarojs/components";
import katex from "katex";
import utils from "./utils";

import "./index.less";

const svg2base64 = svg => {
  const txt = svg
    .replace(
      "<svg",
      ~svg.indexOf("xmlns") ? "<svg" : '<svg xmlns="http://www.w3.org/2000/svg"'
    )

    //
    //   Encode (may need a few extra replacements)
    //
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/{/g, "%7B")
    .replace(/}/g, "%7D")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")

    .replace(/\s+/g, " ");
  //
  //    The maybe list (add on documented fail)
  //
  //  .replace(/&/g, '%26')
  //  .replace('|', '%7C')
  //  .replace('[', '%5B')
  //  .replace(']', '%5D')
  //  .replace('^', '%5E')
  //  .replace('`', '%60')
  //  .replace(';', '%3B')
  //  .replace('?', '%3F')
  //  .replace(':', '%3A')
  //  .replace('@', '%40')
  //  .replace('=', '%3D')

  return "data:image/svg+xml," + txt;
};

const katex2richnode = (type, dom, children) => {
  let needsSpan = false;
  if (dom.classes && dom.classes.length > 0) needsSpan = true;

  const classes = utils.escape(createClass(dom.classes));
  let styles = "";

  if (type === "text") {
    if (dom.italic > 0) {
      styles += "margin-right:" + dom.italic + "em;";
    }
  }

  // Add the styles, after hyphenation
  for (const style in dom.style) {
    if (dom.style.hasOwnProperty(style)) {
      styles += `${utils.hyphenate(style)}:${dom.style[style]};`;
    }
  }

  if (styles) {
    needsSpan = true;
  }

  const attrs = {};
  for (const attr in dom.attributes) {
    if (dom.attributes.hasOwnProperty(attr)) {
      attrs[attr] = utils.escape(dom.attributes[attr]);
    }
  }

  if (type === "span") {
    return {
      name: "span",
      attrs: {
        class: classes + " katex-span",
        style: styles
      },
      children
    };
  }

  if (type === "text") {
    const escaped = utils.escape(dom.text);
    if (needsSpan) {
      return {
        name: "span",
        attrs: {
          class: classes,
          style: styles
        },
        children: [
          {
            type: "text",
            text: escaped
          }
        ]
      };
    } else {
      return {
        type: "text",
        text: escaped
      };
    }
  }

  if (type === "svg") {
    const svg = dom.toMarkup();
    return {
      name: "img",
      attrs: {
        src: svg2base64(svg),
        class: "katex-svg"
      }
    };
  }

  return null;
};

/**
 * Create an HTML className based on a list of classes. In addition to joining
 * with spaces, we also remove empty classes.
 */
export const createClass = function(classes) {
  return classes?.filter(cls => cls).join(" ") ?? "";
};

export default ({ latex }) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    try {
      const tree = katex.__renderToHTMLTree(latex, {
        output: "html"
      });

      const treeNode = toMarkup([tree]);
      setNodes(treeNode);
    } catch (error) {
      console.log(error.message);
      setNodes([
        {
          name: "span",
          attrs: {
            style: "color:red;"
          },
          children: [{ type: "text", text: error.message }]
        }
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latex]);

  const toMarkup = useCallback(doms => {
    return doms.map(dom => {
      let type;
      if (dom instanceof katex.__domTree.Span) type = "span";
      if (dom instanceof katex.__domTree.Anchor) type = "anchor";
      if (dom instanceof katex.__domTree.LineNode) type = "line";
      if (dom instanceof katex.__domTree.PathNode) type = "path";
      if (dom instanceof katex.__domTree.SvgNode) type = "svg";
      if (dom instanceof katex.__domTree.SymbolNode) type = "text";

      return katex2richnode(
        type,
        dom,
        dom.children && dom.children.length > 0 ? toMarkup(dom.children) : null
      );
    });
  }, []);

  //   const TaroDom = useMemo(() => {
  //     return toMarkup(domTree);
  //   }, [domTree, toMarkup]);

  return <RichText nodes={nodes} />;
};
