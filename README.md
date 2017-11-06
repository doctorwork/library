### 功能组件包开发基础模板


##### 开发

- 当前目录执行 npm run dev
- 项目目录 package.json 中 手动添加当前组件包名称和版本

##### 发布/使用

- 内部项目直接发到gitlab中，外部项目通过 npm publish 发布
- 内部项目的使用可以通过 npm install (git-url#1.0.0) 的形式安装, 参见 [https://docs.npmjs.com/files/package.json#git-urls-as-dependencies]，注意提供版本号，否则默认使用master 分支上的代码。（建议设定版本号，以适应需要多个版本同时使用的情况）

##### 发布 library 版本 （bower）

