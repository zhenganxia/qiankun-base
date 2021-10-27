### 参考地址：https://qiankun.umijs.org/zh/guide/tutorial#react-%E5%BE%AE%E5%BA%94%E7%94%A8

### 启动
#### 1、启动主应用和所有子应用
外层下载npm-run-all安装包
外层package.json-修改
```js
  "scripts": {
    "all:install": "npm-run-all --serial install:*",
    "all:start": "npm-run-all --parallel start:*",
    "install:main": "cd ./main && yarn",
    "install:sub-vue": "cd ./sub-vue && yarn",
    "install:sub-react": "cd ./sub-react && yarn",
    "start:main": "cd ./main && yarn start",
    "start:sub-vue": "cd ./sub-vue && yarn start",
    "start:sub-react": "cd ./sub-react && yarn start"
  }
  注意：需要修改各个应用启动方式为start

  vue应用：
  "scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },

  react应用：需要安装 npm i -D @rescripts/cli 后修改
  "scripts": {
    "start": "rescripts start",
    "build": "rescripts build",
    "test": "rescripts test"
  },
   
```
#### 2、单独启用主应用和子应用
进入应用路径启动

