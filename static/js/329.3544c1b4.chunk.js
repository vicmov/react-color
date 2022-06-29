"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[329],{6329:function(n,o,t){t.r(o),o.default={components:{},data:{},source:"React Color Compact\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact)](https://bundlephobia.com/package/@uiw/react-color-compact) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)\n\nCompact Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n[![react-color-compact](https://user-images.githubusercontent.com/1680273/125949911-bb919f60-2bf3-487b-9aad-5aef82bcd5ed.png)](https://uiwjs.github.io/react-color/#/compact)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-compact\n```\n\n## Usage\n\n```js\nimport Compact from '@uiw/react-color-compact';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  return (\n    <Compact\n      color={hex}\n      onChange={(color) => {\n        setHex(color.hex);\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport React from 'react';\nimport { ColorResult, HsvaColor } from '@uiw/color-convert';\nexport interface CompactProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  color?: string | HsvaColor;\n  colors?: string[];\n  onChange?: (color: ColorResult, evn?: T) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}}]);
//# sourceMappingURL=329.3544c1b4.chunk.js.map