import{_ as s,o as n,c as a,a as l}from"./app.5e5d65e0.js";const C=JSON.parse('{"title":"ECHARTS 代码片段","description":"","frontmatter":{"title":"ECHARTS 代码片段","updateTime":"2019/01/25"},"headers":[{"level":2,"title":"图表初始化或重载配置","slug":"图表初始化或重载配置","link":"#图表初始化或重载配置","children":[]},{"level":2,"title":"图表响应页面宽度变化","slug":"图表响应页面宽度变化","link":"#图表响应页面宽度变化","children":[]}],"relativePath":"FE/echarts.md"}'),p={name:"FE/echarts.md"},e=l(`<p><a href="https://echarts.baidu.com/" target="_blank" rel="noreferrer">官方网站</a>上各种示例、配置接口文档、社区生态链接及为详尽。<br> 地图数据很常用，<strong>因故</strong>在官网下架，但还是能找到，比如<a href="https://github.com/apache/incubator-echarts/tree/master/map" target="_blank" rel="noreferrer">GitHub</a></p><h2 id="图表初始化或重载配置" tabindex="-1">图表初始化或重载配置 <a class="header-anchor" href="#图表初始化或重载配置" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> option </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#676E95;">//配置数据，需要预定义好</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CHART_HEIGHT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">650</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echartBox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ecInst </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstanceByDom</span><span style="color:#A6ACCD;">(dom)</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> ecInst) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ecInst</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CHART_HEIGHT</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ecInst</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#F07178;">() </span><span style="color:#676E95;">//清空已有图形缓存</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ecInst</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setOption</span><span style="color:#A6ACCD;">(option)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="图表响应页面宽度变化" tabindex="-1">图表响应页面宽度变化 <a class="header-anchor" href="#图表响应页面宽度变化" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//就是这么简单，却是一个很重要的控制，应该默认就带上</span></span>
<span class="line"><span style="color:#676E95;">//ecInst 假定已获取好</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onresize</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ecInst</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resize</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),o=[e];function r(t,c,i,y,D,F){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{C as __pageData,d as default};
