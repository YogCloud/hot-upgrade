(() => {
    const lib = ENV_ENV_PC_DMOAIN;
    const css = [
        // {res: lib + '/libs/pc.css'},
        // {res: lib + '/libs/element-ui.css'},
    ];
    const jss = [
        { res: lib + '/libs/config.js', async: false }, // 配置JS
        // {res: lib + '/libs/sdk.js', async: false}, // 核心SDK
        // {res: lib + '/libs/polyfill.js', async: false}, // 兼容JS库
        // {res: lib + '/libs/trace.js', async: true}, // 监控JS
    ];
    let script = '';
    css.forEach(item => {
        script += `<link rel="stylesheet" type="text/css" href="${item.res}?v=${ENV_VERSION}">`
    });
    jss.forEach(item => {
        script += `<script type="text/javascript" src="${item.res}?v=${ENV_VERSION}" async="${async}"></script>`
    });
    document.write(script);
})();