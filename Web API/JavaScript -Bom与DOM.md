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

### 实例

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

### 实例

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

### 实例

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

**HTML DOM 允许 JavaScript 改变 HTML 元素的内容。**

### 改变 HTML 输出流

JavaScript 能够创建动态的 HTML 内容：

**今天的日期是：** Tue May 15 2018 00:05:19 GMT+0800 (中国标准时间)

在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。

### 实例

```
<!DOCTYPE html>
<html>
<body>

<script>
document.write(Date());
</script>

</body>
</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_change_html_output_stream)

提示：绝不要使用在文档加载之后使用 document.write()。这会覆盖该文档。

## 改变 HTML 内容

修改 HTML 内容的最简单的方法时使用 innerHTML 属性。

如需改变 HTML 元素的内容，请使用这个语法：

```
document.getElementById(id).innerHTML=new HTML
```

### 实例

本例改变了 <p> 元素的内容：

```
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML="New text!";
</script>

</body>
</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_change_html_innerhtml)

### 实例

本例改变了 <h1> 元素的内容：

```
<!DOCTYPE html>
<html>
<body>

<h1 id="header">Old Header</h1>

<script>
var element=document.getElementById("header");
element.innerHTML="New Header";
</script>

</body>
</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_change_html_innerhtml2)

例子解释：

- 上面的 HTML 文档含有 id="header" 的 <h1> 元素
- 我们使用 HTML DOM 来获得 id="header" 的元素
- JavaScript 更改此元素的内容 (innerHTML)

## 改变 HTML 属性

如需改变 HTML 元素的属性，请使用这个语法：

```
document.getElementById(id).attribute=new value
```

### 实例

本例改变了 <img> 元素的 src 属性：

```
<!DOCTYPE html>
<html>
<body>

<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src="landscape.jpg";
</script>

</body>
</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_change_html_attribute)

例子解释：

- 上面的 HTML 文档含有 id="image" 的 <img> 元素
- 我们使用 HTML DOM 来获得 id="image" 的元素
- JavaScript 更改此元素的属性（把 "smiley.gif" 改为 "landscape.jpg"）



## DOM - 改变 CSS

**HTML DOM 允许 JavaScript 改变 HTML 元素的样式。**

### 改变 HTML 样式

如需改变 HTML 元素的样式，请使用这个语法：

```
document.getElementById(id).style.property=new style
```

### 例子 1

下面的例子会改变 <p> 元素的样式：

```
<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color="blue";
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_change_style)

### 例子 2

本例改变了 id="id1" 的 HTML 元素的样式，当用户点击按钮时：

```
<h1 id="id1">My Heading 1</h1>

<button type="button" onclick="document.getElementById('id1').style.color='red'">
点击这里
</button>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_change_style2)

### 更多实例

- [Visibility](http://www.w3school.com.cn/tiy/t.asp?f=js_change_style_visibility)

  如何使元素不可见。您希望元素显示或消失吗？

### HTML DOM Style 对象参考手册

如需完整的 HTML DOM Style 对象属性，请参阅我们的 [HTML DOM Style 对象参考手册](http://www.w3school.com.cn/jsref/dom_obj_style.asp)。

## DOM 事件





**HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。**

### 实例

把鼠标移到上面

点击这里

### 对事件做出反应

我们可以在事件发生时执行 JavaScript，比如当用户在 HTML 元素上点击时。

如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：

```
onclick=JavaScript
```

HTML 事件的例子：

- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交 HTML 表单时
- 当用户触发按键时

### 例子 1

在本例中，当用户在 <h1> 元素上点击时，会改变其内容：

```
<h1 onclick="this.innerHTML='谢谢!'">请点击该文本</h1>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onclick1)

### 例子 2

本例从事件处理器调用一个函数：

```
<!DOCTYPE html>
<html>
<head>
    <script>
        function changetext(id) {
            id.innerHTML = "谢谢!";
        }
    </script>
</head>
<body>

<h1 onclick="changetext(this)">请点击该文本</h1>

</body>
</html>

```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onclick2)

## HTML 事件属性

如需向 HTML 元素分配 事件，您可以使用事件属性。

### 实例

向 button 元素分配 onclick 事件：

```
<p>点击按钮就可以执行 <em>displayDate()</em> 函数。</p>

<button onclick="displayDate()">点击这里</button>

<script>
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onclick3)

在上面的例子中，名为 displayDate 的函数将在按钮被点击时执行。

### 使用 HTML DOM 来分配事件

HTML DOM 允许您通过使用 JavaScript 来向 HTML 元素分配事件：

### 实例

向 button 元素分配 onclick 事件：

```
<p>点击按钮就可以执行 <em>displayDate()</em> 函数。</p>
<button id="myBtn">点击这里</button>
<script>
    document.getElementById("myBtn").onclick = function () {
        displayDate()
    };
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
</script>
<p id="demo"></p>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onclick4)

在上面的例子中，名为 displayDate 的函数被分配给 id=myButn" 的 HTML 元素。

当按钮被点击时，会执行该函数。

## onload 和 onunload 事件

onload 和 onunload 事件会在用户进入或离开页面时被触发。

onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。

onload 和 onunload 事件可用于处理 cookie。

### 实例

```
<body onload="checkCookies()">
<script>
    function checkCookies() {
        if (navigator.cookieEnabled == true) {
            alert("已启用 cookie")
        }
        else {
            alert("未启用 cookie")
        }
    }
</script>
<p>提示框会告诉你，浏览器是否已启用 cookie。</p>
</body>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onload_onunload)

### onchange 事件

onchange 事件常结合对输入字段的验证来使用。

下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。

### 实例

```
<input type="text" id="fname" onchange="upperCase()">
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onchange)

## onmouseover 和 onmouseout 事件

onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

### 实例

一个简单的 onmouseover-onmouseout 实例：

把鼠标移到上面

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onmouseover_onmouseout)

## onmousedown、onmouseup 以及 onclick 事件

onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。

### 实例

一个简单的 onmousedown-onmouseup 实例：

请点击这里

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onmousedown_onmouseup)

### 更多实例

- [onmousedown 和 onmouseup](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onmousedown_onmouseup2)

  当用户按下鼠标按钮时，更换一幅图像。

- [onload](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onload2)

  当页面完成加载时，显示一个提示框。

- [onfocus](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onfocus)

  当输入字段获得焦点时，改变其背景色。

- [鼠标事件](http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onmouse)

  当指针移动到元素上方时，改变其颜色；当指针移出文本后，会再次改变其颜色。

## HTML DOM Event 对象参考手册

如需所有 HTML DOM 事件的完整列表，请参阅 W3School 提供的 [HTML DOM Event 对象参考手册](http://www.w3school.com.cn/jsref/dom_obj_event.asp)。