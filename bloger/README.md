md文档笔记转转HTML笔记整理

使用typora 的>段落>内容目录>最上面
使用typora的导出功能导出HTML格式文件,
然后添加自定义js,
导入自定义的css文件 note
统一报这段代码全部加入每个页面
插入到title标题下直到到body第一个标签
```
<div id='write' class='is-node'>
```
```
    <link rel="stylesheet" href="css/note.css">
    <script src="js/jquery-1.12.4.js.js"></script>
    <!--<script src="https://code.jquery.com/jquery-2.2.4.min.js">-->
    <script src="js/mdAndHtml.js"></script>

    <link rel="stylesheet" href="css/base.css">

    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="js/jquery-1.12.4.js.js"></script>
    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    <script src="js/base.js"></script>
</head>
<body>
<!-- 导航条开始 -->
<div id="nav-placeholder"></div>
<div class="left-div">

</div>
<div class="right-div">

</div>
```
