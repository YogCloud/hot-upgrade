(function() {
    const lib = ENV_H5_DOMAIN;
    const ver = ENV_VERSION;
    const css = [
        // { res: lib + '/libs/h5.css' }, // H5核心样式
        // { res: lib + '/libs/vant.css' }, // Vant组件样式
    ];
    const jss = [
        { res: lib + '/libs/config.js', async: false }, // 配置JS
        // { res: lib + '/libs/sdk.js', async: false }, // 核心SDK
        // { res: lib + '/libs/polyfill.js', async: false }, // 兼容JS库
        // { res: lib + '/libs/trace.js', async: true }, // 监控JS
    ];
    let script = '';
    css.forEach(item => {
        script += `<link rel="stylesheet" type="text/css" href="${item.res}?v=${ver}">`
    });
    jss.forEach(item => {
        script += `<script type="text/javascript" src="${item.res}?v=${ver}" async="${async}"></script>`
    });
    document.write(script);
})();