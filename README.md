# hot-upgrade 前端公共加载插件

> 前端项目公共加载插件，一个能够让你快速的构建统一热加载的项目，方便你管理几百个前端项目不眨一下眼睛。

### 引入方式

- 电脑端（浏览器只缓存一分钟统一加载类）

```html
<script type="text/javascript">
document.write('<script type="text/javascript" src="/libs/pc.js?v=' + parseInt((new Date).getTime() / 60000) + '"><\/script>');
</script>
```

- 手机端（浏览器只缓存一分钟统一加载类）

```html
<script type="text/javascript">
document.write('<script type="text/javascript" src="/libs/h5.js?v=' + parseInt((new Date).getTime() / 60000) + '"><\/script>');
</script>
```

## 联系作者

@程序猿微信：h6play
