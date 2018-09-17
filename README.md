* `typings-for-css-modules-loader`插件解决ts文件中引入css找不到模块的问题
* `awesome-typescript-loader` 压缩更快,压缩信息中有alt提示，压缩生成d.ts文件
 * `ts-loader`加上`option transpileOnly true`加快编译速度
 * `typescript`中不能导入通过import方法css，ts不知道怎么去处理
 * 方法就是增加`d.ts`文件，这样的话就可以在ts文件中导入css了，而且ts会读取d.ts的静态检查