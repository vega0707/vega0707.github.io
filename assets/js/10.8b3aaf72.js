(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"正则指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则指引","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则指引")]),a._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("h3",{attrs:{id:"一些絮絮叨叨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些絮絮叨叨","aria-hidden":"true"}},[a._v("#")]),a._v(" 一些絮絮叨叨")]),a._v(" "),s("p",[a._v("说到正则表达式，一开始其实是属于知识盲点，大概只知道转意，* . ? + 这些常用的符号意思。很多人眼里，这个神器大概就是用的时候到网上搜一下现成的即可，然而很多时候我们往往会因此付出很多的时间，全是因为不理解或者不知道如何构造一个我们想要的正则表达式。")]),a._v(" "),s("p",[a._v("一开始我也是处于这种一知半解的状态，网络上通常搜索正则表达式都是点开菜鸟教程，然而只是看一下还是不会，也记不住（当然很多东西没必要全都记下来，脑子毕竟是有限的），因此有体系的学习显然会好很多。")]),a._v(" "),s("p",[a._v("记得之前有一次电话面试，是某银行的面试官，问的稍微底层，最后一个问题就是：“你知道多少正则表达式的特殊符号，代表什么意思”，当时内心是你懂的。只是那时候还是认为这东西用的时候再查即可，直到现在手上的项目需要做爬虫的时候才发现此乃神器。")]),a._v(" "),s("h3",{attrs:{id:"一次误操作引出正则的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一次误操作引出正则的用法","aria-hidden":"true"}},[a._v("#")]),a._v(" 一次误操作引出正则的用法")]),a._v(" "),s("p",[a._v("开发的朋友想必都了解过阿里的开发规范文档，其中有一条是包名必须全小写。恰好我又是一个有强迫症的处女座，而当我接手现在项目的时候偏偏有一个包名是大写的存在。")]),a._v(" "),s("p",[a._v("其包名大概为：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aaa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bbb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ccc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在idea诡异的修改了文件夹名称之后package并没有一起被修改，因此此包下所有的类修改成了小写，但是引用这些类的类全都报错。由于项目已经开发了一段时间，显然我们不易去一个一个修改，这样也太不程序员了吧。怎么做呢？当然用idea的全局替换了。（快捷键 Ctrl + Shift + R）")]),a._v(" "),s("p",[a._v("当时替换的目标是 aaa.bbb.ccc.DD. 注意最后这个点，然后替换后是 aaa.bbb.ccc.dd 这里少了个点，因此所有引用这个包下文件的import全都变成了 aaa.bbb.ccc.ddee这种形式。这时候如果我再用替换去匹配aaa.bbb.ccc.dd 然后换成aaa.bbb.ccc.dd. 那么这个dd包下面的类又会变成 aaa.bbb.ccc.dd.; (当然，我们可以通过区别import和package来规避，但是我现在想引出的是当时的做法，也是利用正则来处理)")]),a._v(" "),s("p",[a._v("那用正则怎么处理呢？如果我采取aaa.bbb.ccc.dd[a-z]这种方式，替换成aaa.bbb.ccc.dd.[a-z]显然是错的，由于当时我正好读了这本《"),s("strong",[a._v("正则指引")]),a._v("》，因此用了环视解决了问题，具体怎么用呢？后面再叙。")]),a._v(" "),s("h2",{attrs:{id:"从字符组开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从字符组开始","aria-hidden":"true"}},[a._v("#")]),a._v(" 从字符组开始")]),a._v(" "),s("h3",{attrs:{id:"普通字符组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通字符组","aria-hidden":"true"}},[a._v("#")]),a._v(" 普通字符组")]),a._v(" "),s("h4",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),s("blockquote",[s("p",[a._v("在正则表达式中，它表示“在同一个位置可能出现的各种字符”")])]),a._v(" "),s("h4",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("p",[a._v("比如[ab]表示这个位置可以出现a或者b，[1,2,3]表示这个位置可以是1或者2或者3")]),a._v(" "),s("h3",{attrs:{id:"范围表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范围表示法","aria-hidden":"true"}},[a._v("#")]),a._v(" 范围表示法")]),a._v(" "),s("p",[a._v("显然如果要表示可以出现数字，我们用[0123456789]之类的来表示太过于繁琐，更不用说表示所有的字符之类的，因此正则提供了范围表示法：[x-y]表示从x到y整个范围内的字符（这个范围涉及编码，刨去ASCII码外使用时要特别注意，因为很多编码还是兼容ASCII码的，也有不兼容的同样在遇到的时候需要注意）")]),a._v(" "),s("p",[a._v("所以表示数字可以用[0-9],表示小写字母用[a-z]")]),a._v(" "),s("h3",{attrs:{id:"元字符与转义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元字符与转义","aria-hidden":"true"}},[a._v("#")]),a._v(" 元字符与转义")]),a._v(" "),s("p",[a._v("在正则中一些特殊符号被称为元字符，就是所谓的特殊符号，也可以理解为我们编程语言中的关键字，在此不多叙述，如果想要匹配这些特殊符号，有两种方式：")]),a._v(" "),s("ol",[s("li",[a._v("如果这个符号有作用域，那么我们只要在其作用域之外即可，比如^符号，放在字符组 [ 后面，表示非的意思，当时在别的位置的时候就表示^符号的意思。")]),a._v(" "),s("li",[a._v("用转义字符 \\ ,这个就比较基础了，不多叙述。")])]),a._v(" "),s("h3",{attrs:{id:"排除型字符组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排除型字符组","aria-hidden":"true"}},[a._v("#")]),a._v(" 排除型字符组")]),a._v(" "),s("p",[a._v("这里提到了^符号，在元字符中提到了排除型字符组，因此就不说了，另外^符号放在正则表达式开头还表示字符串开始位置，比如abcdefg这个字符串，我们要匹配开头是bcd的字符串那正则表达式就应该是^bcd，显然abcd开头的不符合这个表达式。同样，还有一个$表示字符串末尾。")]),a._v(" "),s("h3",{attrs:{id:"字符组简记法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符组简记法","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符组简记法")]),a._v(" "),s("p",[a._v("常见的字符组简记法")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[a._v("表达式")]),a._v(" "),s("th",[a._v("等价于")]),a._v(" "),s("th",[a._v("表示")])])]),a._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[a._v("\\d")]),a._v(" "),s("td",[a._v("[0-9]")]),a._v(" "),s("td",[a._v("digit")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[a._v("\\w")]),a._v(" "),s("td",[a._v("[0-9a-zA-Z]")]),a._v(" "),s("td",[a._v("word")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[a._v("\\s")]),a._v(" "),s("td",[a._v("[ \\t\\r\\n\\v\\f\\t]")]),a._v(" "),s("td",[a._v("space")])])])]),a._v(" "),s("p",[a._v("另外它们的大写表示他们的反义，可以用大小写结合的方式表达“任意字符”")]),a._v(" "),s("h3",{attrs:{id:"java中的字符组运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java中的字符组运算","aria-hidden":"true"}},[a._v("#")]),a._v(" java中的字符组运算")]),a._v(" "),s("p",[a._v("java提供了逻辑符号可以进行正则表达式的计算，大概就是[abc] && [xyz] 的形式，表示要同时满足，|| 和 ！我没有尝试过，因为正则表达式自带了| 和 ^的用法。")]),a._v(" "),s("p",[a._v("此外还有POSIX字符组简记法，java也是支持的，具体在此不表，用时再搜。")]),a._v(" "),s("h2",{attrs:{id:"量词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量词","aria-hidden":"true"}},[a._v("#")]),a._v(" 量词")]),a._v(" "),s("h3",{attrs:{id:"定长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定长","aria-hidden":"true"}},[a._v("#")]),a._v(" 定长")]),a._v(" "),s("p",[a._v("定长{x}的形式，比如{2}就表示前面的字符出现2次。")]),a._v(" "),s("h3",{attrs:{id:"不定长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不定长","aria-hidden":"true"}},[a._v("#")]),a._v(" 不定长")]),a._v(" "),s("p",[a._v("不定长{m,n}的形式，m是下限，n是上限（均为闭区间），缺省的话表示以上和以下。")]),a._v(" "),s("h3",{attrs:{id:"常用量词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用量词","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用量词")]),a._v(" "),s("p",[a._v("常用量词 * 表示 {0,} ， + 表示 {1,} ， ? 表示 {0,1}。")]),a._v(" "),s("h3",{attrs:{id:"点号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点号","aria-hidden":"true"}},[a._v("#")]),a._v(" 点号")]),a._v(" "),s("p",[a._v("一般在学正则的时候我们都会学到‘.’号代表任意字符，但是实际上"),s("strong",[a._v("一般情况下")]),a._v("它不能匹配换行符。")]),a._v(" "),s("h3",{attrs:{id:"匹配优先和忽略优先（有用）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配优先和忽略优先（有用）","aria-hidden":"true"}},[a._v("#")]),a._v(" 匹配优先和忽略优先（有用）")]),a._v(" "),s("p",[a._v('比如我们在匹配一个字符串 abcefghdujddd 时只想要到第一个d的字符串，如果写成正则表达式 ".*d"就会匹配整个字符串，这就是匹配优先。')]),a._v(" "),s("p",[a._v("如果想要匹配到第一个满足条件的字符串，只要在*后面加上一个？，这就是忽略优先。其底层在与正则表达式匹配算法的区别。可以理解为没用忽略优先时，正则会先匹配 . 是否匹配上，只有字符串不符合匹配的时候才会开始回溯，看在之前符合的条件下d是否能匹配上。而忽略优先则是先匹配d，如果匹配上则结束，否则再来看是否复合.的匹配。")]),a._v(" "),s("p",[a._v("忽略优先的用法就是在不定长两次后加?")]),a._v(" "),s("h2",{attrs:{id:"括号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#括号","aria-hidden":"true"}},[a._v("#")]),a._v(" 括号")]),a._v(" "),s("h3",{attrs:{id:"分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分组","aria-hidden":"true"}},[a._v("#")]),a._v(" 分组")]),a._v(" "),s("p",[a._v("其实就像数学一样，这个括号就代表一个计算结果，比如我们要匹配长度为5的数字或者长度为9个数字加一个字母的字符串就可以用\\d{5}(\\d{4}[a-zA-Z])?来表示。（现在写正则信手捏来，不愧是正则小王子，嘿嘿）")]),a._v(" "),s("h3",{attrs:{id:"多选结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多选结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 多选结构")]),a._v(" "),s("p",[a._v("上面的例子也可以用 (\\d{5}|\\d{9}[a-zA-Z])来表示，|表示多选，也就是或的意思，前面提到过。")]),a._v(" "),s("h3",{attrs:{id:"引用分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用分组","aria-hidden":"true"}},[a._v("#")]),a._v(" 引用分组")]),a._v(" "),s("p",[a._v("书上举了一个例子特别好，比如一个日期字符串 "),s("em",[a._v("2019-10-07")]),a._v(" 我们要提取年月日，就可以用(\\d{4})-(\\d{2})-(\\d{2})匹配，然后在获取的时候用group(1)获取年，group(2)获取月，group(3)获取日。")]),a._v(" "),s("p",[a._v("事实上正则表达式本身会默认为下表0的分组，因此当一个表达式没用括号，例如 "),s("em",[a._v("\\d{5}|\\d{9}[a-zA-Z]")]),a._v(" 那么它同样也是可以匹配的，用group(0)可以获得匹配的数据，相关的group的api在java的matcher类中有体现，缺省表示0。源码如下：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("其中引用的编号只是与出现的顺序有关。")]),a._v(" "),s("h3",{attrs:{id:"反向引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向引用","aria-hidden":"true"}},[a._v("#")]),a._v(" 反向引用")]),a._v(" "),s("p",[a._v("如果我们遇到一个情况，就需要匹配有重复字母的单词，比如hello,sleep诸如此类，我们不知道是l重复还是e重复，此时就可以用反向引用来解决问题。其格式是(a-z)\\1,这里1表示下标为1的分组匹配的字符串（如果用于替换，这里的\\1要写成$1,这是java的用法，不同的语言有不同的用法，不多叙述，用到再查）。")]),a._v(" "),s("p",[a._v("在java中，如果遇到捕获第10个分组写成\\10又会产生二义性，即也可以理解为\\1和0，所以规则是如果有下标为10的分组就代表10，如果没有就代表1.")]),a._v(" "),s("h3",{attrs:{id:"命名分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名分组","aria-hidden":"true"}},[a._v("#")]),a._v(" 命名分组")]),a._v(" "),s("p",[a._v("捕获分组用数字来标识显然有许多问题，因此出现了命名分组。")]),a._v(" "),s("p",[a._v("jdk7开始支持命名分组，如(\\d{4})-(\\d{2})-(\\d{2})这个就可以写成(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})。matcher中的源码：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" group "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMatchedGroupIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("group"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("group"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getSubSequence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("group "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("group "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("在反向引用中使用命名分组的语法是\\k<name>,替换中的语法是${name},name就是<y>中的y，很好理解。")]),a._v(" "),s("h3",{attrs:{id:"非捕获分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非捕获分组","aria-hidden":"true"}},[a._v("#")]),a._v(" 非捕获分组")]),a._v(" "),s("p",[a._v("由于只要出现了括号，括号内的内容就会被保存起来，如果遇到追求效率的情况这样显然不好，因此有非捕获分组的写法：")]),a._v(" "),s("p",[a._v("("),s("strong",[a._v("?:")]),a._v("....)")]),a._v(" "),s("h2",{attrs:{id:"断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断言","aria-hidden":"true"}},[a._v("#")]),a._v(" 断言")]),a._v(" "),s("h3",{attrs:{id:"单词边界问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单词边界问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 单词边界问题")]),a._v(" "),s("p",[a._v("假如我们要替换age这个单词，此时文本中出现的是package，那也会匹配到，显然就错了。如果你想用age空格的方式去替换，那么package is 这个字符串可能会变成pack[你要替换的]is，也不行。因此我们需要的是一个定位，而不是一个匹配。")]),a._v(" "),s("p",[a._v("这个问题我们可以用\\b来解决，\\bage\\b表示age左右必须不是单词字符。")]),a._v(" "),s("h3",{attrs:{id:"环视（很好用）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环视（很好用）","aria-hidden":"true"}},[a._v("#")]),a._v(" 环视（很好用）")]),a._v(" "),s("p",[a._v("环视分4种")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名字")]),a._v(" "),s("th",[a._v("记法")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("肯定顺序环视")]),a._v(" "),s("td",[a._v("(?=...)")])]),a._v(" "),s("tr",[s("td",[a._v("否定顺序环视")]),a._v(" "),s("td",[a._v("(?!...)")])]),a._v(" "),s("tr",[s("td",[a._v("肯定逆序环视")]),a._v(" "),s("td",[a._v("(?<=...)")])]),a._v(" "),s("tr",[s("td",[a._v("否定逆序环视")]),a._v(" "),s("td",[a._v("(?<!...)")])])])]),a._v(" "),s("p",[a._v("回到一开始提到的错误操作中，为了只匹配aaa.bbb.ccddd这种情况，而不匹配到aaa.bbb.cc; 我采用了环视aaa.bbb.cc(?!;)进行匹配替换成功。")]),a._v(" "),s("p",[a._v("java支持顺序环视，对逆序环视也支持，但是必须有上限。简而言之，可以判断之前是不是abc，但是不能判断之前是不是有两个以上的c。")]),a._v(" "),s("h2",{attrs:{id:"匹配模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 匹配模式")]),a._v(" "),s("p",[a._v("模式的指定有2种，一种是修饰符指定，在表达式的前面用(?modifier)，另一种是预定义常量指定")]),a._v(" "),s("p",[a._v("要用修饰符指定多个模式，写法是(?modifier1modifier2...)")]),a._v(" "),s("p",[a._v('java中的预定义用法Pattern.compile("string", Pattern.CASE_INSENSITIVE ),多种模式一起使用用 | 运算')]),a._v(" "),s("p",[a._v("常用匹配模式有4种：")]),a._v(" "),s("h3",{attrs:{id:"不区分大小写模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不区分大小写模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 不区分大小写模式")]),a._v(" "),s("p",[a._v("修饰符指定 (?i)")]),a._v(" "),s("p",[a._v("java的预定义常量 Pattern.CASE_INSENSITIVE = 0x02;")]),a._v(" "),s("h3",{attrs:{id:"单行模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单行模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 单行模式")]),a._v(" "),s("p",[a._v("修饰符指定 (?s)")]),a._v(" "),s("p",[a._v("java的预定义常量 Pattern.DOTALL = 0x20;")]),a._v(" "),s("p",[a._v("该模式下，. 号可以匹配换行符")]),a._v(" "),s("h3",{attrs:{id:"多行模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多行模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 多行模式")]),a._v(" "),s("p",[a._v("修饰符指定 (?m)")]),a._v(" "),s("p",[a._v("java的预定义常量 Pattern.MULTILINE = 0x08;")]),a._v(" "),s("p",[a._v("多行模式影响的是^ 和 $对字符串开始和结束位置的作用。在这个模式中^可以匹配每行的起始，$同理。")]),a._v(" "),s("h3",{attrs:{id:"注释模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 注释模式")]),a._v(" "),s("p",[a._v("修饰符指定 (?# 这里是注释内容) java不支持")]),a._v(" "),s("p",[a._v("java的预定义常量 Pattern.COMMENTS = 0x04;")]),a._v(" "),s("p",[a._v("源码中注释是这样说的：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Permits whitespace and comments in pattern.\n     *\n     * <p> In this mode, whitespace is ignored, and embedded comments starting\n     * with <tt>#</tt> are ignored until the end of a line.\n     *\n     * <p> Comments mode can also be enabled via the embedded flag\n     * expression&nbsp;<tt>(?x)</tt>.\n     */")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"失效修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#失效修饰符","aria-hidden":"true"}},[a._v("#")]),a._v(" 失效修饰符")]),a._v(" "),s("p",[a._v("修饰符也有作用域，如果想让它失效，可以用(?-modifier)修饰，预定义常量的方式目测不能改。而"),s("strong",[a._v("模式修饰符具有更高级的优先级")]),a._v("，如果指定的时候产生冲突，以修饰符为准。")]),a._v(" "),s("h2",{attrs:{id:"转义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义","aria-hidden":"true"}},[a._v("#")]),a._v(" 转义")]),a._v(" "),s("p",[a._v("关于转义，之前也多有提到。这里就提一下忽略元字符的写法：\\Q...\\E")]),a._v(" "),s("h3",{attrs:{id:"优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级","aria-hidden":"true"}},[a._v("#")]),a._v(" 优先级")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("优先级")]),a._v(" "),s("th",[a._v("组合")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("1")]),a._v(" "),s("td",[a._v("()")])]),a._v(" "),s("tr",[s("td",[a._v("2")]),a._v(" "),s("td",[a._v("* ? +")])]),a._v(" "),s("tr",[s("td",[a._v("3")]),a._v(" "),s("td",[a._v("abc")])]),a._v(" "),s("tr",[s("td",[a._v("4")]),a._v(" "),s("td",[a._v("a| bc")])])])]),a._v(" "),s("p",[a._v("数字越小，越优先。")]),a._v(" "),s("h2",{attrs:{id:"书中的后两部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#书中的后两部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 书中的后两部分")]),a._v(" "),s("p",[a._v("前文是我总结的书的第一部分内容，也是相对重要的部分。第二部分主要说的是关于Unicode编码和正则引擎原理，第三部分是各种语言中正则的用法。在此不表。有兴趣也可以联系我一起探讨。当然本人远远谈不上足以探讨很深的水平。")]),a._v(" "),s("p",[a._v("最后必须感谢作者写了这样一本好书，对本人启发很大。例如项目中遇到在文本的特定位置插入特定的数值时我就借鉴了很多正则的方式，包括用正则定位标记的位置然后替换，自定义标记的定义等等。")]),a._v(" "),s("p",{attrs:{align:"right"}},[a._v("—— Vega 2019.10.7")])])}),[],!1,null,null,null);t.default=e.exports}}]);