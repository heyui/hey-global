# hey-global
javascript全局变量控制


## 安装

``` shell
npm install --save hey-global
```

## Js引用

直接使用script标签引用js文件，可以通过github下载，引用build/global.js文件

使用的时候，直接引用G变量

``` javascript
G.set('GENDER', {
  1: '先生',
  2: '女士',
})
```

## webpack配置建议
一般使用hey-global的时候，我们建议定义成全局变量G，如果你使用的是webpack，可以做如下配置：
``` javascript
new webpack.ProvidePlugin({
  G: 'hey-global'
});
```

## 方法

### set(name, value) 存储变量

``` javascript
import G from 'hey-global';
// 如果是js直接引用的话，直接引用G变量
// 或者直接配置webpack全局变量，则无需引用

G.set('GENDER', {
  1: '先生',
  2: '女士',
})

// 存储用户信息
G.set('Account', {});
// 存储用户权限
G.set('Admin', true);
// 存储环境变量
G.set('env', {
  fileOs: 'http://www.download.com',
  socketOs: 'ws://www.socket.com',
});

```

### get(name) 获取变量

``` javascript

const gender = G.get('GENDER')
// {
//   1: '先生',
//   2: '女士',
// }

// 获取用户信息
const account = G.get('Account');
// {}

// 获取用户权限
const isAdmin = G.get('Admin');
// true

// 获取环境变量
const env = G.get('env');

// {
//   fileOs: 'http://www.download.com',
//   socketOs: 'ws://www.socket.com',
// }

```

### addlistener(name, func)  添加全局监听
``` javascript
let todoTrigger = G.addlistener('NEW_TODO', (data)=>{
  console.log(`new todo: ${date.message}`)
});

```

### trigger(name, param) 触发监听事件
``` javascript
G.trigger('NEW_TODO', {message: 'go home'});
// new todo: go home
```

### removelistener(id) 删除监听事件
当无需处理的时候，可以通过removelistener删除监听
``` javascript
G.removelistener(todoTrigger);
```

