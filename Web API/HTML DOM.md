
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