
# HTML DOM

# DOM 教程

HTML DOM 定义了访问和操作 HTML 文档的标准方法。

DOM 将 HTML 文档表达为树结构。

[开始学习 HTML DOM](http://www.w3school.com.cn/htmldom/dom_intro.asp)！

## HTML DOM 树

![](http://www.w3school.com.cn/i/ct_htmltree.gif)

## HTML DOM 实例

学习 100 个实例！通过我们的在线编辑器，您能够编辑 HTML 代码，然后点击“亲自试一试”按钮来查看结果。

[HTML DOM 实例](http://www.w3school.com.cn/example/hdom_examples.asp)

## HTML DOM 参考手册

在 W3School，我们提供包含大量实例的完整 HTML DOM 参考手册。

[HTML DOM 参考手册](http://www.w3school.com.cn/jsref/index.asp)



# DOM 简介

**HTML DOM 定义了访问和操作 HTML 文档的标准。**

## 您应该具备的基础知识

在您继续学习之前，您需要对以下内容拥有基本的了解：

- HTML
- CSS
- JavaScript

如果您需要首先学习这些项目，请访问我们的[首页](http://www.w3school.com.cn/index.html)。

## 什么是 DOM？

DOM 是 W3C（万维网联盟）的标准。

DOM 定义了访问 HTML 和 XML 文档的标准：

> “W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。”

W3C DOM 标准被分为 3 个不同的部分：

- 核心 DOM - 针对任何结构化文档的标准模型
- XML DOM - 针对 XML 文档的标准模型
- HTML DOM - 针对 HTML 文档的标准模型

编者注：DOM 是 Document Object Model（文档对象模型）的缩写。

## 什么是 XML DOM？

XML DOM 定义了所有 XML 元素的*对象*和*属性*，以及访问它们的*方法*。

如果您需要学习 XML DOM，请访问我们的 [XML DOM 教程](http://www.w3school.com.cn/xmldom/index.asp)。

## 什么是 HTML DOM？

HTML DOM 是：

- HTML 的标准对象模型
- HTML 的标准编程接口
- W3C 标准

HTML DOM 定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的*方法*。

*换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。*



# DOM 节点

**在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。**

## DOM 节点

根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

## HTML DOM 节点树

HTML DOM 将 HTML 文档视作树结构。这种结构被称为*节点树*：

### HTML DOM Tree 实例

![](http://www.w3school.com.cn/i/ct_htmltree.gif)

通过 HTML DOM，树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。

## 节点父、子和同胞

节点树中的节点彼此拥有层级关系。

父（parent）、子（child）和同胞（sibling）等术语用于描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。

- 在节点树中，顶端节点被称为根（root）
- 每个节点都有父节点、除了根（它没有父节点）
- 一个节点可拥有任意数量的子
- 同胞是拥有相同父节点的节点

下面的图片展示了节点树的一部分，以及节点之间的关系：

![](http://www.w3school.com.cn/i/dom_navigate.gif)

## 请看下面的 HTML 片段：

```
<html>
  <head>
    <title>DOM 教程</title>
  </head>
  <body>
    <h1>DOM 第一课</h1>
    <p>Hello world!</p>
  </body>
</html>
```

从上面的 HTML 中：

- <html> 节点没有父节点；它是根节点
- <head> 和 <body> 的父节点是 <html> 节点
- 文本节点 "Hello world!" 的父节点是 <p> 节点

并且：

- <html> 节点拥有两个子节点：<head> 和 <body>
- <head> 节点拥有一个子节点：<title> 节点
- <title> 节点也拥有一个子节点：文本节点 "DOM 教程"
- <h1> 和 <p> 节点是同胞节点，同时也是 <body> 的子节点

并且：

- <head> 元素是 <html> 元素的首个子节点
- <body> 元素是 <html> 元素的最后一个子节点
- <h1> 元素是 <body> 元素的首个子节点
- <p> 元素是 <body> 元素的最后一个子节点

## 警告！

DOM 处理中的常见错误是希望元素节点包含文本。

在本例中：*<title>DOM 教程</title>*，元素节点 <title>，包含值为 "DOM 教程" 的*文本节点*。

可通过节点的 *innerHTML* 属性来访问文本节点的值。

您将在稍后的章节中学习更多有关 innerHTML 属性的知识。

# DOM 方法

方法是我们可以在节点（HTML 元素）上执行的动作。

## 编程接口

可通过 JavaScript （以及其他编程语言）对 HTML DOM 进行访问。

所有 HTML 元素被定义为对象，而编程接口则是对象方法和对象属性。

方法是您能够执行的动作（比如添加或修改元素）。

属性是您能够获取或设置的值（比如节点的名称或内容）。

## getElementById() 方法

getElementById() 方法返回带有指定 ID 的元素：

### 例子

```
<p id="intro">Hello World!</p>
<p>本例演示 <b>getElementById</b> 方法！</p>

<script>
    x=document.getElementById("intro");
    document.write("来自 intro 段落的文本：" + x.innerHTML);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_getelementbyid)

## HTML DOM 对象 - 方法和属性

一些常用的 HTML DOM 方法：

- getElementById(id) - 获取带有指定 id 的节点（元素）
- appendChild(node) - 插入新的子节点（元素）
- removeChild(node) - 删除子节点（元素）

一些常用的 HTML DOM 属性：

- innerHTML - 节点（元素）的文本值
- parentNode - 节点（元素）的父节点
- childNodes - 节点（元素）的子节点
- attributes - 节点（元素）的属性节点

您将在本教程的下一章中学到更多有关属性的知识。

## 现实生活中的对象

某个人是一个对象。

人的方法可能是 eat(), sleep(), work(), play() 等等。

所有人都有这些方法，但会在不同时间执行它们。

一个人的属性包括姓名、身高、体重、年龄、性别等等。

所有人都有这些属性，但它们的值因人而异。

## 一些 DOM 对象方法

这里提供一些您将在本教程中学到的常用方法：

| 方法                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| getElementById()         | 返回带有指定 ID 的元素。                                     |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。                   |
| appendChild()            | 把新的子节点添加到指定节点。                                 |
| removeChild()            | 删除子节点。                                                 |
| replaceChild()           | 替换子节点。                                                 |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                           |
| createAttribute()        | 创建属性节点。                                               |
| createElement()          | 创建元素节点。                                               |
| createTextNode()         | 创建文本节点。                                               |
| getAttribute()           | 返回指定的属性值。                                           |
| setAttribute()           | 把指定属性设置或修改为指定的值。                             |

# DOM 属性

属性是节点（HTML 元素）的值，您能够获取或设置。

## 编程接口

可通过 JavaScript （以及其他编程语言）对 HTML DOM 进行访问。

所有 HTML 元素被定义为对象，而编程接口则是对象方法和对象属性。

方法是您能够执行的动作（比如添加或修改元素）。

属性是您能够获取或设置的值（比如节点的名称或内容）。

## innerHTML 属性

获取元素内容的最简单方法是使用 innerHTML 属性。

innerHTML 属性对于获取或替换 HTML 元素的内容很有用。

### 实例

下面的代码获取 id="intro" 的 <p> 元素的 innerHTML：

**实例**

```
<html>
<body>

<p id="intro">Hello World!</p>

<script>
var txt=document.getElementById("intro").innerHTML;
document.write(txt);
</script>

</body>
</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_innerhtml)

在上面的例子中，getElementById 是一个方法，而 innerHTML 是属性。

innerHTML 属性可用于获取或改变任意 HTML 元素，包括 <html> 和 <body>。

## nodeName 属性

nodeName 属性规定节点的名称。

- nodeName 是只读的
- 元素节点的 nodeName 与标签名相同
- 属性节点的 nodeName 与属性名相同
- 文本节点的 nodeName 始终是 #text
- 文档节点的 nodeName 始终是 #document

注释：nodeName 始终包含 HTML 元素的大写字母标签名。

## nodeValue 属性

nodeValue 属性规定节点的值。

- 元素节点的 nodeValue 是 undefined 或 null
- 文本节点的 nodeValue 是文本本身
- 属性节点的 nodeValue 是属性值

## 获取元素的值

下面的例子会取回 <p id="intro"> 标签的文本节点值：

### 实例

```
<html>
<body>

<p id="intro">Hello World!</p>

<script type="text/javascript">
x=document.getElementById("intro");
document.write(x.firstChild.nodeValue);
</script>

</body>
</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_firstchild_nodevalue)

## nodeType 属性

nodeType 属性返回节点的类型。nodeType 是只读的。

比较重要的节点类型有：

| 元素类型 | NodeType |
| -------- | -------- |
| 元素     | 1        |
| 属性     | 2        |
| 文本     | 3        |
| 注释     | 8        |
| 文档     | 9        |



# DOM 访问

访问 HTML DOM - 查找 HTML 元素。

## 访问 HTML 元素（节点）

访问 HTML 元素等同于访问节点

您能够以不同的方式来访问 HTML 元素：

- 通过使用 getElementById() 方法
- 通过使用 getElementsByTagName() 方法
- 通过使用 getElementsByClassName() 方法

## getElementById() 方法

getElementById() 方法返回带有指定 ID 的元素：

### 语法

```
node.getElementById("id");
```

下面的例子获取 id="intro" 的元素：

### 实例

```
<p id="intro">Hello World!</p>
<p>本例演示 <b>getElementById</b> 方法！</p>

<script>
    x = document.getElementById("intro");
    document.write("<p>来自 intro 段落的文本：" + x.innerHTML + "</p>");
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_getelementbyid)

## getElementsByTagName() 方法

getElementsByTagName() 返回带有指定标签名的所有元素。

### 语法

```
node.getElementsByTagName("tagname");
```

下面的例子返回包含文档中所有 <p> 元素的列表：

### 实例 1

```
<p>Hello World!</p>
<p>DOM 很有用！</p>
<p>本例演示 <b>getElementsByTagName</b> 方法。</p>

<script>
    x = document.getElementsByTagName("p");
    document.write("第1段的文本: " + x[0].innerHTML);
    document.write("第2段的文本: " + x[1].innerHTML);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_getelementsbytagname)

下面的例子返回包含文档中所有 <p> 元素的列表，并且这些 <p> 元素应该是 id="main" 的元素的后代（子、孙等等）：

### 实例 2

```
<p>Hello World!</p>

<div id="main">
    <p>DOM 很有用！</p>
    <p>本例演示 <b>getElementsByTagName</b> 方法。</p>
</div>

<script>
    x = document.getElementById("main").getElementsByTagName("p");
    document.write("div 中的第一段的文本: " + x[0].innerHTML);
    document.write("div 中的第2段的文本: " + x[1].innerHTML);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_getelementsbytagname2)

## getElementsByClassName() 方法

如果您希望查找带有相同类名的所有 HTML 元素，请使用这个方法：

```
document.getElementsByClassName("intro");
```

上面的例子返回包含 class="intro" 的所有元素的一个列表：

注释：getElementsByClassName() 在 Internet Explorer 5,6,7,8 中无效。



# DOM - 修改HTML内容

修改 HTML = 改变元素、属性、样式和事件。

## 修改 HTML 元素

修改 HTML DOM 意味着许多不同的方面：

- 改变 HTML 内容
- 改变 CSS 样式
- 改变 HTML 属性
- 创建新的 HTML 元素
- 删除已有的 HTML 元素
- 改变事件（处理程序）

在接下来的章节，我们会深入学习修改 HTML DOM 的常用方法。

## 创建 HTML 内容

改变元素内容的最简答的方法是使用 innerHTML 属性。

下面的例子改变一个 <p> 元素的 HTML 内容：

### 实例

```
<p id="p1">Hello World!</p>
<script>
    document.getElementById("p1").innerHTML = "New text!";
</script> 
<p>上面的段落被一段脚本改变了。</p>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_changetext)

提示：我们将在下面的章节为您解释例子中的细节。

## 改变 HTML 样式

通过 HTML DOM，您能够访问 HTML 元素的样式对象。

下面的例子改变一个段落的 HTML 样式：

### 实例

```
<p id="p1">Hello world!</p>
<p id="p2">Hello world!</p>

<script>
    document.getElementById("p2").style.color = "blue";
    document.getElementById("p2").style.fontFamily = "Arial";
    document.getElementById("p2").style.fontSize = "50px";
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_changestyle)

## 创建新的 HTML 元素

如需向 HTML DOM 添加新元素，您首先必须创建该元素（元素节点），然后把它追加到已有的元素上。

### 实例

```
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>
<script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_elementcreate)



## 使用事件

HTML DOM 允许您在事件发生时执行代码。

当 HTML 元素”有事情发生“时，浏览器就会生成事件：

- 在元素上点击
- 加载页面
- 改变输入字段

你可以在下一章学习更多有关事件的内容。

下面两个例子在按钮被点击时改变 <body> 元素的背景色：

### 实例

```
<input type="button" onclick="document.body.style.backgroundColor='lavender';"
value="Change background color" />
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_changebackground)

在本例中，由函数执行相同的代码：

### 实例

```
<script>
    function ChangeBackground() {
        document.body.style.backgroundColor = "lavender";
    }
</script>

<input type="button" onclick="ChangeBackground()"
       value="Change background color"/>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_changebackground2)

下面的例子在按钮被点击时改变 <p> 元素的文本：

### 实例

```
<p id="p1">Hello world!</p>

<script>
    function ChangeText() {
        document.getElementById("p1").innerHTML = "New text!";
    }
</script>

<input type="button" onclick="ChangeText()" value="改变文本"/>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_changetext2)



# DOM - 元素

添加、删除和替换 HTML 元素。

## 创建新的 HTML 元素 - appendChild()

如需向 HTML DOM 添加新元素，您首先必须创建该元素，然后把它追加到已有的元素上。

### 实例

```
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>

<script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_elementcreate)

### 例子解释

这段代码创建了一个新的 <p> 元素：

```
var para=document.createElement("p");
```

如需向 <p> 元素添加文本，您首先必须创建文本节点。这段代码创建文本节点：

```
var node=document.createTextNode("This is a new paragraph.");
```

然后您必须向 <p> 元素追加文本节点：

```
para.appendChild(node);
```

最后，您必须向已有元素追加这个新元素。

这段代码查找到一个已有的元素：

```
var element=document.getElementById("div1");
```

这段代码向这个已存在的元素追加新元素：

```
element.appendChild(para);
```

## 创建新的 HTML 元素 - insertBefore()

上一个例子中的 appendChild() 方法，将新元素作为父元素的最后一个子元素进行添加。

如果不希望如此，您可以使用 insertBefore() 方法：插入到指定的位置

### 实例

```
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>

<script>
	//创建元素
    var para = document.createElement("p");
    //创建文本节点
    var node = document.createTextNode("This is new.");
    //给指定元素追加文本节点
    para.appendChild(node);
    var element = document.getElementById("div1");
    var child = document.getElementById("p2");
    //插入到指定元素前面
    element.insertBefore(para, child);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_elementcreate2)

## 删除已有的 HTML 元素

如需删除 HTML 元素，您必须清楚该元素的父元素：

### 实例

```
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>
<script>
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_elementremove)

### 例子解释

这个 HTML 文档包含一个带有两个子节点（两个 <p> 元素）的 <div> 元素：

```
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
```

查找 id="div1" 的元素：

```
var parent=document.getElementById("div1");
```

查找 id="p1" 的 <p> 元素：

```
var child=document.getElementById("p1");
```

从父元素中删除子元素：

```
parent.removeChild(child);
```

提示：能否在不引用父元素的情况下删除某个元素？

很抱歉。DOM 需要了解您需要删除的元素，以及它的父元素。

这里提供一个常用的解决方法：找到您需要删除的子元素，然后使用 parentNode 属性来查找其父元素：

```
var child=document.getElementById("p1");
//获取父元素
child.parentNode.removeChild(child);
```

## 替换 HTML 元素

如需替换 HTML DOM 中的元素，请使用 replaceChild() 方法：



### 实例

```
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>
<script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    //替换 HTML 元素
    parent.replaceChild(para, child);
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_elementreplace)



