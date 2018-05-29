---

---



# jQuery基本概念

> 学习目标：学会如何使用jQuery，掌握jQuery的常用api，能够使用jQuery实现常见的效果。



## 为什么要学习jQuery？

【01-让div显示与设置内容.html】

使用javascript

 

```
// 按ID查找：
var a = document.getElementById('dom-id');

// 按tag查找：
var divs = document.getElementsByTagName('div');

// 查找<p class="red">：
var ps = document.getElementsByTagName('p');
// 过滤出class="red":
// TODO:

// 查找<table class="green">里面的所有<tr>：
var table = ...
for (var i=0; i<table.children; i++) {
    // TODO: 过滤出<tr>
}
```

开发过程中，有许多的缺点：

```javascript
1. 查找元素的方法太少，麻烦。
2. 遍历伪数组很麻烦，通常要嵌套一大堆的for循环。
3. 有兼容性问题。
4. 想要实现简单的动画效果，也很麻烦
5. 代码冗余。
```



## jQuery初体验

【02-让div显示与设置内容.html】

```javascript
$(document).ready(function () {
    $("#btn1").click(function () {
      	//隐式迭代：偷偷的遍历，在jQuery中，不需要手动写for循环了，会自动进行遍历。
        $("div").show(200);
    });

    $("#btn2").click(function () {
        $("div").text("我是内容");
    });
});
```



优点总结：

```javascript
1. 查找元素的方法多种多样，非常灵活
2. 拥有隐式迭代特性，因此不再需要手写for循环了。
3. 完全没有兼容性问题。
4. 实现动画非常简单，而且功能更加的强大。
5. 代码简单、粗暴。
```



> 没有对比，就没有伤害，有了对比，处处戳中要害。



## 什么是jQuery?

