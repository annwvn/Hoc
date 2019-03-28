# Hoc

>高阶组件什么时候返回一个组件 什么时候返回一个函数

```
当有两个组件时，返回函数，并且函数中接收组件，接收的组件是最外层的盒子，在组件中用this.props.children接收。
需要用装饰器

.babelrc里头写
```
```js
{
	"presets": [
      "react-app"
    ],
 	"plugins": [
 		["@babel/plugin-proposal-decorators",{"legacy": true}]
	]
}

下载 "@babel/plugin-proposal-decorators"
```
```
当只返回一个组件时，就返回组件。


```