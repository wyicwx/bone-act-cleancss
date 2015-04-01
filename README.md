# bone-act-cleancss
> bone的css压缩器处理器

### 安装及使用

通过npm安装

```sh
$ npm install bone-act-cleancss 
```

安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var cleancss = require('bone-act-cleancss');

bone.dest('dist')
	.src('~/src/css/*.css')
	.act(cleancss);
```

bone-act-cleancss是将clean-css编译器包装成bone可用的处理器，参数查询请参考[less](https://github.com/jakubpawlowicz/clean-css)

### 其他

处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)