> jQuery的官网 [http://jquery.com/](http://jquery.com/) 
> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。

js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。（animate.js、common.js）



我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。



## jQuery的版本

> 官网下载地址：[http://jquery.com/download/](http://jquery.com/download/)
> jQuery版本有很多，分为1.x 2.x 3.x



大版本分类：

```javascript
1.x版本：能够兼容IE678浏览器
2.x版本：不兼容IE678浏览器
1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。

3.x版本：不兼容IE678，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）
```



关于压缩版和未压缩版

```javascript
jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。
jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。
```



## jQuery的入口函数

使用jQuery的三个步骤：

```javascript
1. 引入jQuery文件
2. 入口函数
3. 功能实现
```



关于jQuery的入口函数：

```javascript
//第一种写法
$(document).ready(function() {
	
});
//第二种写法
$(function() {
	
});
```



jQuery入口函数与js入口函数的对比

```javascript
1.	JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2.	jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。
```



## jQuery对象与DOM对象的区别（重点）

```javascript
1. DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
2. jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
3. jQuery对象其实就是DOM对象的包装集（包装了DOM对象的集合（伪数组））
4. DOM对象与jQuery对象的方法不能混用。
```



DOM对象转换成jQuery对象：【联想记忆：花钱】

```javascript
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象

```



jQuery对象转换成DOM对象：

```javascript
var $li = $(“li”);
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)

```



【练习：隔行变色案例.html】



**选择器允许您对元素组或单个元素进行操作。**

# jQuery 选择器

在前面的章节中，我们展示了一些有关如何选取 HTML 元素的实例。

关键点是学习 jQuery 选择器是如何准确地选取您希望应用效果的元素。

jQuery 元素选择器和属性选择器允许您通过标签名、属性名或内容对 HTML 元素进行选择。

选择器允许您对 HTML 元素组或单个元素进行操作。

在 HTML DOM 术语中：

选择器允许您对 DOM 元素组或单个 DOM 节点进行操作。

## jQuery 元素选择器

jQuery 使用 CSS 选择器来选取 HTML 元素。

$("p") 选取 <p> 元素。

$("p.intro") 选取所有 class="intro" 的 <p> 元素。

$("p#demo") 选取所有 id="demo" 的 <p> 元素。

## jQuery 属性选择器

jQuery 使用 XPath 表达式来选择带有给定属性的元素。

$("[href]") 选取所有带有 href 属性的元素。

$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。

$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。

$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。

## jQuery CSS 选择器

jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。

下面的例子把所有 p 元素的背景颜色更改为红色：

**实例**

```
$("p").css("background-color","red");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_css_change_p)

## 更多的选择器实例

| 语法                 | 描述                                                 |
| -------------------- | ---------------------------------------------------- |
| $(this)              | 当前 HTML 元素                                       |
| $("p")               | 所有 <p> 元素                                        |
| $("p.intro")         | 所有 class="intro" 的 <p> 元素                       |
| $(".intro")          | 所有 class="intro" 的元素                            |
| $("#intro")          | id="intro" 的元素                                    |
| $("ul li:first")     | 每个 <ul> 的第一个 <li> 元素                         |
| $("[href$='.jpg']")  | 所有带有以 ".jpg" 结尾的属性值的 href 属性           |
| $("div#intro .head") | id="intro" 的 <div> 元素中的所有 class="head" 的元素 |

如需完整的参考手册，请访问我们的 [jQuery 选择器参考手册](http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp)。

```javascript
【案例：下拉菜单】this+children+mouseenter+mouseleave
【案例：突出展示】siblings+find
【案例：手风琴】next+parent
【案例：淘宝精品】index+eq
```

## jQuery 选择器参考手册

| 选择器                                                       | 实例                       | 选取                                       |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------ |
| [*](http://www.w3school.com.cn/jquery/selector_all.asp)      | $("*")                     | 所有元素                                   |
| [#*id*](http://www.w3school.com.cn/jquery/selector_id.asp)   | $("#lastname")             | id="lastname" 的元素                       |
| [.*class*](http://www.w3school.com.cn/jquery/selector_class.asp) | $(".intro")                | 所有 class="intro" 的元素                  |
| [*element*](http://www.w3school.com.cn/jquery/selector_element.asp) | $("p")                     | 所有 <p> 元素                              |
| .*class*.*class*                                             | $(".intro.demo")           | 所有 class="intro" 且 class="demo" 的元素  |
|                                                              |                            |                                            |
| [:first](http://www.w3school.com.cn/jquery/selector_first.asp) | $("p:first")               | 第一个 <p> 元素                            |
| [:last](http://www.w3school.com.cn/jquery/selector_last.asp) | $("p:last")                | 最后一个 <p> 元素                          |
| [:even](http://www.w3school.com.cn/jquery/selector_even.asp) | $("tr:even")               | 所有偶数 <tr> 元素                         |
| [:odd](http://www.w3school.com.cn/jquery/selector_odd.asp)   | $("tr:odd")                | 所有奇数 <tr> 元素                         |
|                                                              |                            |                                            |
| [:eq(*index*)](http://www.w3school.com.cn/jquery/selector_eq.asp) | $("ul li:eq(3)")           | 列表中的第四个元素（index 从 0 开始）      |
| [:gt(*no*)](http://www.w3school.com.cn/jquery/selector_gt.asp) | $("ul li:gt(3)")           | 列出 index 大于 3 的元素                   |
| [:lt(*no*)](http://www.w3school.com.cn/jquery/selector_lt.asp) | $("ul li:lt(3)")           | 列出 index 小于 3 的元素                   |
| :not(*selector*)                                             | $("input:not(:empty)")     | 所有不为空的 input 元素                    |
|                                                              |                            |                                            |
| [:header](http://www.w3school.com.cn/jquery/selector_header.asp) | $(":header")               | 所有标题元素 <h1> - <h6>                   |
| [:animated](http://www.w3school.com.cn/jquery/selector_animated.asp) |                            | 所有动画元素                               |
|                                                              |                            |                                            |
| [:contains(*text*)](http://www.w3school.com.cn/jquery/selector_contains.asp) | $(":contains('W3School')") | 包含指定字符串的所有元素                   |
| [:empty](http://www.w3school.com.cn/jquery/selector_empty.asp) | $(":empty")                | 无子（元素）节点的所有元素                 |
| :hidden                                                      | $("p:hidden")              | 所有隐藏的 <p> 元素                        |
| [:visible](http://www.w3school.com.cn/jquery/selector_visible.asp) | $("table:visible")         | 所有可见的表格                             |
|                                                              |                            |                                            |
| s1,s2,s3                                                     | $("th,td,.intro")          | 所有带有匹配选择的元素                     |
|                                                              |                            |                                            |
| [[*attribute*\]](http://www.w3school.com.cn/jquery/selector_attribute.asp) | $("[href]")                | 所有带有 href 属性的元素                   |
| [[*attribute*=*value*\]](http://www.w3school.com.cn/jquery/selector_attribute_equal_value.asp) | $("[href='#']")            | 所有 href 属性的值等于 "#" 的元素          |
| [[*attribute*!=*value*\]](http://www.w3school.com.cn/jquery/selector_attribute_notequal_value.asp) | $("[href!='#']")           | 所有 href 属性的值不等于 "#" 的元素        |
| [[*attribute*$=*value*\]](http://www.w3school.com.cn/jquery/selector_attribute_end_value.asp) | $("[href$='.jpg']")        | 所有 href 属性的值包含以 ".jpg" 结尾的元素 |
|                                                              |                            |                                            |
| [:input](http://www.w3school.com.cn/jquery/selector_input.asp) | $(":input")                | 所有 <input> 元素                          |
| [:text](http://www.w3school.com.cn/jquery/selector_input_text.asp) | $(":text")                 | 所有 type="text" 的 <input> 元素           |
| [:password](http://www.w3school.com.cn/jquery/selector_input_password.asp) | $(":password")             | 所有 type="password" 的 <input> 元素       |
| [:radio](http://www.w3school.com.cn/jquery/selector_input_radio.asp) | $(":radio")                | 所有 type="radio" 的 <input> 元素          |
| [:checkbox](http://www.w3school.com.cn/jquery/selector_input_checkbox.asp) | $(":checkbox")             | 所有 type="checkbox" 的 <input> 元素       |
| [:submit](http://www.w3school.com.cn/jquery/selector_input_submit.asp) | $(":submit")               | 所有 type="submit" 的 <input> 元素         |
| [:reset](http://www.w3school.com.cn/jquery/selector_input_reset.asp) | $(":reset")                | 所有 type="reset" 的 <input> 元素          |
| [:button](http://www.w3school.com.cn/jquery/selector_input_button.asp) | $(":button")               | 所有 type="button" 的 <input> 元素         |
| [:image](http://www.w3school.com.cn/jquery/selector_input_image.asp) | $(":image")                | 所有 type="image" 的 <input> 元素          |
| [:file](http://www.w3school.com.cn/jquery/selector_input_file.asp) | $(":file")                 | 所有 type="file" 的 <input> 元素           |
|                                                              |                            |                                            |
| [:enabled](http://www.w3school.com.cn/jquery/selector_input_enabled.asp) | $(":enabled")              | 所有激活的 input 元素                      |
| [:disabled](http://www.w3school.com.cn/jquery/selector_input_disabled.asp) | $(":disabled")             | 所有禁用的 input 元素                      |
| [:selected](http://www.w3school.com.cn/jquery/selector_input_selected.asp) | $(":selected")             | 所有被选取的 input 元素                    |
| [:checked](http://www.w3school.com.cn/jquery/selector_input_checked.asp) | $(":checked")              | 所有被选中的 input 元素                    |



# jQuery 事件

**jQuery 是为事件处理特别设计的。**

## jQuery 事件函数

jQuery 事件处理方法是 jQuery 中的核心函数。

事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。术语由事件“触发”（或“激发”）经常会被使用。

通常会把 jQuery 代码放到 <head>部分的事件处理方法中：

**实例**

```
<html>
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
</script>
</head>

<body>
<h2>This is a heading</h2>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<button>Click me</button>
</body>

</html>
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_p)

在上面的例子中，当按钮的点击事件被触发时会调用一个函数：

```
$("button").click(function() {..some code... } )
```

该方法隐藏所有 <p> 元素：

```
$("p").hide();
```

## 单独文件中的函数

如果您的网站包含许多页面，并且您希望您的 jQuery 函数易于维护，那么请把您的 jQuery 函数放到独立的 .js 文件中。

当我们在教程中演示 jQuery 时，会将函数直接添加到 <head> 部分中。不过，把它们放到一个单独的文件中会更好，就像这样（通过 src 属性来引用文件）：

**实例**

```
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="my_jquery_functions.js"></script>
</head>
```

## jQuery 名称冲突

jQuery 使用 $ 符号作为 jQuery 的简介方式。

某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。

jQuery 使用名为 noConflict() 的方法来解决该问题。

*var jq=jQuery.noConflict()*，帮助您使用自己的名称（比如 jq）来代替 $ 符号。

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_noconflict)

