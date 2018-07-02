// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

// 创建一个Koa对象表示web app本身:
const app = new Koa();

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



// 带参数的请求
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

//默认请求处理
router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add koa-router to middleware:添加koa-router路由中间件
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000... 访问 http://127.0.0.1:3000/ 查看内容');