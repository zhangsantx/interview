## 一、vue 脚手架 rem 适配配置

1. 初始化脚手架

   ```bash
   vue create my-app
   ```

2. 安装依赖

   ```bash
   npm i postcss-px2rem -D
   ```

3. 根目录下建立 `vue.config.js` 文件，内容如下

   ```js
   var px2rem = require('postcss-px2rem')

   module.exports = {
     css: {
       loaderOptions: {
         postcss: {
           plugins: [px2rem({ remUnit: 375 / 10 })] // 375 设计稿宽度
         }
       }
     }
   }
   ```

4. `src/utils/` 目录下创建 `rem.js 或 adapter.js` (响应式判断设备大小，设置不同的根字体大小)，内容如下

   ```js
   function adapter() {
     const dip = document.documentElement.clientWidth
     const rootFontSize = dip / 10
     document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()

   window.onresize = adapter
   ```

5. 在 `scr/index.js` 入口文件中直接引入执行 `rem.js 或 adapter.js`

   ```js
   import '@/utils/rem.js'
   // 或
   import '@/utils/adapter.js'

   // @为src目录
   ```

6. 最后，重新启动项目

   ```bash
   npm run serve
   ```

## 二、react 脚手架 rem 适配配置

1. 初始化脚手架

   ```bash
   create-react-app my-app
   ```

2. 安装依赖

   ```bash
   yarn add postcss-px2rem customize-cra react-app-rewired react-app-rewire-postcss
   ```

3. 在根目录下创建 `config.overrides.js` ，内容如下

   ```js
   const { override } = require('customize-cra')
   const rewirePostcss = require('react-app-rewire-postcss')
   module.exports = override((config, env) => {
     rewirePostcss(config, {
       plugins: () => [
         require('postcss-px2rem')({
           // 375 设计稿宽度
           remUnit: 375 / 10,
           exclude: /node-modules/i
         })
       ]
     })
     return config
   })
   ```

4. 更改 `package.json` 中的启动命令

   ```json
   "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-scripts eject"
   }
   ```

5. `src/utils/` 目录下创建 ` rem.js 或 adapter.js` (响应式判断设备大小，设置不同的根字体大小)，内容如下

   ```js
   function adapter() {
     const dip = document.documentElement.clientWidth
     const rootFontSize = dip / 10
     document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()

   window.onresize = adapter
   ```

6. 在 `scr/index.js` 入口文件中直接引入执行 `rem.js 或 adapter.js`

   ```js
   import './utils/rem.js'
   // 或
   import './utils/adapter.js'
   ```

7. 最后，重新启动项目

   ```bash
   yarn start
   ```

注意：上述方法中的 `rem.js 或 adapter.js` 可以使用 `lib-flexible` 代替

1.安装`flexible`

```bash
npm i amfe-flexible -D
```

2.在 `index.js` 入口文件中直接引入执行

```js
import 'amfe-flexible'
```
