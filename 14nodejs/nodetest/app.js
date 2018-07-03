// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 用来处理url的,注意require('koa-router')返回的是函数:
const router = require('koa-router')();

//用于绑定ctx.request.body数据
const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
const fs = require('fs');

// 先导入fs模块，然后用readdirSync列出文件
// 这里可以用sync是因为启动时只运行一次，不存在性能问题:
// var files = fs.readdirSync(__dirname + '/controllers');

// // 过滤出.js文件:
// var js_files = files.filter((f) => {
//     return f.endsWith('.js');
// });

// // 处理每个js文件:
// for (var f of js_files) {
//     console.log(`process controller: ${f}...`);
//     // 导入js文件:
//     let mapping = require(__dirname + '/controllers/' + f);
//     for (var url in mapping) {
//         if (url.startsWith('GET ')) {
//             // 如果url类似"GET xxx":
//             var path = url.substring(4);
//             router.get(path, mapping[url]);
//             console.log(`register URL mapping: GET ${path}`);
//         } else if (url.startsWith('POST ')) {
//             // 如果url类似"POST xxx":
//             var path = url.substring(5);
//             router.post(path, mapping[url]);
//             console.log(`register URL mapping: POST ${path}`);
//         } else {
//             // 无效的URL:
//             console.log(`invalid URL: ${url}`);
//         }
//     }
// }
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

//添加控制器
addControllers(router);


//打印请求的url地址
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

//打印请求消耗时间
app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});


// add 用于绑定ctx.request.body数据,处理
app.use(bodyParser());

// add koa-router to middleware:添加koa-router路由中间件
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000... 访问 http://127.0.0.1:3000/ 查看内容');