# DOM - 事件

HTML DOM 允许 JavaScript 对 HTML 事件作出反应。。

## 对事件作出反应

当事件发生时，可以执行 JavaScript，比如当用户点击一个 HTML 元素时。

如需在用户点击某个元素时执行代码，请把 JavaScript 代码添加到 HTML 事件属性中：

```
onclick=JavaScript
```

HTML 事件的例子：

- 当用户点击鼠标时
- 当网页已加载时
- 当图片已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当 HTML 表单被提交时
- 当用户触发按键时

在本例中，当用户点击时，会改变 <h1> 元素的内容：

### 实例

```
<h1 onclick="this.innerHTML='hello!'">请点击这段文本!</h1>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event_onclick)

在本例中，会从事件处理程序中调用函数：

### 实例

```
<script>
    function changetext(id) {
        id.innerHTML = "hello!";
    }
</script>
<h1 onclick="changetext(this)">请点击这段文本!</h1>

```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event_onclick2)

## HTML 事件属性

如需向 HTML 元素分配事件，您可以使用事件属性。

### 实例

向 button 元素分配一个 onclick 事件：

```
<p>点击按钮来执行 <b>displayDate()</b> 函数。</p>
<button onclick="displayDate()">试一试</button>
<script>
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
</script>
<p id="demo"></p>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event)

