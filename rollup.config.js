const json = require('@rollup/plugin-json'); // 允许从json中导入数据
const typescript = require('@rollup/plugin-typescript'); // 支持ts
const resolve = require('@rollup/plugin-node-resolve'); // 便于引入第三方包 比如 const _ = require( 'lodash-es'
const commonjs = require('@rollup/plugin-commonjs'); // 处理commonjs
const terser = require('@rollup/plugin-terser'); // 压缩文件

const { version, author } = require('./package.json');

const banner =
  `${'/*!\n' + ' * '}utils.js v${version}\n` +
  ` * (c) 2024-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`;

module.exports = {
  input: 'src/utils.ts',
  output: [
    // cjs and esm version
    {
      file: `dist/utils.cjs.js`,
      format: 'cjs',
      banner: banner,
    },
    {
      file: `dist/utils.esm.js`,
      format: 'es',
      banner,
    },
    // min.js
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()],
    },
  ],
  plugins: [json(), resolve(), commonjs(), typescript({ module: 'ESNext' })],
};
