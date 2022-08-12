import{_ as s,c as n,o as a,a as l}from"./app.4f83a77f.js";const A=JSON.parse('{"title":"JavaScript \u4EE3\u7801\u4F18\u5316","description":"","frontmatter":{"title":"JavaScript \u4EE3\u7801\u4F18\u5316","updateTime":"2019/01/25"},"headers":[{"level":2,"title":"\u591A\u91CD\u6761\u4EF6\u5224\u65AD","slug":"\u591A\u91CD\u6761\u4EF6\u5224\u65AD"},{"level":2,"title":"\u6570\u636E\u5904\u7406","slug":"\u6570\u636E\u5904\u7406"}],"relativePath":"FE/optimise-your-js.md","lastUpdated":1660298843000}'),p={name:"FE/optimise-your-js.md"},o=l(`<p><strong>\u7A0B\u5E8F</strong>\uFF0C\u662F\u4E3A\u4E86\u53D1\u6325\u8BA1\u7B97\u673A\u6700\u5927\u7684\u4F18\u52BF\uFF0C\u80FD\u7528\u6307\u4EE4\u66F4\u7701\u529B\u5730\u3001\u81EA\u52A8\u5730\u5B8C\u6210\u4E00\u7CFB\u5217\u64CD\u4F5C\uFF0C\u8BA9\u7E41\u91CD\u7684\u64CD\u4F5C\u53D8\u5F97\u8F7B\u677E\uFF0C\u8BA9\u5197\u957F\u7684\u4EE3\u7801\u53D8\u5F97\u7B80\u6D01\u6613\u8BFB\uFF0C\u800C\u4E0D\u662F\u8BA9\u6211\u4EEC\u81EA\u5DF1\u7684\u5DE5\u4F5C\u53D8\u5F97\u66F4\u9EBB\u70E6\u3002<br> \u65E0\u8BBA\u4F7F\u7528\u4F55\u79CD\u8BED\u8A00\u548C\u8BED\u6CD5\uFF0C\u5199\u4EE3\u7801\u90FD\u662F\u9700\u8981\u6280\u5DE7\u7684\u3002<br> \u89C1\u8BC6\u8FC7\u4E00\u4E9B\u4EE3\u7801\uFF0C\u7528\u7740\u532A\u5937\u6240\u601D\u7684\u9EBB\u70E6\u65B9\u5F0F\u6765\u5B9E\u73B0\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u64CD\u4F5C\u3002\u6709\u4E00\u4E9B\u5176\u5B9E\u81EA\u5DF1\u4E5F\u66FE\u7528\u8FC7\uFF0C\u{1F60F}\u4F46\u4E00\u65E6\u638C\u63E1\u4E86\u66F4\u597D\u7684\u529E\u6CD5\u540E\uFF0C\u4F1A\u518D\u4E5F\u4E0D\u60F3\u56DE\u53BB\u3002<br> \u5F53\u7136\uFF0C\u4E0D\u65AD\u4F18\u5316\u4EE3\u7801\u7684\u76EE\u7684\uFF0C\u4E0D\u662F\u523B\u610F\u5730\u8FFD\u6C42\u7B80\u77ED\u3002<br> \u4EE3\u7801\u7B80\u6D01\u3001\u53EF\u8BFB\u6027\u3001\u6267\u884C\u6548\u7387\u9700\u8981\u4E00\u4E2A\u5E73\u8861\u3002\u5982\u679C\u5176\u4E2D\u4E00\u65B9\u9762\u53EA\u662F\u7A0D\u5DEE\u4E00\u70B9\uFF0C\u4EE5\u5FAE\u5C0F\u7684\u4EE3\u4EF7\u53EF\u4F7F\u5176\u4ED6\u65B9\u9762\u5927\u5927\u63D0\u9AD8\uFF0C\u90A3\u4E48\u8FD9\u79CD\u4F18\u5316\u5C31\u662F\u503C\u5F97\u7684\u3002\u5982\u679C\u5404\u65B9\u9762\u90FD\u80FD\u63D0\u9AD8\uFF0C\u90A3\u66F4\u662F\u52BF\u5728\u5FC5\u884C\u7684\u4F18\u5316\u4E86\u3002<br> \u4EE5\u4E0B\u4ECE\u4EB2\u81EA\u7ECF\u5386\u7684\u9879\u76EE\u3001\u7F51\u4E0A\u6848\u4F8B\u4E2D\u6536\u96C6\uFF0C\u4F9B\u53C2\u8003\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>ES6\\7\u53D1\u5E03\u540E\uFF0C\u4E00\u4E9B\u4F20\u7EDF\u7684\u7B97\u6CD5\u6709\u4E86\u66F4\u7B80\u6D01\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6709\u65F6\u6211\u4EEC\u79F0\u4E4B\u4E3A<strong>\u73B0\u4EE3</strong>\u5199\u6CD5\u3002<br> \u672C\u6587\u4E2A\u522B\u4EE3\u7801\u4F1A\u4F7F\u7528\u5230\u8FD9\u4E9B\u8BED\u6CD5\uFF0C\u800C\u4E0D\u4F1A\u6240\u6709\u5730\u65B9\u90FD\u52A0\u4EE5\u8BF4\u660E\u3002</p></div><h2 id="\u591A\u91CD\u6761\u4EF6\u5224\u65AD" tabindex="-1">\u591A\u91CD\u6761\u4EF6\u5224\u65AD <a class="header-anchor" href="#\u591A\u91CD\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a></h2><p>\u5224\u65AD<strong>\u591A\u4E2A\u6761\u4EF6\u4E2D\u7684\u4E00\u6761</strong>\u6210\u7ACB\uFF0C\u6BD4\u8F83\u76F4\u63A5\u7684\u60F3\u6CD5\u53EF\u80FD\u662F\u8FD9\u6837\uFF1A</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">condition</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7279\u522B\u5730\uFF0C\u5F53\u6240\u9700\u7684\u8F93\u51FA\u503C/\u8FD4\u56DE\u503C\u662F <code>Bool</code> \u7C7B\u578B\u65F6\uFF0C\u90A3\u4E48 <code>if-else</code> \u7684\u5199\u6CD5\u5C31\u53EF\u4EE5\u7701\u7565\u4E86\uFF1A</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">condition</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u6709\u5F88\u591A\u4E2A\u6761\u4EF6\u5462\uFF0C\u603B\u4E0D\u80FD\u4E00\u76F4\u4F7F\u7528 <code>||</code> \u5E76\u5217\u4E0B\u53BB\u3002<br> \u53EF\u4F7F\u7528 <code>Array.includes</code> \u4F18\u5316 \uFF1A</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ES2016</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">condition</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;"> ([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">condition</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u6570\u636E\u5904\u7406" tabindex="-1">\u6570\u636E\u5904\u7406 <a class="header-anchor" href="#\u6570\u636E\u5904\u7406" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u5DF2\u6709\u4E00\u4E2A\u6570\u7EC4 <code>arrA</code>\uFF0C\u9700\u8981\u5148\u628A\u6570\u636E\u7ED3\u6784\u7A0D\u4F5C\u66F4\u6539\uFF0C\u7136\u540E\u7B5B\u9009\u5176\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u5BF9\u8C61\uFF0C\u653E\u8FDB\u65B0\u6570\u7EC4 <code>arrB</code> \u4E2D\u3002</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">33</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u671F\u671B\u5F97\u5230\u7ED3\u6784\u7A0D\u5FAE\u4E0D\u540C\uFF0Camount\u5C0F\u4E8E30\u7684\u6570\u7EC4\uFF1A</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u4F7F\u7528 <code>for</code> \u5FAA\u73AF\u7684\u5199\u6CD5\uFF08\u4E5F\u53EF\u4EE5\u7528 <code>forEach</code> \uFF0C\u601D\u8DEF\u662F\u5DEE\u4E0D\u591A\u7684\uFF09</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> arrA) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrA</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arrB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      item</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        amount</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u867D\u7136\u7ED3\u679C\u8FBE\u5230\u9884\u671F\uFF0C\u601D\u8DEF\u4E5F\u6E05\u6670\uFF0C\u4F46\u4E0D\u592A\u7B80\u6D01\u3002<br> \u53EF\u4F7F\u7528 <code>Array.filter</code> <code>Array.map</code> \u4F18\u5316\u4E0B \uFF1A</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ES2016</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arrA</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(ele </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> ele</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(item </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">arrB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ele</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ele</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4EE5\u4E0A\u4E5F\u53EB\u201C\u51FD\u6570\u5F0F\u7F16\u7A0B\u201D\u3002<br> \u5927\u90E8\u5206\u7684\u6570\u636E\u8F6C\u6362\u64CD\u4F5C\uFF0C\u90FD\u53EF\u4EE5\u7528\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u65B9\u5F0F\u5904\u7406\u3002</p></div>`,17),e=[o];function c(r,t,y,D,F,i){return a(),n("div",null,e)}var b=s(p,[["render",c]]);export{A as __pageData,b as default};
