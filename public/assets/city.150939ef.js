import{c as P,a as d,d as E,B as U,o as D,Y as j,w as K,Z as $,x as Q,g as V,y as W,_ as z,$ as R,j as w,E as f,v as I,a0 as F,a1 as Z,a2 as G,a3 as ee,a4 as te,a5 as oe,r as M,a6 as se,h as ie}from"./index.bd3ae11a.js";var ve=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=d(()=>parseInt(e.lines,10)),s=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),a=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>E("div",{style:a.value,class:s.value},U(t.default))}});const le={dark:{type:Boolean,default:null}};function ae(e,t){return d(()=>e.dark===null?t.dark.isActive:e.dark)}function he(e,t,o){let s;function a(){s!==void 0&&(j.remove(s),s=void 0)}return D(()=>{e.value===!0&&a()}),{removeFromHistory:a,addToHistory(){s={condition:()=>o.value===!0,handler:t},j.add(s)}}}const we={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ge=["beforeShow","show","beforeHide","hide"];function be({showing:e,canShow:t,hideOnRouteChange:o,handleShow:s,handleHide:a,processOnMount:m}){const n=V(),{props:r,emit:c,proxy:x}=n;let u;function h(i){e.value===!0?b(i):g(i)}function g(i){if(r.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const l=r["onUpdate:modelValue"]!==void 0;l===!0&&(c("update:modelValue",!0),u=i,W(()=>{u===i&&(u=void 0)})),(r.modelValue===null||l===!1)&&p(i)}function p(i){e.value!==!0&&(e.value=!0,c("beforeShow",i),s!==void 0?s(i):c("show",i))}function b(i){if(r.disable===!0)return;const l=r["onUpdate:modelValue"]!==void 0;l===!0&&(c("update:modelValue",!1),u=i,W(()=>{u===i&&(u=void 0)})),(r.modelValue===null||l===!1)&&q(i)}function q(i){e.value!==!1&&(e.value=!1,c("beforeHide",i),a!==void 0?a(i):c("hide",i))}function T(i){r.disable===!0&&i===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):i===!0!==e.value&&(i===!0?p:q)(u)}K(()=>r.modelValue,T),o!==void 0&&$(n)===!0&&K(()=>x.$route.fullPath,()=>{o.value===!0&&e.value===!0&&b()}),m===!0&&Q(()=>{T(r.modelValue)});const L={show:g,hide:b,toggle:h};return Object.assign(x,L),L}const ye=[Element,String],ne=[null,document,document.body,document.scrollingElement,document.documentElement];function ke(e,t){let o=z(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ne.includes(o)?window:o}function re(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ue(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let S;function xe(){if(S!==void 0)return S;const e=document.createElement("p"),t=document.createElement("div");R(e,{width:"100%",height:"200px"}),R(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let s=e.offsetWidth;return o===s&&(s=t.clientWidth),t.remove(),S=o-s,S}function ce(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let y=0,H,_,k,A=!1,Y,N,X,v=null;function de(e){me(e)&&I(e)}function me(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=F(e),o=e.shiftKey&&!e.deltaX,s=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),a=o||s?e.deltaY:e.deltaX;for(let m=0;m<t.length;m++){const n=t[m];if(ce(n,s))return s?a<0&&n.scrollTop===0?!0:a>0&&n.scrollTop+n.clientHeight===n.scrollHeight:a<0&&n.scrollLeft===0?!0:a>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function J(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function C(e){A!==!0&&(A=!0,requestAnimationFrame(()=>{A=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:s}=document.scrollingElement;(k===void 0||t!==window.innerHeight)&&(k=o-t,document.scrollingElement.scrollTop=s),s>k&&(document.scrollingElement.scrollTop-=Math.ceil((s-k)/8))}))}function O(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:s,overflowX:a}=window.getComputedStyle(t);H=ue(window),_=re(window),Y=t.style.left,N=t.style.top,X=window.location.href,t.style.left=`-${H}px`,t.style.top=`-${_}px`,a!=="hidden"&&(a==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",C,f.passiveCapture),window.visualViewport.addEventListener("scroll",C,f.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",J,f.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",de,f.notPassive),e==="remove"&&(w.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",C,f.passiveCapture),window.visualViewport.removeEventListener("scroll",C,f.passiveCapture)):window.removeEventListener("scroll",J,f.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Y,t.style.top=N,window.location.href===X&&window.scrollTo(H,_),k=void 0)}function pe(e){let t="add";if(e===!0){if(y++,v!==null){clearTimeout(v),v=null;return}if(y>1)return}else{if(y===0||(y--,y>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){v!==null&&clearTimeout(v),v=setTimeout(()=>{O(t),v=null},100);return}}O(t)}function qe(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,pe(t))}}}function Te(){let e=null;const t=V();function o(){e!==null&&(clearTimeout(e),e=null)}return Z(o),D(o),{removeTimeout:o,registerTimeout(s,a){o(),G(t)===!1&&(e=setTimeout(()=>{e=null,s()},a))}}}function Le(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ee.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var Se=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:o.value},U(t.default))}}),Ce=P({name:"QItem",props:{...le,...te,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:s}}=V(),a=ae(e,s),{hasLink:m,linkAttrs:n,linkClass:r,linkTag:c,navigateOnClick:x}=oe(),u=M(null),h=M(null),g=d(()=>e.clickable===!0||m.value===!0||e.tag==="label"),p=d(()=>e.disable!==!0&&g.value===!0),b=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=d(()=>{if(e.insetLevel===void 0)return null;const l=s.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+e.insetLevel*56+"px"}});function T(l){p.value===!0&&(h.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),x(l))}function L(l){if(p.value===!0&&se(l,[13,32])===!0){I(l),l.qKeyEvent=!0;const B=new MouseEvent("click",l);B.qKeyEvent=!0,u.value.dispatchEvent(B)}o("keyup",l)}function i(){const l=ie(t.default,[]);return p.value===!0&&l.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:h})),l}return()=>{const l={ref:u,class:b.value,style:q.value,role:"listitem",onClick:T,onKeyup:L};return p.value===!0?(l.tabindex=e.tabindex||"0",Object.assign(l,n.value)):g.value===!0&&(l["aria-disabled"]="true"),E(c.value,l,i())}}});const Ee={tokyo:{title:"Tokyo",code:"Tokyo",link:"/city/tokyo",image:"https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Japan\u2019s capital and largest city, known for its vibrant culture, modern architecture, and bustling streets.",map:"https://maps.app.goo.gl/eq1BXoUfUXmJUKnb9",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828375.4669158831!2d140.0939087796875!3d35.80382014780526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sph!4v1719527383017!5m2!1sen!2sph"},yokohama:{title:"Yokohama",code:"Yokohama",link:"/city/yokohama",image:"https://images.pexels.com/photos/5745083/pexels-photo-5745083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"A major port city near Tokyo, famous for its waterfront attractions and historic sites.",map:"https://maps.app.goo.gl/ViwParuPcMCeXDXj6",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208005.35001538886!2d139.59506105!3d35.452724849999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185becbbb66509%3A0x69683f660285400!2sYokohama%2C%20Kanagawa%2C%20Japan!5e0!3m2!1sen!2sph!4v1719527776569!5m2!1sen!2sph"},kyoto:{title:"Kyoto",code:"Kyoto",link:"/city/kyoto",image:"https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Renowned for its traditional temples, shrines, and beautiful gardens, Kyoto is a cultural gem.",map:"https://maps.app.goo.gl/6T5x554HR1bQz5oi8",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417835.64227443415!2d135.7188694!3d35.09819619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sph!4v1719528647305!5m2!1sen!2sph"},osaka:{title:"Osaka",code:"Osaka",link:"/city/osaka",image:"https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"A lively city with delicious street food, Osaka is often called the \u201CKitchen of Japan.",map:"https://maps.app.goo.gl/tRySHYPWvmvw6Ujw9",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104994.98122392832!2d135.48603735!3d34.6775981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!5e0!3m2!1sen!2sph!4v1719529609881!5m2!1sen!2sph"},sapporo:{title:"Sapporo",code:"Sapporo",link:"/city/sapporo",image:"https://images.pexels.com/photos/12884934/pexels-photo-12884934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Located in Hokkaido, Sapporo is known for its winter festivals and delicious ramen.",map:"https://maps.app.goo.gl/H8s4NAR2HXJ8nZJK6",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373591.9571095256!2d140.91832796457828!3d42.9848631268697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ad4755a973633%3A0x33937e9d4687bad5!2sSapporo%2C%20Hokkaido%2C%20Japan!5e0!3m2!1sen!2sph!4v1719526886837!5m2!1sen!2sph"},nagoya:{title:"Nagoya",code:"Nagoya",link:"/city/nagoya",image:"https://images.pexels.com/photos/12544134/pexels-photo-12544134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"An industrial hub with a rich history, Nagoya is home to impressive castles and museums.",map:"https://maps.app.goo.gl/Wzve93yDDwHCwCF16",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208792.38985905144!2d136.92631095!3d35.1471154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003709e107b2365%3A0x2a9622d4e8ceb352!2sNagoya%2C%20Aichi%2C%20Japan!5e0!3m2!1sen!2sph!4v1719529654900!5m2!1sen!2sph"}},He=["Tokyo","Yokohama","Kyoto","Osaka","Sapporo","Nagoya"];export{Ce as Q,le as a,ge as b,Le as c,ae as d,Te as e,be as f,he as g,qe as h,ke as i,re as j,ue as k,xe as l,Se as m,ve as n,Ee as o,He as p,ye as s,we as u};
