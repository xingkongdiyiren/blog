import{d as e,P as n,S as t,A as i,a,W as s,O as o,C as d,c as r,b as l,t as h,F as w,L as c,w as p,p as u,e as m,f as g,o as f,g as v}from"./vendor.34018c3b.js";let D,b,R,C,W,L;const P=e({data:()=>({loading:"",currentDae:""}),methods:{init(){D=this.$refs.threeRef,R=new n(25,window.innerWidth/window.innerHeight,1,1e3),R.position.set(15,10,-15),R.lookAt(0,3,0),C=new t,this.loadDae("LiDAR");const e=new i(16777215,.3);C.add(e);const d=new a(16777215,.8);C.add(R),R.add(d),W=new s({antialias:!0}),W.setPixelRatio(window.devicePixelRatio),W.setSize(window.innerWidth,window.innerHeight),D.appendChild(W.domElement),b=new o(R,W.domElement),b.screenSpacePanning=!0,b.minDistance=2,b.maxDistance=400,b.target.set(0,2,0),b.update(),window.addEventListener("resize",this.onWindowResize)},render(){W.render(C,R)},onWindowResize(){const e=window.innerWidth/window.innerHeight;R.aspect=e,R.updateProjectionMatrix(),W.setSize(window.innerWidth,window.innerHeight),this.render()},animate(){requestAnimationFrame(this.animate),this.render()},loadDae(e){if(this.currentDae===e)return;C.remove(L);const n=new c((function(){C.add(L)}));new d(n).load(`/house/${e}.dae`,(e=>{L=e.scene}),(e=>{this.loading=e.loaded/e.total})),this.currentDae=e},reset(){b.reset()}},mounted(){this.init(),this.animate()},computed:{showLoading(){const{loading:e}=this;if(1===e)return"Completed loading"}}}),k=p();u("data-v-bdf92daa");const x={ref:"threeRef"},z={class:"tips"},A={class:"tools"},S=l("p",{class:"highlight"},[m("手机屏幕可单指旋转，双指拖动 / 缩放 "),l("br"),m("PC鼠标左键旋转，按住「Shift」键拖动，滚轮缩放")],-1);g();const H=k(((e,n,t,i,a,s)=>(f(),r(w,null,[l("div",x,null,512),l("div",z,[l("div",A,[l("input",{type:"button",value:"skechup",onClick:n[1]||(n[1]=n=>e.loadDae("1702"))}),l("input",{type:"button",value:"iphone",onClick:n[2]||(n[2]=n=>e.loadDae("LiDAR"))}),l("input",{type:"button",value:"reset",onClick:n[3]||(n[3]=(...n)=>e.reset&&e.reset(...n))})]),S,l("p",null,h(e.showLoading),1)])],64))));P.render=H,P.__scopeId="data-v-bdf92daa";v({expose:[],setup:e=>(e,n)=>(f(),r(P))}).mount("#app");
