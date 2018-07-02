// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 用来处理url的,注意require('koa-router')返回的是函数:
const router = require('koa-router')();

//用于绑定ctx.request.body数据
const bodyParser = require('koa-bodyparser');

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

//默认的get请求
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="提交"></p>
        </form>`;
});

//接收post请求
router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    //测试提交账号密码
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

// add 用于绑定ctx.request.body数据,处理
app.use(bodyParser());

// add koa-router to middleware:添加koa-router路由中间件
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000... 访问 http://127.0.0.1:3000/ 查看内容');