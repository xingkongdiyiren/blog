import{e as u,_ as p,r as d,o as n,c as l,b as s,t as i,F as h,f as v,w as m,S as g,g as f}from"./app.68e0ab27.js";const y="https://api.ceil.top:8000",C=u.create({baseURL:y}),c=`Human:你叫什么名字？
AI:`,x=async a=>{const e=await C({method:"post",url:"/chat",data:{words:a}});return e&&e.data?`${a}${e.data}

Human:`:a};const S=["value"],A={class:"toolbar"},I={class:"letters"},O={__name:"OpenAI",setup(a){const t=d(c),e=async()=>{t.value=await x(t.value)},r=({target:o})=>t.value=o.value,_=()=>t.value=c;return(o,T)=>(n(),l(h,null,[s("textarea",{value:t.value,onInput:r,placeholder:"基于 ChatGPT API 的聊天程序"},null,40,S),s("div",A,[s("span",I,i(t.value.length||0),1),s("button",{onClick:e,class:"send"},"Send"),s("button",{onClick:_},"Reset")])],64))}},P=p(O,[["__scopeId","data-v-490488c7"]]),D=JSON.parse('{"title":"ChartGPT Playground","description":"","frontmatter":{"title":"ChartGPT Playground","layout":"docs","updateTime":"2023/02/11"},"headers":[],"relativePath":"CODES/openai-playground.md","lastUpdated":1676218496000}'),b={name:"CODES/openai-playground.md"},B=Object.assign(b,{setup(a){return(t,e)=>(n(),l("div",null,[(n(),v(g,null,{default:m(()=>[f(P)]),_:1}))]))}});export{D as __pageData,B as default};
