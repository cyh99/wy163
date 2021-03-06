## 实现网站
网易严选

## 页面需求
- 首页
- 商品详情页
- 购物车页
- 登录页
- 注册页
- 每个页面都需要有交互
  
## 技术栈
* 使用 gulp 打包代码
* 使用 git 上传代码
* 使用 sass 书写样式
* 使用接口拿到数据并数据
  
## 关于登录
由于自己不会写后端代码，无法操作数据库，所以将登录账号密码存储在本地自己写的 account.json 文件中，登录之前有正则验证，符合基本规则之后使用 ajax 拿到 account.json 中写好的账号密码进行匹配，若匹配成功则自动跳转到首页。

## 关于注册
前端如果不会使用 node.js 的话也是无法操作 json 文件的，所以用户注册账号时，也会从以有的 account.json 账号中拿到数据，进行账号匹配，若有相同的账号，则返回账号已存在，请重新输入，若没有匹配相同的账号，则直接跳转到登录页。

## 关于登录注册写法
使用 json 文件的弊端也是很明显的，就是无法注册成功写入账号密码，所以这个版块其实也可以用 cookie,localstorage 来进行本地存储，但是同样也有一个问题：换设备了，清除缓存了，同样的会丢失数据