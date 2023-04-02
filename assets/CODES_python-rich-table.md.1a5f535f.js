import{_ as s,o as n,c as a,N as l}from"./chunks/framework.5eb51829.js";const p="/assets/docs/python-rich.png",e="/assets/docs/rich-table-eg.png",d=JSON.parse('{"title":"自动生成字符表格","description":"","frontmatter":{"title":"自动生成字符表格","updateTime":"2023/03/11","tags":"Python|table"},"headers":[],"relativePath":"CODES/python-rich-table.md","lastUpdated":1680405223000}'),o={name:"CODES/python-rich-table.md"},t=l(`<h2 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-label="Permalink to &quot;Intro&quot;">​</a></h2><p>作为技术人员，不管是主动的还是被动的，我们时常要写文档。而我们更乐意使用 Markdown 来完成文档工作——简洁且维护方便。如本博客，所有的文章都是基于 Markdown 来编写的。</p><p>我们的许多笔记工具，对 Markdown 的支持度也越来越高，有的还在 Markdown 的基于上进行优化，使内容显示更美观，操作更方便，并支持更多内容和媒体的显示，如视频、流程图、轻量富文本、复杂表格。</p><p>Markdown 原本就支持表格内容，但没有辅助工具的话，源码的可读比较差，而且稍复杂的表格，就实现不了了。</p><p>比如我想使用表格画一个简单的组件结构图，如果可以用字符形式就把这个图画出来，那是非常便于记录和传播的事。使用文字制表符是个好办法，可是如果手动来码，得累死，而且大一点的变更就要重新画。</p><p>我找到一个自动生成的工具：<a href="https://github.com/Textualize/rich" target="_blank" rel="noreferrer">rich</a></p><p>这是一个 Python 库，而且功能远不止生成表格。但本文只着重说说表格的操作。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>假定你已安装好 Python。以下是使用 <code>pip</code> 安装 rich 库：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rich</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装好后，可以在终端中测试一下：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rich</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后我发现作者把这个库能做的大部分效果都秀了一把：</p><p><img src="`+p+`" alt="screenshot"></p><h2 id="制作表格" tabindex="-1">制作表格 <a class="header-anchor" href="#制作表格" aria-label="Permalink to &quot;制作表格&quot;">​</a></h2><p>新建一个 <code>.py</code> 文件：</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># table.py</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> rich</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Console</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> rich</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">table </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cell </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">show_header</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">False,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">show_lines</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">cell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Title of Sub Table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Title Two</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">cell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">You can add more,</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">if you want</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">subTable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">show_header</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">False)</span></span>
<span class="line"><span style="color:#A6ACCD;">subTable</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Left</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">Column</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> cell</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Right</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">Column</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">table </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Title of Table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_row</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">subTable</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Console</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>以上是一个嵌套表格。在终端中执行一下：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table.py</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>生成效果如下：<br><img src="`+e+`" alt="screenshot"></p><p>好了，现在我可以非常方便地将这个表格的内容复制到文档中：</p><div class="language-vim line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓</span></span>
<span class="line"><span style="color:#A6ACCD;">┃ Title of Table                                           ┃</span></span>
<span class="line"><span style="color:#A6ACCD;">┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ┌────────┬────────────────────────────────────┬────────┐ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ Left   │ ┌────────────────────┬───────────┐ │ Right  │ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ Column │ │ Title of Sub Table │ Title Two │ │ Column │ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │        │ ├────────────────────┼───────────┤ │        │ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │        │ │ You can add </span><span style="color:#FFCB6B;">more</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  │           │ │        │ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │        │ │ </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> you want        │           │ │        │ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │        │ └────────────────────┴───────────┘ │        │ │</span></span>
<span class="line"><span style="color:#A6ACCD;">│ └────────┴────────────────────────────────────┴────────┘ │</span></span>
<span class="line"><span style="color:#A6ACCD;">└──────────────────────────────────────────────────────────┘</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>保留 <code>.py</code> 的源文件，后面修改时也比较容易。</p><p>目前发现的唯一不足，就是它会受到 markdown 显示工具/网页使用的字体影响。如果未设置合适的等宽字体，显示效果就会与预期不太一样。</p>`,24),r=[t];function c(i,y,D,F,A,C){return n(),a("div",null,r)}const u=s(o,[["render",c]]);export{d as __pageData,u as default};