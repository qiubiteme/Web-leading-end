const fs = require('fs');

/*添加映射
*/
function addMapping(router, mapping) {
    for (var url in mapping) {
        // 如果url类似"GET xxx":
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`注册URL映射: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`注册URL映射: POST ${path}`);
        } else {
            console.log(`无效的 URL: ${url}`);
        }
    }
}

/*添加控制器目录里js模块*/
function addControllers(router) {
    //指定目录只读取一次,读取目录里的所有文件存储在数组
    var files = fs.readdirSync(__dirname + '/controllers');

    //过滤数组中的其他文件,只保留js文件
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });
    for (var f of js_files) {
        console.log(`添加处理的控制器模块: ${f}...`);
        //导入控制器中的js模块
        let mapping = require(__dirname + '/controllers/' + f);
        //添加映射
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};