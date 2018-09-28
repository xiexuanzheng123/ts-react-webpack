/**
 * 声明式编写UI
 * 1 使用Error Boundary处理错误组件，ComponentDidCatch
 *  Array(number):生成number个空元素数组
 *  Array.from(arrayLike[, mapFn[, thisArg]])
 * 组件具有某些状态时，使用类的方式是有用的，如果不需要绑定状态可以使用函数式组件
 * as HTMLElment称为类型断言
 * !结尾的语法，会从前面的表达式里移除null和undefined，
 * 
 * sunglasses：添加样式
 * 
 * enzyme是react生态系统里一个通用工具，jsdom库，允许我们模拟DOM以及在非浏览器环境下编写测试
 * enzyme包指的是包含了实际运行的JavaScript代码包，而@types/enzyme则包含了声明文件（.d.ts文件）的包，以便TypeScript能够了解该如何使用Enzyme
 * react-addons-test-util 使用enzyme所需要安装的包
 * 
 * https://stackoverflow.com/questions/39020022/angular-2-unit-tests-cannot-find-name-describe
 * 
 * 解决测试用例中describe和it找不到的情况 ^_^
 * 
 * start的时候会出来@types/node/index.d.ts中找不到Set的情况，改用tsloader就可以了
 * 
 * "no-parameter-properties": false,禁止给类的构造函数的参数添加修饰符
 * 
 * Mobx对Typescript完美支持
 * Mobx更加灵活简洁，效率更高
 *  
 * typings-for-css-modules-loader 这个插件去自动帮我从 CSS 文件提取生成一个 d.ts 文件
 * 
 * awesome-typescript-loader可以让webpack使用typescript的标准文件tsconfig.json编译typescript代码。
 * source-map-loader使用typescript输出的sourcemap文件来告诉webpack何时生成自己的sourcemap
 */