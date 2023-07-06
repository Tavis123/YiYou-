# yiyou

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# 一、项目署名

易游--二手游戏交易平台

成员：美术谢晨怡：UI设计

​         前端张凯权

  仓库地址：https://github.com/Tavis123/YiYou-

  UI链接：https://www.figma.com/file/CXZaUnb8Nna0t0Pcvx0ls3/%E6%98%93%E6%B8%B8?type=design&node-id=65%3A379&t=ePHpLGQXcZfzBQem-1

# 二、项目的背景

本文档旨在描述交易兔二手游戏账号交易平台的产品需求。该平台将提供让用户可以买卖游戏账号、物品和货币的服务。该平台必须具备用户注册与登录、发布商品信息、购买商品、支付和结算及安全保障等基本功能。

# 三、项目部署

暂未部署到服务器

需要准备打包好的前端代码（dist包）或者是一个html文件。购买阿里云服务器并连接，为服务器安装ngnix开启web服务。使用xshell和sftp将自己的前端代码放到服务器上。也可以使用自己的电脑做服务器，下载web服务器软件，然后在自己的电脑里设置一个文件夹，放网页，把自己电脑的IP给别人访问。上传项目dist文件包，部署成功后，浏览器输入服务器地址便可访问。

# 四、项目的运行环境

1. 操作系统兼容性：易游系统能够在不同操作系统中正常运行，如Windows、macOS、Linux等。
2. 浏览器兼容性：易游系统能够在不同的浏览器中正常运行，如Chrome、Firefox、Safari、Edge等。

# 五、项目技术栈

## 1.开发工具IDE

- Vscode

## 2.前端框架

- Vue2 主框架
- vue-router 路由跳转的官方插件
- axios 负责HTTP请求的插件
- Browserify打包

## 3.项目开发工具 

- vue-cli 快速搭建`Vue`工程的官方脚手架
- less `css`预处理器
- Apipost 测试调试`API`接口的工具
- vue-devtools `Vue`项目官方调试工具

## 4.UI框架

- Figma
- [Element](https://link.juejin.cn/?target=https%3A%2F%2Felement.eleme.cn%2F%23%2F) 饿了么前端团队开发

## 5.部署环境

- github 代码托管仓库https://github.com/Tavis123/YiYou-

暂未部署............

# 六、项目目录树

│  App.vue

│  main.js

│  tree.txt

│  

├─assets

│  │  logo.png

│  │  

│  ├─font

│  │      font.css

│  │      MicrosoftYaHei.ttf

│  │      msyh.ttc

│  │      

│  ├─image

│  │      avatar.png    //部分图片，未传到服务器

│  │      

│  └─style

│          bootstrap.css

│          global.css

│          index.css

│          mixin.less

│          reset.css

│          variable.less

│          

├─components

│      asiderByPersonal.vue    //个人中心左侧边导航栏

│      bbutton.vue                 //按钮组件

│      header.vue                   //头部导航栏组件

│      inputsearch.vue            //搜索框组件

│      pagination.vue              //分页器组件

│      personalData.vue          //个人信息card展示组件

│      

├─icons

│  │  index.js

│  │  index.vue

│  │  

│  └─svg

│          login.svg

│          

├─router

│      index.js

│      

├─utils

│      getTime.js         //时间函数的封装

│      goods.js            //商城接口封装

│      request.js          //总接口的封装

│      

└─views

​    │  Home.vue

​    │  Homepage.vue                    //主页 首页的view

​    │  shoppingCentre.vue             //主页 商城的view

​    │  

​    ├─contactUs                           //主页 联系我们的view

​    │      afterContactUs.vue

​    │      beforeContactUs.vue

​    │      contactUs.vue

​    │      

​    ├─Login                                  //登陆注册的view

​    │      codeLogin.vue                  //验证码登录

​    │      forgetPassword.vue           //忘记密码界面

​    │      Login.vue                         //主页面

​    │      passwordLogin.vue            //密码登录

​    │      register.vue                       //注册页面

​    │      

​    ├─personalCenter                      //个人中心的view

​    │      bidOrders.vue                    //出价订单 页面

​    │      contactCustomerService.vue//联系客服 页面

​    │      editPersonalData.vue          //编辑个人资料 页面

​    │      myCollection.vue                //我的收藏 页面

​    │      myMessage.vue                  //我的消息页面

​    │      myPosting.vue                    //我的发布 页面

​    │      personalCenter.vue              //主页面

​    │      personalHomepage.vue        //首页

​    │      postGoods.vue                    //发布商品 页面

​    │      Purchased.vue                    //已购买商品 页面

​    │      safeGuide.vue                     //安全指南 页面

​    │      shippingAddress.vue            //收货地址 页面

​    │      Sold.vue                             //已售出商品 页面

​    │      storeManagement.vue          //店铺管理页面

​    │      

​    └─shoopingCentre                        //商城的view

​            goodsDetails.vue                  //商品详细信息 页面

​            shoppingCentreHomepage.vue//商城主页

# 七、未解决的问题

几乎要求均未完成......呜呜呜呜wwwwwww

# 八、当前进度

静态页面已实现....................接了.........几个口，具体功能未实现

# 九、项目组件剖析

## 1.分页components/pagination.vue（没用到）

当鼠标点击分页的数字按钮时，整个分页条会做相应的动态切换。当总页数超过一定的数值后，或者页面切换到某一个范围时会出现相应的省略号代替隐藏的页码数字展示

1. 第一个省略号出现在最大页数前面时
2. 分页条出现两个省略号时
3. 省略号出现在最小页数后面时
4. 分页器总页码小于默认展示的页码个数（分页条没有出现省略号）

图片放不上去..................................................

## 2.没东西能介绍了