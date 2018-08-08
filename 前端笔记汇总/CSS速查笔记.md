# CSS速查笔记

## CSS 概述

- CSS 指层叠样式表 (*C*ascading *S*tyle *S*heets)
- 样式定义*如何显示* HTML 元素
- 样式通常存储在*样式表*中
- 把样式添加到 HTML 4.0 中，是为了*解决内容与表现分离的问题*
- *外部样式表*可以极大提高工作效率
- 外部样式表通常存储在 *CSS 文件*中
- 多个样式定义可*层叠*为一



## CSS样式表创建

### 外部样式表

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 <link> 标签链接到样式表。<link> 标签在（文档的）头部： 

``` css
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

### 内部样式表

当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 <style> 标签在文档头部定义内部样式表，就像这样: 

```css
<head>
<style type="text/css">
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
</head>
```

### 内联样式

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。本例展示如何改变段落的颜色和左外边距：

```css
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```

## 样式层叠

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。

**层叠次序**

**当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？**

一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 <head> 标签内部）
4. 内联样式（在 HTML 元素内部）

因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：<head> 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。

## CSS 基础语法

````css
选择器{
    属性名 : 属性值;
}
````

## CSS 选择器

### 标签选择器（元素选择器）

标签选择器是指用HTML标签名称作为选择器，按标签名称分类

``` css 
div{
    color : red;
}
```



### 类选择器

类选择器使用“.”（英文点号）进行标识，后面紧跟类名，其基本语法格式如下：

``` css
.hello{
    color : red;
}
```



### id选择器

id选择器使用“#”进行标识，后面紧跟id名，其基本语法格式如下：

```
#id名{属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }
```

### 组选择器

我们可以选择器,标签,类名,id一起组合为一个选择器,组内的选择器,使用同样的样式

```css
h1,h2,h3,h4,h5,h6,.red {
  color: red;
  }
```

### 后代选择器

后代选择器,根据选择器的顺序.过滤到不匹配的选择器内容

这个后代选择器,只会对页面中,div下的p标签起作用

``` css
div p{
    color : red;
}
```

### 通配符选择器

通配符   选择器用“*”号表示，他是所有选择器中作用范围最广的，能匹配页面中所有的元素。其基本语法格式如下：

``` css
*{
    color : red;
}
```

### 属性选择器

下面的例子为带有 title 属性的所有元素设置样式：

```css
[title]
{
color:red;
}
```

### 属性和值选择器

下面的例子为 title="W3School" 的所有元素设置样式：

``` css
[title=W3School]
{
border:5px solid blue;
}
```

**设置表单的样式**

属性选择器在为不带有 class 或 id 的表单设置样式时特别有用：

``` css
input[type="text"]
{
  width:150px;
  display:block;
  margin-bottom:10px;
  background-color:yellow;
  font-family: Verdana, Arial;
}

input[type="button"]
{
  width:120px;
  margin-left:35px;
  display:block;
  font-family: Verdana, Arial;
}
```
### CSS 子元素选择器

如果您不希望选择任意的后代元素，而是希望缩小范围，只选择某个元素的子元素，请使用子元素选择器（Child selector）。

例如，如果您希望选择只作为 h1 元素子元素的 strong 元素，可以这样写：

```css
h1 > strong {color:red;}
```

### CSS 相邻兄弟选择器

如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）。

例如，如果要增加紧接在 h1 元素后出现的段落的上边距，可以这样写：

```css
h1 + p {margin-top:50px;}
```

## CSS 背景

**CSS 背景属性**

| 属性                                                         | 描述                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| [background](http://www.w3school.com.cn/cssref/pr_background.asp) | 简写属性，作用是将背景属性设置在一个声明中。 |
| [background-attachment](http://www.w3school.com.cn/cssref/pr_background-attachment.asp) | 背景图像是否固定或者随着页面的其余部分滚动。 |
| [background-color](http://www.w3school.com.cn/cssref/pr_background-color.asp) | 设置元素的背景颜色。                         |
| [background-image](http://www.w3school.com.cn/cssref/pr_background-image.asp) | 把图像设置为背景。                           |
| [background-position](http://www.w3school.com.cn/cssref/pr_background-position.asp) | 设置背景图像的起始位置。                     |
| [background-repeat](http://www.w3school.com.cn/cssref/pr_background-repeat.asp) | 设置背景图像是否及如何重复。                 |

**CSS 允许应用纯色作为背景，也允许使用背景图像创建相当复杂的效果。**

**CSS 在这方面的能力远远在 HTML 之上。**

### 背景色background-color

可以使用 [background-color 属性](http://www.w3school.com.cn/cssref/pr_background-color.asp)为元素设置背景色。这个属性接受任何合法的颜色值。

这条规则把元素的背景设置为灰色：

```css
p {background-color: gray;}
```

### 背景图像background-image 

要把图像放入背景，需要使用 [background-image 属性](http://www.w3school.com.cn/cssref/pr_background-image.asp)。background-image  属性的默认值是 none，表示背景上没有放置任何图像。

如果需要设置一个背景图像，必须为这个属性设置一个 URL 值：

```css
body {background-image: url(/i/eg_bg_04.gif);}
```

大多数背景都应用到 body 元素，不过并不仅限于此。 

### 背景重复background-repeat

如果需要在页面上对背景图像进行平铺，可以使用 [background-repeat 属性](http://www.w3school.com.cn/cssref/pr_background-repeat.asp)。

属性值 repeat 导致图像在水平垂直方向上都平铺，就像以往背景图像的通常做法一样。repeat-x 和 repeat-y 分别导致图像只在水平或垂直方向上重复，no-repeat 则不允许图像在任何方向上平铺。

默认地，背景图像将从一个元素的左上角开始。请看下面的例子：

```css
body{ 
  background-image: url(/i/eg_bg_03.gif);
  background-repeat: repeat-y;
  }
```

### 背景定位background-position

可以利用 [background-position 属性](http://www.w3school.com.cn/cssref/pr_background-position.asp)改变图像在背景中的位置。

下面的例子在 body 元素中将一个背景图像居中放置：

```css
body{ 
    background-image:url('/i/eg_bg_03.gif');
    background-repeat:no-repeat;
    background-position:center;
  }
```
为 background-position 属性提供值有很多方法。首先，可以使用一些关键字：top、bottom、left、right 和 center。通常，这些关键字会成对出现，不过也不总是这样。还可以使用长度值，如 100px 或 5cm，最后也可以使用百分数值。不同类型的值对于背景图像的放置稍有差异。 

## CSS 文本

**CSS 文本属性可定义文本的外观。**

**通过文本属性，您可以改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。**