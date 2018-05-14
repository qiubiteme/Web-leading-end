## JavaScript Window - 浏览器对象模型

**浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器“对话”。**

### 浏览器对象模型 (BOM)

浏览器对象模型（Browser Object Model）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是 BOM 的方法和属性。

### Window 对象

所有浏览器都支持 *window* 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

```
window.document.getElementById("header");
```

与此相同：

```
document.getElementById("header");
```

### Window 尺寸

有三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

- window.innerHeight - 浏览器窗口的内部高度
- window.innerWidth - 浏览器窗口的内部宽度

对于 Internet Explorer 8、7、6、5：

- document.documentElement.clientHeight
- document.documentElement.clientWidth

或者

- document.body.clientHeight
- document.body.clientWidth

实用的 JavaScript 方案（涵盖所有浏览器）：

#### 实例

```
var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_window_innerwidth_innerheight)

该例显示浏览器窗口的高度和宽度：（不包括工具栏/滚动条）

### 其他 Window 方法

一些其他方法：

- window.open() - 打开新窗口
- window.close() - 关闭当前窗口
- window.moveTo() - 移动当前窗口
- window.resizeTo() - 调整当前窗口的尺寸









## JavaScript HTML DOM

**通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。**

### HTML DOM （文档对象模型）

当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

HTML DOM 模型被构造为对象的树。

### HTML DOM 树

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

### 查找 HTML 元素

通常，通过 JavaScript，您需要操作 HTML 元素。

为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：

- 通过 id 找到 HTML 元素
- 通过标签名找到 HTML 元素
- 通过类名找到 HTML 元素

### 通过 id 查找 HTML 元素

在 DOM 中查找 HTML 元素的最简单的方法，是通过使用元素的 id。

#### 实例

本例查找 id="intro" 元素：

```
<p id="intro">Hello World!</p>
<p>本例演示 <b>getElementById</b> 方法！</p>

<script>
    x = document.getElementById("intro");
    document.write('<p>id="intro" 的段落中的文本是：' + x.innerHTML + '</p>');
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_getelementbyid)

如果找到该元素，则该方法将以对象（在 x 中）的形式返回该元素。

如果未找到该元素，则 x 将包含 null。

### 通过标签名查找 HTML 元素

#### 实例

本例查找 id="main" 的元素，然后查找 "main" 中的所有 <p> 元素：

```
<p>Hello World!</p>

<div id="main">
    <p>The DOM is very useful.</p>
    <p>本例演示 <b>getElementsByTagName</b> 方法。</p>
</div>

<script>
    var x = document.getElementById("main");
    var y = x.getElementsByTagName("p");
    document.write('id 为 "main" 的 div 中的第一段文本是：' + y[0].innerHTML);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_getelementsbytagname)

提示：通过类名查找 HTML 元素在 IE 5,6,7,8 中无效。

## DOM - 改变 HTML

