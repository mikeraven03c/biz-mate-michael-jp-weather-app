import{R as ft,Q as ue,m as mt,a as Ne}from"./QBtn.9cc31d12.js";import{c as ht,b as de,a as pt}from"./render.a2a8b0da.js";import{i as bt,e as _e,aa as Ge,r as w,a as x,o as Ye,x as Se,y as Je,h as S,u as le,S as Ze,a4 as gt,g as ve,a3 as yt,c as fe,w as Y,z as _t,W as Ct,a0 as xt,d as et,f as ne,n as wt,j as Tt,k as se,p as Ce,q as je,t as xe,v as Pt,T as qt,ab as St,F as A,N as E,Q as te,O as ae,I as v,H as m,a5 as O,K,L as V,G as oe,ac as kt,ad as Lt,J as It,a6 as $t,a7 as At}from"./index.63d19c96.js";import{u as Rt,c as we,k as Bt,_ as ke,Q as Le,o as Dt,q as Vt,n as Mt,m as Qt,l as Ft}from"./plugin-vue_export-helper.51efca9e.js";import{Q as Et,g as Ke,s as Oe,c as Ie,a as Nt,b as jt}from"./touch.e2a0bf61.js";import{e as We,c as Kt,a as Ot,d as Wt,n as ce,Q as $e,m as W,o as ze}from"./city.7d2f3e56.js";import{Q as zt}from"./QPage.8561e745.js";import{api as qe}from"./axios.e2245064.js";let Ut=0;const Ht=["click","keydown"],Xt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ut++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Gt(e,a,r,o){const n=bt(Ge,_e);if(n===_e)return console.error("QTab/QRouteTab component needs to be child of QTabs"),_e;const{proxy:t}=ve(),i=w(null),u=w(null),h=w(null),g=x(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),y=x(()=>n.currentModel.value===e.name),M=x(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(y.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),_=x(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),T=x(()=>e.disable===!0||n.hasFocus.value===!0||y.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function L(c,I){if(I!==!0&&i.value!==null&&i.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&le(c);return}if(o===void 0){n.updateModel({name:e.name}),r("click",c);return}if(o.hasRouterLink.value===!0){const B=(k={})=>{let $;const F=k.to===void 0||yt(k.to,e.to)===!0?n.avoidRouteWatcher=Rt():null;return o.navigateToRouterLink(c,{...k,returnRouterError:!0}).catch(j=>{$=j}).then(j=>{if(F===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,$===void 0&&(j===void 0||j.message!==void 0&&j.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),k.returnRouterError===!0)return $!==void 0?Promise.reject($):j})};r("click",c,B),c.defaultPrevented!==!0&&B();return}r("click",c)}function Q(c){Ze(c,[13,32])?L(c,!0):gt(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&n.onKbdNavigate(c.keyCode,t.$el)===!0&&le(c),r("keydown",c)}function N(){const c=n.tabProps.value.narrowIndicator,I=[],B=S("div",{ref:h,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&I.push(S(ue,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&I.push(S("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&I.push(e.alertIcon!==void 0?S(ue,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):S("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&I.push(B);const k=[S("div",{class:"q-focus-helper",tabindex:-1,ref:i}),S("div",{class:_.value},ht(a.default,I))];return c===!1&&k.push(B),k}const z={name:x(()=>e.name),rootRef:u,tabIndicatorRef:h,routeData:o};Ye(()=>{n.unregisterTab(z)}),Se(()=>{n.registerTab(z)});function J(c,I){const B={ref:u,class:M.value,tabindex:T.value,role:"tab","aria-selected":y.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:L,onKeydown:Q,...I};return Je(S(c,B,N()),[[ft,g.value]])}return{renderTab:J,$tabs:n}}var Te=fe({name:"QTab",props:Xt,emits:Ht,setup(e,{slots:a,emit:r}){const{renderTab:o}=Gt(e,a,r);return()=>o("div")}});function Yt(e,a,r){const o=r===!0?["left","right"]:["top","bottom"];return`absolute-${a===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const Jt=["left","center","right","justify"];var Zt=fe({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Jt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:a,emit:r}){const{proxy:o}=ve(),{$q:n}=o,{registerTick:t}=we(),{registerTick:i}=we(),{registerTick:u}=we(),{registerTimeout:h,removeTimeout:g}=We(),{registerTimeout:y,removeTimeout:M}=We(),_=w(null),T=w(null),L=w(e.modelValue),Q=w(!1),N=w(!0),z=w(!1),J=w(!1),c=[],I=w(0),B=w(!1);let k=null,$=null,F;const j=x(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Yt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),me=x(()=>{const l=I.value,s=L.value;for(let d=0;d<l;d++)if(c[d].name.value===s)return!0;return!1}),he=x(()=>`q-tabs__content--align-${Q.value===!0?"left":J.value===!0?"justify":e.align}`),pe=x(()=>`q-tabs row no-wrap items-center q-tabs--${Q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),f=x(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+he.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),C=x(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),D=x(()=>e.vertical!==!0&&n.lang.rtl===!0),H=x(()=>Bt===!1&&D.value===!0);Y(D,ee),Y(()=>e.modelValue,l=>{be({name:l,setCurrent:!0,skipEmit:!0})}),Y(()=>e.outsideArrows,re);function be({name:l,setCurrent:s,skipEmit:d}){L.value!==l&&(d!==!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",l),(s===!0||e["onUpdate:modelValue"]===void 0)&&(at(L.value,l),L.value=l))}function re(){t(()=>{Ae({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function Ae(l){if(C.value===void 0||T.value===null)return;const s=l[C.value.container],d=Math.min(T.value[C.value.scroll],Array.prototype.reduce.call(T.value.children,(q,b)=>q+(b[C.value.content]||0),0)),P=s>0&&d>s;Q.value=P,P===!0&&i(ee),J.value=s<parseInt(e.breakpoint,10)}function at(l,s){const d=l!=null&&l!==""?c.find(q=>q.name.value===l):null,P=s!=null&&s!==""?c.find(q=>q.name.value===s):null;if(d&&P){const q=d.tabIndicatorRef.value,b=P.tabIndicatorRef.value;k!==null&&(clearTimeout(k),k=null),q.style.transition="none",q.style.transform="none",b.style.transition="none",b.style.transform="none";const p=q.getBoundingClientRect(),R=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${p.top-R.top}px,0) scale3d(1,${R.height?p.height/R.height:1},1)`:`translate3d(${p.left-R.left}px,0,0) scale3d(${R.width?p.width/R.width:1},1,1)`,u(()=>{k=setTimeout(()=>{k=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}P&&Q.value===!0&&Z(P.rootRef.value)}function Z(l){const{left:s,width:d,top:P,height:q}=T.value.getBoundingClientRect(),b=l.getBoundingClientRect();let p=e.vertical===!0?b.top-P:b.left-s;if(p<0){T.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(p),ee();return}p+=e.vertical===!0?b.height-q:b.width-d,p>0&&(T.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(p),ee())}function ee(){const l=T.value;if(l===null)return;const s=l.getBoundingClientRect(),d=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);D.value===!0?(N.value=Math.ceil(d+s.width)<l.scrollWidth-1,z.value=d>0):(N.value=d>0,z.value=e.vertical===!0?Math.ceil(d+s.height)<l.scrollHeight:Math.ceil(d+s.width)<l.scrollWidth)}function Re(l){$!==null&&clearInterval($),$=setInterval(()=>{ot(l)===!0&&X()},5)}function Be(){Re(H.value===!0?Number.MAX_SAFE_INTEGER:0)}function De(){Re(H.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){$!==null&&(clearInterval($),$=null)}function nt(l,s){const d=Array.prototype.filter.call(T.value.children,R=>R===s||R.matches&&R.matches(".q-tab.q-focusable")===!0),P=d.length;if(P===0)return;if(l===36)return Z(d[0]),d[0].focus(),!0;if(l===35)return Z(d[P-1]),d[P-1].focus(),!0;const q=l===(e.vertical===!0?38:37),b=l===(e.vertical===!0?40:39),p=q===!0?-1:b===!0?1:void 0;if(p!==void 0){const R=D.value===!0?-1:1,U=d.indexOf(s)+p*R;return U>=0&&U<P&&(Z(d[U]),d[U].focus({preventScroll:!0})),!0}}const lt=x(()=>H.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,s)=>{l.scrollLeft=-s}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,s)=>{l.scrollTop=s}}:{get:l=>l.scrollLeft,set:(l,s)=>{l.scrollLeft=s}});function ot(l){const s=T.value,{get:d,set:P}=lt.value;let q=!1,b=d(s);const p=l<b?-1:1;return b+=p*5,b<0?(q=!0,b=0):(p===-1&&b<=l||p===1&&b>=l)&&(q=!0,b=l),P(s,b),ee(),q}function Ve(l,s){for(const d in l)if(l[d]!==s[d])return!1;return!0}function rt(){let l=null,s={matchedLen:0,queryDiff:9999,hrefLen:0};const d=c.filter(p=>p.routeData!==void 0&&p.routeData.hasRouterLink.value===!0),{hash:P,query:q}=o.$route,b=Object.keys(q).length;for(const p of d){const R=p.routeData.exact.value===!0;if(p.routeData[R===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:U,query:ge,matched:dt,href:vt}=p.routeData.resolvedLink.value,ye=Object.keys(ge).length;if(R===!0){if(U!==P||ye!==b||Ve(q,ge)===!1)continue;l=p.name.value;break}if(U!==""&&U!==P||ye!==0&&Ve(ge,q)===!1)continue;const G={matchedLen:dt.length,queryDiff:b-ye,hrefLen:vt.length-U.length};if(G.matchedLen>s.matchedLen){l=p.name.value,s=G;continue}else if(G.matchedLen!==s.matchedLen)continue;if(G.queryDiff<s.queryDiff)l=p.name.value,s=G;else if(G.queryDiff!==s.queryDiff)continue;G.hrefLen>s.hrefLen&&(l=p.name.value,s=G)}l===null&&c.some(p=>p.routeData===void 0&&p.name.value===L.value)===!0||be({name:l,setCurrent:!0})}function it(l){if(g(),B.value!==!0&&_.value!==null&&l.target&&typeof l.target.closest=="function"){const s=l.target.closest(".q-tab");s&&_.value.contains(s)===!0&&(B.value=!0,Q.value===!0&&Z(s))}}function st(){h(()=>{B.value=!1},30)}function ie(){Qe.avoidRouteWatcher===!1?y(rt):M()}function Me(){if(F===void 0){const l=Y(()=>o.$route.fullPath,ie);F=()=>{l(),F=void 0}}}function ut(l){c.push(l),I.value++,re(),l.routeData===void 0||o.$route===void 0?y(()=>{if(Q.value===!0){const s=L.value,d=s!=null&&s!==""?c.find(P=>P.name.value===s):null;d&&Z(d.rootRef.value)}}):(Me(),l.routeData.hasRouterLink.value===!0&&ie())}function ct(l){c.splice(c.indexOf(l),1),I.value--,re(),F!==void 0&&l.routeData!==void 0&&(c.every(s=>s.routeData===void 0)===!0&&F(),ie())}const Qe={currentModel:L,tabProps:j,hasFocus:B,hasActiveTab:me,registerTab:ut,unregisterTab:ct,verifyRouteModel:ie,updateModel:be,onKbdNavigate:nt,avoidRouteWatcher:!1};_t(Ge,Qe);function Fe(){k!==null&&clearTimeout(k),X(),F!==void 0&&F()}let Ee;return Ye(Fe),Ct(()=>{Ee=F!==void 0,Fe()}),xt(()=>{Ee===!0&&Me(),re()}),()=>S("div",{ref:_,class:pe.value,role:"tablist",onFocusin:it,onFocusout:st},[S(Et,{onResize:Ae}),S("div",{ref:T,class:f.value,onScroll:ee},de(a.default)),S(ue,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Be,onTouchstartPassive:Be,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X}),S(ue,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:De,onTouchstartPassive:De,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X})])}});function ea(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,o)=>{const n=parseFloat(r);n&&(a[o]=n)}),a}var ta=et({name:"touch-swipe",beforeMount(e,{value:a,arg:r,modifiers:o}){if(o.mouse!==!0&&ne.has.touch!==!0)return;const n=o.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:ea(r),direction:Ke(o),noop:wt,mouseStart(i){Oe(i,t)&&Tt(i)&&(se(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(Oe(i,t)){const u=i.target;se(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,u){ne.is.firefox===!0&&Ce(e,!0);const h=je(i);t.event={x:h.left,y:h.top,time:Date.now(),mouse:u===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){le(i);return}const u=Date.now()-t.event.time;if(u===0)return;const h=je(i),g=h.left-t.event.x,y=Math.abs(g),M=h.top-t.event.y,_=Math.abs(M);if(t.event.mouse!==!0){if(y<t.sensitivity[1]&&_<t.sensitivity[1]){t.end(i);return}}else if(window.getSelection().toString()!==""){t.end(i);return}else if(y<t.sensitivity[2]&&_<t.sensitivity[2])return;const T=y/u,L=_/u;t.direction.vertical===!0&&y<_&&y<100&&L>t.sensitivity[0]&&(t.event.dir=M<0?"up":"down"),t.direction.horizontal===!0&&y>_&&_<100&&T>t.sensitivity[0]&&(t.event.dir=g<0?"left":"right"),t.direction.up===!0&&y<_&&M<0&&y<100&&L>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&y<_&&M>0&&y<100&&L>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&y>_&&g<0&&_<100&&T>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&y>_&&g>0&&_<100&&T>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(le(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Kt(),t.styleCleanup=Q=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const N=()=>{document.body.classList.remove("no-pointer-events--children")};Q===!0?setTimeout(N,50):N()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:y,y:_}})):t.end(i)},end(i){t.event!==void 0&&(xe(t,"temp"),ne.is.firefox===!0&&Ce(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&le(i),t.event=void 0)}};if(e.__qtouchswipe=t,o.mouse===!0){const i=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";se(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}ne.has.touch===!0&&se(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const r=e.__qtouchswipe;r!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&r.end(),r.handler=a.value),r.direction=Ke(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(xe(a,"main"),xe(a,"temp"),ne.is.firefox===!0&&Ce(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});function aa(){let e=Object.create(null);return{getCache:(a,r)=>e[a]===void 0?e[a]=typeof r=="function"?r():r:e[a],setCache(a,r){e[a]=r},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const na={name:{required:!0},disable:Boolean},Ue={setup(e,{slots:a}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},de(a.default))}},la={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},oa=["update:modelValue","beforeTransition","transition"];function ra(){const{props:e,emit:a,proxy:r}=ve(),{getCache:o}=aa();let n,t;const i=w(null),u=w(null);function h(f){const C=e.vertical===!0?"up":"left";$((r.$q.lang.rtl===!0?-1:1)*(f.direction===C?1:-1))}const g=x(()=>[[ta,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),y=x(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),M=x(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),_=x(()=>`--q-transition-duration: ${e.transitionDuration}ms`),T=x(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),L=x(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),Q=x(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Y(()=>e.modelValue,(f,C)=>{const D=c(f)===!0?I(f):-1;t!==!0&&k(D===-1?0:D<I(C)?-1:1),i.value!==D&&(i.value=D,a("beforeTransition",f,C),Pt(()=>{a("transition",f,C)}))});function N(){$(1)}function z(){$(-1)}function J(f){a("update:modelValue",f)}function c(f){return f!=null&&f!==""}function I(f){return n.findIndex(C=>C.props.name===f&&C.props.disable!==""&&C.props.disable!==!0)}function B(){return n.filter(f=>f.props.disable!==""&&f.props.disable!==!0)}function k(f){const C=f!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(f===-1?y.value:M.value):null;u.value!==C&&(u.value=C)}function $(f,C=i.value){let D=C+f;for(;D!==-1&&D<n.length;){const H=n[D];if(H!==void 0&&H.props.disable!==""&&H.props.disable!==!0){k(f),t=!0,a("update:modelValue",H.props.name),setTimeout(()=>{t=!1});return}D+=f}e.infinite===!0&&n.length!==0&&C!==-1&&C!==n.length&&$(f,f===-1?n.length:-1)}function F(){const f=I(e.modelValue);return i.value!==f&&(i.value=f),!0}function j(){const f=c(e.modelValue)===!0&&F()&&n[i.value];return e.keepAlive===!0?[S(St,L.value,[S(Q.value===!0?o(T.value,()=>({...Ue,name:T.value})):Ue,{key:T.value,style:_.value},()=>f)])]:[S("div",{class:"q-panel scroll",style:_.value,key:T.value,role:"tabpanel"},[f])]}function me(){if(n.length!==0)return e.animated===!0?[S(qt,{name:u.value},j)]:j()}function he(f){return n=mt(de(f.default,[])).filter(C=>C.props!==null&&C.props.slot===void 0&&c(C.props.name)===!0),n.length}function pe(){return n}return Object.assign(r,{next:N,previous:z,goTo:J}),{panelIndex:i,panelDirectives:g,updatePanelsList:he,updatePanelIndex:F,getPanelContent:me,getEnabledPanels:B,getPanels:pe,isValidPanelName:c,keepAliveProps:L,needsUniqueKeepAliveWrapper:Q,goToPanelByOffset:$,goToPanel:J,nextPanel:N,previousPanel:z}}var Pe=fe({name:"QTabPanel",props:na,setup(e,{slots:a}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},de(a.default))}}),ia=fe({name:"QTabPanels",props:{...la,...Ot},emits:oa,setup(e,{slots:a}){const r=ve(),o=Wt(e,r.proxy.$q),{updatePanelsList:n,getPanelContent:t,panelDirectives:i}=ra(),u=x(()=>"q-tab-panels q-panel-parent"+(o.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(a),pt("div",{class:u.value},t(),"pan",e.swipeable,()=>i.value))}});class tt{constructor(){this.dailyList={},this.placeDailyList={}}getForecast(a,r){qe.get("/forecast/"+a).then(o=>{const n=o.data.list;this.dailyList=He(n),r&&r(o.data)}).catch(o=>{console.error(o)})}getPlaceForecast(a,r,o,n,t){qe.get(`/forecast/${a}/${r}/${o}/${n}`).then(i=>{const u=i.data.list;this.placeDailyList=He(u),t&&t(i.data)}).catch(i=>{console.error(i)})}}function He(e){return e.reduce((a,r)=>{const o=r.dt_txt.split(" "),n=o[0],t=o[1];return a[n]||(a[n]=[]),r.time=t.slice(0,-3),r.celcius=(Number(r.main.temp)-273.15).toFixed(2),r.date=n,a[n].push(r),a},{})}const sa={class:"parent column"},ua={class:"text-bold text-grey text-h5"},ca={__name:"ForecastCitySection",props:{city:{type:String,default:""},list:{type:Array,default:()=>[]},dailyList:{type:Object,default:()=>{}}},setup(e){const a=e,r=w([]),o=new tt;return o.getForecast(a.city,function(n){r.value=o.dailyList}),Y(()=>a.city,(n,t)=>{o.getForecast(n,function(i){r.value=o.dailyList})}),(n,t)=>(A(),E("div",sa,[(A(!0),E(te,null,ae(r.value,(i,u)=>(A(),E("div",{key:u,style:{"max-width":"750px"},class:"child"},[v(Ie,{bordered:"",separator:""},{default:m(()=>[v(ce,{header:""},{default:m(()=>[O("p",ua,[v(Le,{class:"text-white text-h5",color:"teal"},{default:m(()=>[K("Date: "+V(u),1)]),_:2},1024)])]),_:2},1024),(A(!0),E(te,null,ae(i,(h,g)=>(A(),oe($e,{key:g},{default:m(()=>[v(W,null,{default:m(()=>[K(V(h.time),1)]),_:2},1024),v(W,null,{default:m(()=>[K(V(h.celcius)+" \xB0",1)]),_:2},1024),v(W,null,{default:m(()=>[K(V(h.weather[0].description),1)]),_:2},1024),v(W,null,{default:m(()=>[K("humidity: "+V(h.main.humidity),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]))),128))]))}};var da=ke(ca,[["__scopeId","data-v-3dbb8b47"]]);function Xe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const a=parseInt(e,10);return isNaN(a)?0:a}var va=et({name:"close-popup",beforeMount(e,{value:a}){const r={depth:Xe(a),handler(o){r.depth!==0&&setTimeout(()=>{const n=Dt(e);n!==void 0&&Vt(n,o,r.depth)})},handlerKey(o){Ze(o,13)===!0&&r.handler(o)}};e.__qclosepopup=r,e.addEventListener("click",r.handler),e.addEventListener("keyup",r.handlerKey)},updated(e,{value:a,oldValue:r}){a!==r&&(e.__qclosepopup.depth=Xe(a))},beforeUnmount(e){const a=e.__qclosepopup;e.removeEventListener("click",a.handler),e.removeEventListener("keyup",a.handlerKey),delete e.__qclosepopup}});class fa{constructor(){this.venues=[]}getVenue(a,r){qe.get("/venue/"+a).then(o=>{this.venues=o.data.results,r&&r(o.data)}).catch(o=>{console.error(o)})}}const ma={class:"text-bold text-grey text-h5"},ha={__name:"VenueForecastCitySection",props:{city:{type:String,default:""},form:{type:Object,default:()=>({fsq_id:1,latitude:0,longitude:0})}},setup(e){const a=new tt,r=w([]),o=e;return Se(()=>{a.getPlaceForecast(o.city,o.form.fsq_id,o.form.latitude,o.form.longitude,()=>{r.value=a.placeDailyList})}),(n,t)=>(A(),E("div",null,[(A(!0),E(te,null,ae(r.value,(i,u)=>(A(),E("div",{key:u,style:{"max-width":"100%"},class:"q-my-sm"},[v(Ie,{bordered:"",separator:""},{default:m(()=>[v(ce,{header:""},{default:m(()=>[O("p",ma,[v(Le,{class:"text-white text-h5",color:"teal"},{default:m(()=>[K("Date: "+V(u),1)]),_:2},1024)])]),_:2},1024),(A(!0),E(te,null,ae(i,(h,g)=>(A(),oe($e,{key:g},{default:m(()=>[v(W,null,{default:m(()=>[K(V(h.time),1)]),_:2},1024),v(W,null,{default:m(()=>[K(V(h.celcius)+" \xB0",1)]),_:2},1024),v(W,null,{default:m(()=>[K(V(h.weather[0].description),1)]),_:2},1024),v(W,null,{default:m(()=>[K("humidity: "+V(h.main.humidity),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]))),128))]))}};const pa={class:"text-weight-bold"},ba={__name:"VenueCitySection",props:{city:{type:String,default:""}},setup(e){const a=e,r=w([]),o=w(!1),n=w({}),t=new fa;function i(u,h,g,y){o.value=!o.value,n.value={name:u,fsq_id:h,latitude:g,longitude:y}}return Se(()=>{t.getVenue(a.city,function(u){r.value=t.venues})}),Y(()=>a.city,(u,h)=>{t.getVenue(u,function(g){r.value=t.venues})}),(u,h)=>(A(),E("div",null,[v(Ie,{bordered:""},{default:m(()=>[(A(!0),E(te,null,ae(r.value,(g,y)=>(A(),oe($e,{class:"q-ma-md",key:y},{default:m(()=>[v(W,null,{default:m(()=>[v(ce,null,{default:m(()=>[K(V(g.name),1)]),_:2},1024),v(ce,{caption:""},{default:m(()=>[(A(!0),E(te,null,ae(g.categories,(M,_)=>(A(),oe(Le,{key:_,color:"teal","text-color":"white",label:M.name},null,8,["label"]))),128))]),_:2},1024)]),_:2},1024),v(W,{side:"",top:""},{default:m(()=>[v(Ne,{round:"",class:"q-ml-xs",color:"teal",icon:"cloud",size:"sm",onClick:M=>i(g.name,g.fsq_id,g.geocodes.main.latitude,g.geocodes.main.longitude)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),v(Ft,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=g=>o.value=g),"full-width":"",class:"myClass"},{default:m(()=>[v(Mt,{style:{"max-width":"750px"}},{default:m(()=>[O("div",null,[v(Nt,null,{default:m(()=>[v(jt,null,{default:m(()=>[O("span",pa,V(n.value.name),1)]),_:1}),Je(v(Ne,{flat:"",round:"",dense:"",icon:"close"},null,512),[[va]])]),_:1}),v(Qt,null,{default:m(()=>[v(ha,{city:a.city,form:n.value},null,8,["city","form"])]),_:1})])]),_:1})]),_:1},8,["modelValue"])]))}};var ga=ke(ba,[["__scopeId","data-v-f09bb782"]]);const ya=e=>($t("data-v-57a9b152"),e=e(),At(),e),_a={class:"card text-white"},Ca=ya(()=>O("div",{class:"overlay"},null,-1)),xa=["src"],wa={__name:"CityPage",setup(e){const a=kt(),r=a.params.city.toLowerCase(),o=w(r),n=w(),t=w("forecast");return n.value=ze[r],Y(()=>a.params.city,async i=>{o.value=i.toLowerCase(),n.value=ze[i.toLowerCase()]}),(i,u)=>(A(),oe(zt,null,{default:m(()=>[O("div",{class:"flex flex-center display-1",style:Lt({"background-image":"url("+n.value.image+")"})},[O("div",_a,[O("h1",null,V(n.value.title),1),O("p",null,V(n.value.description),1)]),Ca],4),O("div",null,[v(Zt,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=h=>t.value=h),class:"text-red"},{default:m(()=>[v(Te,{name:"forecast",icon:"cloud",label:"City Forecast"}),v(Te,{name:"venue",icon:"location_on",label:"Place Forecast"}),v(Te,{name:"map",icon:"map",label:"Map"})]),_:1},8,["modelValue"]),v(ia,{modelValue:t.value,"onUpdate:modelValue":u[1]||(u[1]=h=>t.value=h),animated:""},{default:m(()=>[v(Pe,{name:"forecast"},{default:m(()=>[v(da,{city:o.value},null,8,["city"])]),_:1}),v(Pe,{name:"venue",class:"flex flex-center"},{default:m(()=>[v(ga,{city:o.value},null,8,["city"])]),_:1}),v(Pe,{name:"map",class:"flex flex-center"},{default:m(()=>[n.value.embed?(A(),E("iframe",{key:0,src:n.value.embed,width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,8,xa)):It("",!0)]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};var Aa=ke(wa,[["__scopeId","data-v-57a9b152"]]);export{Aa as default};
