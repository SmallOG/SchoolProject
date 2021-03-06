This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 项目运行
```
  npm start
```
### 项目打包
```
  npm run build
```
### 项目访问
```
  http://localhost:3000/index
```
### 项目目录说明
```
   rect-multi-page
         
         |--config
         |--node_modules
         |--public
         |--scripts             
         |--src
             |--setupProxt.js                               服务器代理配置(解决开发跨域)
             |--component                                   公共组件存放目录
                 |--header                                  项目公共头部组件
             |--root                                        多入口目录
                 |--admin                                   入口一
                     |--comomon                             入口一公共组件
                          |--header                         头部组件
                              |--store                      专属头部组件的数据层
                                  |--ationCreators.js       页面actoin，以及请求存放点
                                  |--constants.js           页面派发type类型，以及页面专属变量字段
                                  |--index.js               header store的中心管理层，链接最外层的store
                                  |--reducer.js             页面action数据修改
                                  
                     |--store
                         |--index.js                        挂载到thunk中间件，连接每一个页面以及组件，挂在store中
                         |--reducer.js                      处理页面      
                     |--App.css                             组件样式
                     |--App.js                              组件入口
                     |--index.htm                           挂载模板
                     |--index.js                            全局入口
                 |--index                                   入口二
                     |--common                              公共组件
                     |--pages                               页面
                     |--router                              路由模块
                     |--store                               数据层 
                          |--index.js                       连接子组件以及页面的数据层
                          |--reducer.js                     处理页面数据层
                     |--App.css                             组件样式
                     |--App.js                              组件入口
                     |--index.htm                           挂载模板
                     |--index.js                            全局入口
                 |--user                                    入口三
                     |--App.module.css                      局部组件样式（不会覆盖全局样式）
                     |--App.js                              组件入口
                     |--index.htm                           挂载模板
                     |--index.js                            全局入口
             |--static                                      静态文件存放目录
                 |--reset                                   初始化样式 
                 |--base                                    全局样式控制        
         
         
```
### git地址
```
 https://github.com/luoxiapeng/react-multi-page
```