在上面的例子中，当点击按钮时，会执行名为 displayDate 的函数。

## 使用 HTML DOM 来分配事件

HTML DOM 允许您使用 JavaScript 向 HTML 元素分配事件：

### 实例

为 button 元素分配 onclick 事件：

```
<p>点击按钮来执行 <b>displayDate()</b> 函数。</p>
<button id="myBtn">试一试</button>
<script>
    document.getElementById("myBtn").onclick = function () {
        displayDate()
    };
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
</script>
<p id="demo"></p>
<script>
	//再次点击刷新时间
    document.getElementById("myBtn").onclick = function () {
        displayDate()
    };
</script>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event2)

在上面的例子中，名为 displayDate 的函数被分配给了 id=myButn" 的 HTML 元素。

当按钮被点击时，将执行函数。

## onload 和 onunload 事件

当用户进入或离开页面时，会触发 onload 和 onunload 事件。

onload 事件可用于检查访客的浏览器类型和版本，以便基于这些信息来加载不同版本的网页。

onload 和 onunload 事件可用于处理 cookies。

### 实例

```
<body onload="checkCookies()">
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event_onload)

## onchange 事件

onchange 事件常用于输入字段的验证。

下面的例子展示了如何使用 onchange。当用户改变输入字段的内容时，将调用 upperCase() 函数。

### 实例

```
<input type="text" id="fname" onchange="upperCase()">
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event_onchange)

## onmouseover 和 onmouseout 事件

onmouseover 和 onmouseout 事件可用于在鼠标指针移动到或离开元素时触发函数。

### 实例

一个简单的 onmouseover-onmouseout 例子：

把鼠标移上来

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event_onmouseover)

## onmousedown、onmouseup 以及 onclick 事件

onmousedown、onmouseup 以及 onclick 事件是鼠标点击的全部过程。首先当某个鼠标按钮被点击时，触发 onmousedown 事件，然后，当鼠标按钮被松开时，会触发 onmouseup 事件，最后，当鼠标点击完成时，触发 onclick 事件。

### 实例

一个简单的 onmousedown-onmouseup 实例：

点击这里

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=dom_event_onmousedown)

## HTML DOM 事件对象参考手册

如需每个事件的完整描述和例子，请访问我们的 [HTML DOM 参考手册](http://www.w3school.com.cn/jsref/index.asp)。