(function(){
    let css = [ // 按顺序加载CSS
        'libs/css/h5.css?v=1.1.1',
        'libs/css/vant.css?v=1.2.2',
    ];
    let js = [ // 按顺序加载JS
        'libs/config.js?v=1.1.2',
        'libs/js/core.js?v=1.1.1',
        'libs/js/polyfill.js?v=1.2.1',
        'libs/js/trace.js?v=1.3.3' + Math.random(),
    ]
    let loading = '';
    for (let i = 0; i < css.length; i ++) {
        loading += '<link rel="stylesheet" type="text/css" href="' + css[i] + '">';
    }
    for (let i = 0; i < js.length; i ++) {
        loading += '<script type="text/javascript" src="' + js[i] + '"><\/script>';
    }
    console.log('加载 前端加载, 通过JS读取最新版本的模式动态刷新公共组件库')
    document.write(loading);
})();