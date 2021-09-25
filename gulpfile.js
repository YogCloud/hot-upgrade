const { task, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const dotenv = require('dotenv');
const fs = require('fs')


task('default', async function() {

    // 读取配置
    const env = (() => {
        const env1 = dotenv.parse(fs.readFileSync('.env'));
        const env2 = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`));
        return { ...env1, ...env2, ENV_VERSION: Math.floor(Date.now() / 1000) };
    })();

    console.log('打包环境');
    console.log(env);
    const pipe = src('src/*.js');
    pipe.pipe(uglify({ mangle: true, output: { comments: false } })); // 压缩JS
    Object.keys(env).forEach(key => {
        pipe.pipe(replace(key, `'${env[key]}'`)); // 替换变量
    });
    pipe.pipe(dest(env.ENV_OUTPUT)); // 输出路径
    console.log('打包完成');
})