**结论**

由于 jQuery 是为处理 HTML 事件而特别设计的，那么当您遵循以下原则时，您的代码会更恰当且更易维护：

- 把所有 jQuery 代码置于事件处理函数中
- 把所有事件处理函数置于文档就绪事件处理器中
- 把 jQuery 代码置于单独的 .js 文件中
- 如果存在名称冲突，则重命名 jQuery 库

## jQuery 事件

下面是 jQuery 中事件方法的一些例子：

| Event 函数                      | 绑定函数至                                     |
| ------------------------------- | ---------------------------------------------- |
| $(document).ready(function)     | 将函数绑定到文档的就绪事件（当文档完成加载时） |
| $(selector).click(function)     | 触发或将函数绑定到被选元素的点击事件           |
| $(selector).dblclick(function)  | 触发或将函数绑定到被选元素的双击事件           |
| $(selector).focus(function)     | 触发或将函数绑定到被选元素的获得焦点事件       |
| $(selector).mouseover(function) | 触发或将函数绑定到被选元素的鼠标悬停事件       |

如需完整的参考手册，请访问我们的 [jQuery 事件参考手册](http://www.w3school.com.cn/jquery/jquery_ref_events.asp)。

#jQuery动画效果

## 隐藏和显示

**隐藏、显示、切换，滑动，淡入淡出，以及动画，哇哦！**

**实例**

- [jQuery hide()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide)

  演示一个简单的 jQuery hide() 方法。

- [jQuery hide()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_explanations)

  另一个 hide() 演示。如何隐藏部分文本。

#### jQuery hide() 和 show()

通过 jQuery，您可以使用 hide() 和 show() 方法来隐藏和显示 HTML 元素：

```
$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_show)

**语法**：

```
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```

可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

下面的例子演示了带有 speed 参数的 hide() 方法：

**实例**

```
$("button").click(function(){
  $("p").hide(1000);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_slow)

### jQuery toggle()

通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。

显示被隐藏的元素，并隐藏已显示的元素：

**实例**

```
$("button").click(function(){
  $("p").toggle();
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_toggle)

**语法**：

```
$(selector).toggle(speed,callback);
```

可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是 toggle() 方法完成后所执行的函数名称。

## 淡入淡出

**通过 jQuery，您可以实现元素的淡入淡出效果。**

**实例**

- [jQuery fadeIn()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadein)

  演示 jQuery fadeIn() 方法。

- [jQuery fadeOut()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadeout)

  演示 jQuery fadeOut() 方法。

- [jQuery fadeToggle()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadetoggle)

  演示 jQuery fadeToggle() 方法。

- [jQuery fadeTo()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadeto)

  演示 jQuery fadeTo() 方法。

### jQuery Fading 方法

通过 jQuery，您可以实现元素的淡入淡出效果。

jQuery 拥有下面四种 fade 方法：

- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()

### jQuery fadeIn() 方法

jQuery fadeIn() 用于淡入已隐藏的元素。

语法：

```
$(selector).fadeIn(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是 fading 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeIn() 方法：

**实例**

```
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadein)

### jQuery fadeOut() 方法

jQuery fadeOut() 方法用于淡出可见元素。

**语法**：

```
$(selector).fadeOut(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是 fading 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeOut() 方法：

**实例**

```
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadeout)

### jQuery fadeToggle() 方法

jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。

如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。

如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。

语法：****

```
$(selector).fadeToggle(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是 fading 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeToggle() 方法：

**实例**

```
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadetoggle)

### jQuery fadeTo() 方法

jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。

**语法**：

```
$(selector).fadeTo(speed,opacity,callback);
```

必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

可选的 callback 参数是该函数完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeTo() 方法：

**实例**

```
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_fadeto)



## 滑动

**jQuery 滑动方法可使元素上下滑动。**

**实例**

- [jQuery slideDown()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_slide_down)

  演示 jQuery slideDown() 方法。

- [jQuery slideUp()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_slide_up)

  演示 jQuery slideUp() 方法。

- [jQuery slideToggle()](http://www.w3school.com.cn/tiy/t.asp?f=jquery_slide_toggle)

  演示 jQuery slideToggle() 方法。

### jQuery 滑动方法

通过 jQuery，您可以在元素上创建滑动效果。

jQuery 拥有以下滑动方法：

- slideDown()
- slideUp()
- slideToggle()

### jQuery slideDown() 方法

jQuery slideDown() 方法用于向下滑动元素。

**语法**：

```
$(selector).slideDown(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是滑动完成后所执行的函数名称。

下面的例子演示了 slideDown() 方法：

**实例**

```
$("#flip").click(function(){
  $("#panel").slideDown();
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_slide_down)

### jQuery slideUp() 方法

jQuery slideUp() 方法用于向上滑动元素。

**语法**：

```
$(selector).slideUp(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是滑动完成后所执行的函数名称。

下面的例子演示了 slideUp() 方法：

**实例**

```
$("#flip").click(function(){
  $("#panel").slideUp();
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_slide_up)

### jQuery slideToggle() 方法

jQuery slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换。

如果元素向下滑动，则 slideToggle() 可向上滑动它们。

如果元素向上滑动，则 slideToggle() 可向下滑动它们。

```
$(selector).slideToggle(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是滑动完成后所执行的函数名称。

下面的例子演示了 slideToggle() 方法：

**实例**

```
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_slide_toggle)

## 动画

**jQuery animate() 方法允许您创建自定义的动画。**

### uery 动画 - animate() 方法

jQuery animate() 方法用于创建自定义动画。

**语法**：

```
$(selector).animate({params},speed,callback);
```

必需的 params 参数定义形成动画的 CSS 属性。

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是动画完成后所执行的函数名称。

下面的例子演示 animate() 方法的简单应用；它把 <div> 元素移动到左边，直到 left 属性等于 250 像素为止：

**实例**

```
$("button").click(function(){
  $("div").animate({left:'250px'});
}); 
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_animation1)

提示：默认地，所有 HTML 元素都有一个静态位置，且无法移动。

如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！

### jQuery animate() - 操作多个属性

请注意，生成动画的过程中可同时使用多个属性：

**实例**

```
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
}); 
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_animation1_multicss)

提示：可以用 animate() 方法来操作所有 CSS 属性吗？

是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。

同时，色彩动画并不包含在核心 jQuery 库中。

如果需要生成颜色动画，您需要从 jQuery.com 下载 Color Animations 插件。

### jQuery animate() - 使用相对值

也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：

实例

```
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_animation1_relative)

### jQuery animate() - 使用预定义的值

您甚至可以把属性的动画值设置为 "show"、"hide" 或 "toggle"：

实例

```
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_animation1_toggle)

### jQuery animate() - 使用队列功能

默认地，jQuery 提供针对动画的队列功能。

这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些 animate 调用。

实例 **1**

隐藏，如果您希望在彼此之后执行不同的动画，那么我们要利用队列功能：

```
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_animation)

**实例** 2

下面的例子把 <div> 元素移动到右边，然后增加文本的字号：

```
$("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3em'},"slow");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_animation2)



## 停止动画

**jQuery stop() 方法用于在动画或效果完成前对它们进行停止。**

**实例**

- [jQuery stop() 滑动](http://www.w3school.com.cn/tiy/t.asp?f=jquery_stop_slide)

  演示 jQuery stop() 方法。

- [jQuery stop() 动画（带有参数）](http://www.w3school.com.cn/tiy/t.asp?f=jquery_stop_params)

  演示 jQuery stop() 方法。

### jQuery stop() 方法

jQuery stop() 方法用于停止动画或效果，在它们完成之前。

stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。

**语法**

```
$(selector).stop(stopAll,goToEnd);
```

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

因此，默认地，stop() 会清除在被选元素上指定的当前动画。

下面的例子演示 stop() 方法，不带参数：

**实例**

```
$("#stop").click(function(){
  $("#panel").stop();
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_stop_slide)



## Callback 函数

**Callback 函数在当前动画 100% 完成之后执行。**

### jQuery 动画的问题

许多 jQuery 函数涉及动画。这些函数也许会将 *speed* 或 *duration* 作为可选参数。

例子：*$("p").hide("slow")*

*speed* 或 *duration* 参数可以设置许多不同的值，比如 "slow", "fast", "normal" 或毫秒。

**实例**

```
$("button").click(function(){
$("p").hide(1000);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_slow)

由于 JavaScript 语句（指令）是逐一执行的 - 按照次序，动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。

为了避免这个情况，您可以以参数的形式添加 Callback 函数。

### jQuery Callback 函数

当动画 100% 完成后，即调用 Callback 函数。

**典型的语法**：

```
$(selector).hide(speed,callback)
```

*callback* 参数是一个在 hide 操作完成后被执行的函数。

**错误**（没有 callback）

```
$("p").hide(1000);
alert("The paragraph is now hidden");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_slow_wrong)

**正确**（有 callback）

```
$("p").hide(1000,function(){
alert("The paragraph is now hidden");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_hide_slow_right)

结论：如果您希望在一个涉及动画的函数之后来执行语句，请使用 callback 函数。

##  Chaining

**通过 jQuery，您可以把动作/方法链接起来。**

**Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。**

### jQuery 方法链接

直到现在，我们都是一次写一条 jQuery 语句（一条接着另一条）。

不过，有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。

提示：这样的话，浏览器就不必多次查找相同的元素。

如需链接一个动作，您只需简单地把该动作追加到之前的动作上。

**例子** 1

下面的例子把 css(), slideUp(), and slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，然后向下滑动：

```
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_chaining)

如果需要，我们也可以添加多个方法调用。

提示：当进行链接时，代码行会变得很差。不过，jQuery 在语法上不是很严格；您可以按照希望的格式来写，包含折行和缩进。

**例子** 2

这样写也可以运行：

```
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_chaining2)

jQuery 会抛掉多余的空格，并按照一行长代码来执行上面的代码行。

# jQuery操作HTML样式

## 获得内容和属性

**jQuery 拥有可操作 HTML 元素和属性的强大方法。**

### jQuery DOM 操作

jQuery 中非常重要的部分，就是操作 DOM 的能力。

jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易。

提示：DOM = Document Object Model（文档对象模型）

DOM 定义访问 HTML 和 XML 文档的标准：

“W3C 文档对象模型独立于平台和语言的界面，允许程序和脚本动态访问和更新文档的内容、结构以及样式。”

### 获得内容 - text()、html() 以及 val()

三个简单实用的用于 DOM 操作的 jQuery 方法：

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

下面的例子演示如何通过 jQuery text() 和 html() 方法来获得内容：

**实例**

```
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_html_get)

下面的例子演示如何通过 jQuery val() 方法获得输入字段的值：

**实例**

```
$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_val_get)

### 获取属性 - attr()

jQuery attr() 方法用于获取属性值。

下面的例子演示如何获得链接中 href 属性的值：

**实例**

```
$("button").click(function(){
  alert($("#w3s").attr("href"));
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_attr_get)

下一章会讲解如何设置（改变）内容和属性值。

## 设置内容和属性

### 设置内容 - text()、html() 以及 val()

我们将使用前一章中的三个相同的方法来设置内容：

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

下面的例子演示如何通过 text()、html() 以及 val() 方法来设置内容：

**实例**

```
$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
  $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
  $("#test3").val("Dolly Duck");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_html_set)

### text()、html() 以及 val() 的回调函数

上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

下面的例子演示带有回调函数的 text() 和 html()：

**实例**

```
$("#btn1").click(function(){
  $("#test1").text(function(i,origText){
    return "Old text: " + origText + " New text: Hello world!
    (index: " + i + ")";
  });
});

$("#btn2").click(function(){
  $("#test2").html(function(i,origText){
    return "Old html: " + origText + " New html: Hello <b>world!</b>
    (index: " + i + ")";
  });
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_html_callback)

### 设置属性 - attr()

jQuery attr() 方法也用于设置/改变属性值。

下面的例子演示如何改变（设置）链接中 href 属性的值：

**实例**

```
$("button").click(function(){
  $("#w3s").attr("href","http://www.w3school.com.cn/jquery");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_attr_set)

attr() 方法也允许您同时设置多个属性。

下面的例子演示如何同时设置 href 和 title 属性：

**实例**

```
$("button").click(function(){
  $("#w3s").attr({
    "href" : "http://www.w3school.com.cn/jquery",
    "title" : "W3School jQuery Tutorial"
  });
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_attr_set2)

**attr**() 的回调函数

jQuery 方法 attr()，也提供回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

下面的例子演示带有回调函数的 attr() 方法：

**实例**

```
$("button").click(function(){
  $("#w3s").attr("href", function(i,origValue){
    return origValue + "/jquery";
  });
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_attr_callback)

## 添加元素

**通过 jQuery，可以很容易地添加新元素/内容。**

### 添加新的 HTML 内容

我们将学习用于添加新内容的四个 jQuery 方法：

- append() - 在被选元素的结尾插入内容
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容

### jQuery append() 方法

jQuery append() 方法在被选元素的结尾插入内容。

**实例**

```
$("p").append("Some appended text.");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_html_append)

### jQuery prepend() 方法

jQuery prepend() 方法在被选元素的开头插入内容。

**实例**

```
$("p").prepend("Some prepended text.");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_html_prepend)

### 通过 append() 和 prepend() 方法添加若干新元素

在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。

不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。

在下面的例子中，我们创建若干个新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）：

**实例**

```
function appendText()
{
var txt1="<p>Text.</p>";               // 以 HTML 创建新元素
var txt2=$("<p></p>").text("Text.");   // 以 jQuery 创建新元素
var txt3=document.createElement("p");  // 以 DOM 创建新元素
txt3.innerHTML="Text.";
$("p").append(txt1,txt2,txt3);         // 追加新元素
}
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_html_append2)

### jQuery after() 和 before() 方法

jQuery after() 方法在被选元素之后插入内容。

jQuery before() 方法在被选元素之前插入内容。

**实例**

```
$("img").after("Some text after");

$("img").before("Some text before");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_html_after)

### 通过 after() 和 before() 方法添加若干新元素

after() 和 before() 方法能够通过参数接收无限数量的新元素。可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建新元素。

在下面的例子中，我们创建若干新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 after() 方法把这些新元素插到文本中（对 before() 同样有效）：

**实例**

```
function afterText()
{
var txt1="<b>I </b>";                    // 以 HTML 创建新元素
var txt2=$("<i></i>").text("love ");     // 通过 jQuery 创建新元素
var txt3=document.createElement("big");  // 通过 DOM 创建新元素
txt3.innerHTML="jQuery!";
$("img").after(txt1,txt2,txt3);          // 在 img 之后插入新元素
}
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_html_after2)

## 删除元素

**通过 jQuery，可以很容易地删除已有的 HTML 元素。**

### 删除元素/内容

如需删除元素和内容，一般可使用以下两个 jQuery 方法：

- remove() - 删除被选元素（及其子元素）
- empty() - 从被选元素中删除子元素

### jQuery remove() 方法

jQuery remove() 方法删除被选元素及其子元素。

**实例**

```
$("#div1").remove();
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_remove)

### jQuery empty() 方法

jQuery empty() 方法删除被选元素的子元素。

**实例**

```
$("#div1").empty();
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_empty)

### 过滤被删除的元素

jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

该参数可以是任何 jQuery 选择器的语法。

下面的例子删除 class="italic" 的所有 <p> 元素：

**实例**

```
$("p").remove(".italic");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_remove2)

##  获取并设置 CSS 类

**通过 jQuery，可以很容易地对 CSS 元素进行操作。**

### jQuery 操作 CSS

jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

### 实例样式表

下面的样式表将用于本页的所有例子：

```
.important
{
font-weight:bold;
font-size:xx-large;
}

.blue
{
color:blue;
}
```

### jQuery addClass() 方法

下面的例子展示如何向不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素：

**实例**

```
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_addclass)

您也可以在 addClass() 方法中规定多个类：

**实例**

```
$("button").click(function(){
  $("#div1").addClass("important blue");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_addclass2)

### jQuery removeClass() 方法

下面的例子演示如何不同的元素中删除指定的 class 属性：

**实例**

```
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_removeclass)

### jQuery toggleClass() 方法

下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

**实例**

```
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dom_toggleclass)



## css() 方法

### jQuery css() 方法

css() 方法设置或返回被选元素的一个或多个样式属性。

### 返回 CSS 属性

如需返回指定的 CSS 属性的值，请使用如下语法：

```
css("propertyname");
```

下面的例子将返回首个匹配元素的 background-color 值：

**实例**

```
$("p").css("background-color");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_css_getcolor)

### 设置 CSS 属性

如需设置指定的 CSS 属性，请使用如下语法：

```
css("propertyname","value");
```

下面的例子将为所有匹配元素设置 background-color 值：

**实例**

```
$("p").css("background-color","yellow");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_css_setcolor)

### 设置多个 CSS 属性

如需设置多个 CSS 属性，请使用如下语法：

```
css({"propertyname":"value","propertyname":"value",...});
```

下面的例子将为所有匹配元素设置 background-color 和 font-size：

**实例**

```
$("p").css({"background-color":"yellow","font-size":"200%"});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_css_set_multiple)jQuery css() 方法

我们将在下一章讲解 jQuery css() 方法。

##  尺寸

**通过 jQuery，很容易处理元素和浏览器窗口的尺寸。**

### jQuery 尺寸 方法

jQuery 提供多个处理尺寸的重要方法：

- width()
- height()
- innerWidth()
- innerHeight()
- outerWidth()
- outerHeight()

### jQuery width() 和 height() 方法

width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

下面的例子返回指定的 <div> 元素的宽度和高度：

**实例**

```
$("button").click(function(){
  var txt="";
  txt+="Width: " + $("#div1").width() + "</br>";
  txt+="Height: " + $("#div1").height();
  $("#div1").html(txt);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dim_width_height)

### jQuery innerWidth() 和 innerHeight() 方法

innerWidth() 方法返回元素的宽度（包括内边距）。

innerHeight() 方法返回元素的高度（包括内边距）。

下面的例子返回指定的 <div> 元素的 inner-width/height：

**实例**

```
$("button").click(function(){
  var txt="";
  txt+="Inner width: " + $("#div1").innerWidth() + "</br>";
  txt+="Inner height: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dim_innerwidth_innerheight)

### jQuery outerWidth() 和 outerHeight() 方法

outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。

下面的例子返回指定的 <div> 元素的 outer-width/height：

**实例**

```
$("button").click(function(){
  var txt="";
  txt+="Outer width: " + $("#div1").outerWidth() + "</br>";
  txt+="Outer height: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dim_outerwidth_outerheight)

outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）。

outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）。

**实例**

```
$("button").click(function(){
  var txt="";
  txt+="Outer width (+margin): " + $("#div1").outerWidth(true) + "</br>";
  txt+="Outer height (+margin): " + $("#div1").outerHeight(true);
  $("#div1").html(txt);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dim_outerwidth_outerheight2)

### jQuery - 更多的 width() 和 height()

下面的例子返回文档（HTML 文档）和窗口（浏览器视口）的宽度和高度：

**实例**

```
$("button").click(function(){
  var txt="";
  txt+="Document width/height: " + $(document).width();
  txt+="x" + $(document).height() + "\n";
  txt+="Window width/height: " + $(window).width();
  txt+="x" + $(window).height();
  alert(txt);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dim_width_height2)

下面的例子设置指定的 <div> 元素的宽度和高度：

**实例**

```
$("button").click(function(){
  $("#div1").width(500).height(500);
});
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jquery_dim_width_height_set)

## jQuery HTML 参考手册

如需有关 jQuery HTML 方法的完整内容，请访问以下参考手册：

- [jQuery 文档操作](http://www.w3school.com.cn/jquery/jquery_ref_manipulation.asp)
- [jQuery 属性操作](http://www.w3school.com.cn/jquery/jquery_ref_attributes.asp)
- [jQuery CSS 操作](http://www.w3school.com.cn/jquery/jquery_ref_css.asp)







# jQuery特殊属性操作

## val方法

> val方法用于设置和获取表单元素的值，例如input、textarea的值

```javascript
//设置值
$("#name").val(“张三”);
//获取值
$("#name").val();
```

【案例：京东搜索.html】

## html方法与text方法

> html方法相当于innerHTML  text方法相当于innerText

```javascript
//设置内容
$(“div”).html(“<span>这是一段内容</span>”);
//获取内容
$(“div”).html()

//设置内容
$(“div”).text(“<span>这是一段内容</span>”);
//获取内容
$(“div”).text()
```

区别：html方法会识别html标签，text方法会那内容直接当成字符串，并不会识别html标签。

## width方法与height方法

> 设置或者获取高度

```javascript
//带参数表示设置高度
$(“img”).height(200);
//不带参数获取高度
$(“img”).height();

```

获取网页的可视区宽高

```javascript
//获取可视区宽度
$(window).width();
//获取可视区高度
$(window).height();
```

## scrollTop与scrollLeft

> 设置或者获取垂直滚动条的位置

```javascript
//获取页面被卷曲的高度
$(window).scrollTop();
//获取页面被卷曲的宽度
$(window).scrollLeft();
```

【案例：仿腾讯固定菜单栏案例】
【案例：小火箭返航案例】

## offset方法与position方法

> offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素的位置。

```javascript
//获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
//获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```

# jQuery事件机制

> JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

## jQuery事件发展历程(了解)

简单事件绑定>>bind事件绑定>>delegate事件绑定>>on事件绑定(推荐)

> 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
```

缺点：不能同时注册多个事件

> bind方式注册事件

```javascript
//第一个参数：事件类型
//第二个参数：事件处理程序
$("p").bind("click mouseenter", function(){
    //事件响应方法
});
```

缺点：不支持动态事件绑定

> delegate注册委托事件

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$(".parentBox").delegate("p", "click", function(){
    //为 .parentBox下面的所有的p标签绑定事件
});
```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了

> on注册事件

## on注册事件(重点)

> jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
>
> 最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件

```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
$(selector).on( "click", function() {});
```

on注册委托事件

```javascript
// 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on( "click",“span”, function() {});

```

on注册事件的语法：

```javascript
// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
// 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
// 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
// 第四个参数：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);

```

## 事件解绑

> unbind方式（不用）

```javascript
$(selector).unbind(); //解绑所有的事件
$(selector).unbind("click"); //解绑指定的事件
```

> undelegate方式（不用）

```javascript
$( selector ).undelegate(); //解绑所有的delegate事件
$( selector).undelegate( “click” ); //解绑所有的click事件

```

> off方式（推荐）

```javascript
// 解绑匹配元素的所有事件
$(selector).off();
// 解绑匹配元素的所有click事件
$(selector).off("click");
```

## 触发事件

```javascript
$(selector).click(); //触发 click事件
$(selector).trigger("click");
```

## jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```javascript
//screenX和screenY	对应屏幕最左上角的值
//clientX和clientY	距离页面左上角的位置（忽视滚动条）
//pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）

//event.keyCode	按下的键盘代码
//event.data	存储绑定事件时传递的附加数据

//event.stopPropagation()	阻止事件冒泡行为
//event.preventDefault()	阻止浏览器默认行为
//return false:既能阻止事件冒泡，又能阻止浏览器默认行为。
```

【案例：钢琴版导航（加强）.html】

# jQuery补充知识点

## 链式编程

> 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。

```javascript
end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。
```

【案例：五角星评分案例.html】

## each方法

> jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```javascript
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```

【案例：不同的透明度.html】

## 多库共存

> jQuery使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery可以释放$符的控制权.

```javascript
var c = $.noConflict();//释放$的控制权,并且把$的能力给了c
```



# 插件

## 常用插件

> 插件：jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。
>
> jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。

### jquery.color.js

> animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。

使用插件的步骤

```javascript
1. 引入jQuery文件
2. 引入插件（如果有用到css的话，需要引入css）
3. 使用插件

```

### jquery.lazyload.js

懒加载插件

### jquery.ui.js插件

jQueryUI专指由jQuery官方维护的UI方向的插件。

官方API：[http://api.jqueryui.com/category/all/](http://api.jqueryui.com/category/all/)

其他教程：[jQueryUI教程](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)

基本使用:

```javascript
2.	1.	引入jQueryUI的样式文件
2.	引入jQuery
3.	引入jQueryUI的js文件
4.	使用jQueryUI功能
```

使用jquery.ui.js实现新闻模块的案例

## 制作jquery插件

> 原理：jquery插件其实说白了就是给jquery对象增加一个新的方法，让jquery对象拥有某一个功能。

```javascript
//通过给$.fn添加方法就能够扩展jquery对象
$.fn. pluginName = function() {};
```

制作手风琴插件

