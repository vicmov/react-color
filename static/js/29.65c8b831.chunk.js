(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[29],{423:function(n,o,e){"use strict";e.r(o),o.default="React Color Block\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-block)](https://bundlephobia.com/package/@uiw/react-color-block) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-block.svg)](https://www.npmjs.com/package/@uiw/react-color-block) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-block/file/README.md)\n\nBlock is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n![react-color-block](https://user-images.githubusercontent.com/1680273/125902022-0b18f481-2931-441e-b854-79b924b6c190.png)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-block\n```\n\n## Usage\n\n```js\nimport Block from '@uiw/react-color-block';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  return (\n    <Block\n      color={hex}\n      onChange={(color) => {\n        setHex(color.hex);\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport { HsvaColor, ColorResult } from '@uiw/color-convert';\n\ninterface BlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  color?: string | HsvaColor;\n  colors?: string[];\n  onChange?: (color: ColorResult) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=29.65c8b831.chunk.js.map