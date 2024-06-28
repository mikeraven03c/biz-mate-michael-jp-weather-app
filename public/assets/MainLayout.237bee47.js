import{c as N,i as ge,e as O,r as _,a as f,w,o as pe,h as Je,d as x,l as ee,g as X,f as Ge,j as R,n as Me,k as Ze,m as Y,p as ue,q as qe,s as se,t as me,u as ce,v as et,x as Oe,y as xe,z as tt,A as _e,B as Ee,C as Qe,D as at,E as nt,F as ot,G as K,H as lt,I as it,J as I,K as G,L as z,M as T,Q as rt,N as ut,O as Z,P as ke,R as Le,S as st,T as ct,U as dt,V as ft,W as vt,X as mt}from"./index.bd3ae11a.js";import{Q as he,g as Te,s as ze,a as ht,b as yt,c as gt}from"./touch.8b8f321d.js";import{c as pt,u as bt,a as wt,b as Ct,d as St,e as qt,f as xt,g as _t,h as kt,s as Lt,i as Tt,j as zt,k as $t,l as de,Q as Bt,m as $e,n as ye,o as Pt}from"./city.150939ef.js";import{b as J}from"./format.2cae61da.js";var Mt=N({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:i,emit:l}){const{proxy:{$q:s}}=X(),e=ge(ee,O);if(e===O)return console.error("QHeader needs to be child of QLayout"),O;const a=_(parseInt(t.heightHint,10)),r=_(!0),v=f(()=>t.reveal===!0||e.view.value.indexOf("H")!==-1||s.platform.is.ios&&e.isContainer.value===!0),h=f(()=>{if(t.modelValue!==!0)return 0;if(v.value===!0)return r.value===!0?a.value:0;const c=a.value-e.scroll.value.position;return c>0?c:0}),u=f(()=>t.modelValue!==!0||v.value===!0&&r.value!==!0),o=f(()=>t.modelValue===!0&&u.value===!0&&t.reveal===!0),C=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),b=f(()=>{const c=e.rows.value.top,k={};return c[0]==="l"&&e.left.space===!0&&(k[s.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),c[2]==="r"&&e.right.space===!0&&(k[s.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),k});function d(c,k){e.update("header",c,k)}function m(c,k){c.value!==k&&(c.value=k)}function B({height:c}){m(a,c),d("size",c)}function q(c){o.value===!0&&m(r,!0),l("focusin",c)}w(()=>t.modelValue,c=>{d("space",c),m(r,!0),e.animate()}),w(h,c=>{d("offset",c)}),w(()=>t.reveal,c=>{c===!1&&m(r,t.modelValue)}),w(r,c=>{e.animate(),l("reveal",c)}),w(e.scroll,c=>{t.reveal===!0&&m(r,c.direction==="up"||c.position<=t.revealOffset||c.position-c.inflectionPoint<100)});const p={};return e.instances.header=p,t.modelValue===!0&&d("size",a.value),d("space",t.modelValue),d("offset",h.value),pe(()=>{e.instances.header===p&&(e.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const c=Je(i.default,[]);return t.elevated===!0&&c.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(x(he,{debounce:0,onResize:B})),x("header",{class:C.value,style:b.value,onFocusin:q},c)}}});function fe(t,i,l){const s=me(t);let e,a=s.left-i.event.x,r=s.top-i.event.y,v=Math.abs(a),h=Math.abs(r);const u=i.direction;u.horizontal===!0&&u.vertical!==!0?e=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",v>h&&(u.left===!0&&a<0?e="left":u.right===!0&&a>0&&(e="right"))):u.down===!0&&r>0?(e="down",v>h&&(u.left===!0&&a<0?e="left":u.right===!0&&a>0&&(e="right"))):u.left===!0&&a<0?(e="left",v<h&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&a>0&&(e="right",v<h&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let o=!1;if(e===void 0&&l===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};e=i.event.lastDir,o=!0,e==="left"||e==="right"?(s.left-=a,v=0,a=0):(s.top-=r,h=0,r=0)}return{synthetic:o,payload:{evt:t,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:s,direction:e,isFirst:i.event.isFirst,isFinal:l===!0,duration:Date.now()-i.event.time,distance:{x:v,y:h},offset:{x:a,y:r},delta:{x:s.left-i.event.lastX,y:s.top-i.event.lastY}}}}let Ot=0;var ve=Ge({name:"touch-pan",beforeMount(t,{value:i,modifiers:l}){if(l.mouse!==!0&&R.has.touch!==!0)return;function s(a,r){l.mouse===!0&&r===!0?et(a):(l.stop===!0&&se(a),l.prevent===!0&&qe(a))}const e={uid:"qvtp_"+Ot++,handler:i,modifiers:l,direction:Te(l),noop:Me,mouseStart(a){ze(a,e)&&Ze(a)&&(Y(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(ze(a,e)){const r=a.target;Y(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,r){if(R.is.firefox===!0&&ue(t,!0),e.lastEvt=a,r===!0||l.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&qe(u),a.cancelBubble===!0&&se(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:u}}se(a)}const{left:v,top:h}=me(a);e.event={x:v,y:h,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:h}},move(a){if(e.event===void 0)return;const r=me(a),v=r.left-e.event.x,h=r.top-e.event.y;if(v===0&&h===0)return;e.lastEvt=a;const u=e.event.mouse===!0,o=()=>{s(a,u);let d;l.preserveCursor!==!0&&l.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pt(),e.styleCleanup=m=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),u===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(a,e.event.mouse);const{payload:d,synthetic:m}=fe(a,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&o(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=m===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){o(),e.event.detected=!0,e.move(a);return}const C=Math.abs(v),b=Math.abs(h);C!==b&&(e.direction.horizontal===!0&&C>b||e.direction.vertical===!0&&C<b||e.direction.up===!0&&C<b&&h<0||e.direction.down===!0&&C<b&&h>0||e.direction.left===!0&&C>b&&v<0||e.direction.right===!0&&C>b&&v>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,r){if(e.event!==void 0){if(ce(e,"temp"),R.is.firefox===!0&&ue(t,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(fe(a===void 0?e.lastEvt:a,e).payload);const{payload:v}=fe(a===void 0?e.lastEvt:a,e,!0),h=()=>{e.handler(v)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";Y(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}R.has.touch===!0&&Y(e,"main",[[t,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const l=t.__qtouchpan;l!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&l.end(),l.handler=i.value),l.direction=Te(i.modifiers))},beforeUnmount(t){const i=t.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),ce(i,"main"),ce(i,"temp"),R.is.firefox===!0&&ue(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchpan)}});const Be=150;var Et=N({name:"QDrawer",inheritAttrs:!1,props:{...bt,...wt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ct,"onLayout","miniState"],setup(t,{slots:i,emit:l,attrs:s}){const e=X(),{proxy:{$q:a}}=e,r=St(t,a),{preventBodyScroll:v}=kt(),{registerTimeout:h,removeTimeout:u}=qt(),o=ge(ee,O);if(o===O)return console.error("QDrawer needs to be child of QLayout"),O;let C,b=null,d;const m=_(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),B=f(()=>t.mini===!0&&m.value!==!0),q=f(()=>B.value===!0?t.miniWidth:t.width),p=_(t.showIfAbove===!0&&m.value===!1?!0:t.modelValue===!0),c=f(()=>t.persistent!==!0&&(m.value===!0||De.value===!0));function k(n,y){if(D(),n!==!1&&o.animate(),P(0),m.value===!0){const L=o.instances[j.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),E(1),o.isContainer.value!==!0&&v(!0)}else E(0),n!==!1&&le(!1);h(()=>{n!==!1&&le(!0),y!==!0&&l("show",n)},Be)}function g(n,y){W(),n!==!1&&o.animate(),E(0),P(H.value*q.value),ie(),y!==!0?h(()=>{l("hide",n)},Be):u()}const{show:S,hide:$}=xt({showing:p,hideOnRouteChange:c,handleShow:k,handleHide:g}),{addToHistory:D,removeFromHistory:W}=_t(p,$,c),V={belowBreakpoint:m,hide:$},M=f(()=>t.side==="right"),H=f(()=>(a.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),be=_(0),F=_(!1),te=_(!1),we=_(q.value*H.value),j=f(()=>M.value===!0?"left":"right"),ae=f(()=>p.value===!0&&m.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:q.value:0),ne=f(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(M.value?"R":"L")!==-1||a.platform.is.ios===!0&&o.isContainer.value===!0),A=f(()=>t.overlay===!1&&p.value===!0&&m.value===!1),De=f(()=>t.overlay===!0&&p.value===!0&&m.value===!1),Ve=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&F.value===!1?" hidden":"")),He=f(()=>({backgroundColor:`rgba(0,0,0,${be.value*.4})`})),Ce=f(()=>M.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Fe=f(()=>M.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),We=f(()=>{const n={};return o.header.space===!0&&Ce.value===!1&&(ne.value===!0?n.top=`${o.header.offset}px`:o.header.space===!0&&(n.top=`${o.header.size}px`)),o.footer.space===!0&&Fe.value===!1&&(ne.value===!0?n.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(n.bottom=`${o.footer.size}px`)),n}),Ae=f(()=>{const n={width:`${q.value}px`,transform:`translateX(${we.value}px)`};return m.value===!0?n:Object.assign(n,We.value)}),Re=f(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ie=f(()=>`q-drawer q-drawer--${t.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(ne.value===!0||A.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Ce.value===!0?" q-drawer--top-padding":""))),Ne=f(()=>{const n=a.lang.rtl===!0?t.side:j.value;return[[ve,Ye,void 0,{[n]:!0,mouse:!0}]]}),Xe=f(()=>{const n=a.lang.rtl===!0?j.value:t.side;return[[ve,Se,void 0,{[n]:!0,mouse:!0}]]}),je=f(()=>{const n=a.lang.rtl===!0?j.value:t.side;return[[ve,Se,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){Ke(m,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}w(m,n=>{n===!0?(C=p.value,p.value===!0&&$(!1)):t.overlay===!1&&t.behavior!=="mobile"&&C!==!1&&(p.value===!0?(P(0),E(0),ie()):S(!1))}),w(()=>t.side,(n,y)=>{o.instances[y]===V&&(o.instances[y]=void 0,o[y].space=!1,o[y].offset=0),o.instances[n]=V,o[n].size=q.value,o[n].space=A.value,o[n].offset=ae.value}),w(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),w(()=>t.behavior+t.breakpoint,oe),w(o.isContainer,n=>{p.value===!0&&v(n!==!0),n===!0&&oe()}),w(o.scrollbarWidth,()=>{P(p.value===!0?0:void 0)}),w(ae,n=>{Q("offset",n)}),w(A,n=>{l("onLayout",n),Q("space",n)}),w(M,()=>{P()}),w(q,n=>{P(),re(t.miniToOverlay,n)}),w(()=>t.miniToOverlay,n=>{re(n,q.value)}),w(()=>a.lang.rtl,()=>{P()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ue(),o.animate())}),w(B,n=>{l("miniState",n)});function P(n){n===void 0?xe(()=>{n=p.value===!0?0:q.value,P(H.value*n)}):(o.isContainer.value===!0&&M.value===!0&&(m.value===!0||Math.abs(n)===q.value)&&(n+=H.value*o.scrollbarWidth.value),we.value=n)}function E(n){be.value=n}function le(n){const y=n===!0?"remove":o.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function Ue(){b!==null&&clearTimeout(b),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,b=setTimeout(()=>{b=null,te.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ye(n){if(p.value!==!1)return;const y=q.value,L=J(n.distance.x,0,y);if(n.isFinal===!0){L>=Math.min(75,y)===!0?S():(o.animate(),E(0),P(H.value*y)),F.value=!1;return}P((a.lang.rtl===!0?M.value!==!0:M.value)?Math.max(y-L,0):Math.min(0,L-y)),E(J(L/y,0,1)),n.isFirst===!0&&(F.value=!0)}function Se(n){if(p.value!==!0)return;const y=q.value,L=n.direction===t.side,U=(a.lang.rtl===!0?L!==!0:L)?J(n.distance.x,0,y):0;if(n.isFinal===!0){Math.abs(U)<Math.min(75,y)===!0?(o.animate(),E(1),P(0)):$(),F.value=!1;return}P(H.value*U),E(J(1-U/y,0,1)),n.isFirst===!0&&(F.value=!0)}function ie(){v(!1),le(!0)}function Q(n,y){o.update(t.side,n,y)}function Ke(n,y){n.value!==y&&(n.value=y)}function re(n,y){Q("size",n===!0?t.miniWidth:y)}return o.instances[t.side]=V,re(t.miniToOverlay,q.value),Q("space",A.value),Q("offset",ae.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Oe(()=>{l("onLayout",A.value),l("miniState",B.value),C=t.showIfAbove===!0;const n=()=>{(p.value===!0?k:g)(!1,!0)};if(o.totalWidth.value!==0){xe(n);return}d=w(o.totalWidth,()=>{d(),d=void 0,p.value===!1&&t.showIfAbove===!0&&m.value===!1?S(!1):n()})}),pe(()=>{d!==void 0&&d(),b!==null&&(clearTimeout(b),b=null),p.value===!0&&ie(),o.instances[t.side]===V&&(o.instances[t.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const n=[];m.value===!0&&(t.noSwipeOpen===!1&&n.push(tt(x("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ne.value)),n.push(_e("div",{ref:"backdrop",class:Ve.value,style:He.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>je.value)));const y=B.value===!0&&i.mini!==void 0,L=[x("div",{...s,key:""+y,class:[Re.value,s.class]},y===!0?i.mini():Ee(i.default))];return t.elevated===!0&&p.value===!0&&L.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(_e("aside",{ref:"content",class:Ie.value,style:Ae.value},L,"contentclose",t.noSwipeClose!==!0&&m.value===!0,()=>Xe.value)),x("div",{class:"q-drawer-container"},n)}}}),Qt=N({name:"QPageContainer",setup(t,{slots:i}){const{proxy:{$q:l}}=X(),s=ge(ee,O);if(s===O)return console.error("QPageContainer needs to be child of QLayout"),O;Qe(at,!0);const e=f(()=>{const a={};return s.header.space===!0&&(a.paddingTop=`${s.header.size}px`),s.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(a.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),a});return()=>x("div",{class:"q-page-container",style:e.value},Ee(i.default))}});const{passive:Pe}=nt,Dt=["both","horizontal","vertical"];var Vt=N({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Dt.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:Lt},emits:["scroll"],setup(t,{emit:i}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,e,a;w(()=>t.scrollTarget,()=>{h(),v()});function r(){s!==null&&s();const C=Math.max(0,zt(e)),b=$t(e),d={top:C-l.position.top,left:b-l.position.left};if(t.axis==="vertical"&&d.top===0||t.axis==="horizontal"&&d.left===0)return;const m=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";l.position={top:C,left:b},l.directionChanged=l.direction!==m,l.delta=d,l.directionChanged===!0&&(l.direction=m,l.inflectionPoint=l.position),i("scroll",{...l})}function v(){e=Tt(a,t.scrollTarget),e.addEventListener("scroll",u,Pe),u(!0)}function h(){e!==void 0&&(e.removeEventListener("scroll",u,Pe),e=void 0)}function u(C){if(C===!0||t.debounce===0||t.debounce==="0")r();else if(s===null){const[b,d]=t.debounce?[setTimeout(r,t.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];s=()=>{d(b),s=null}}}const{proxy:o}=X();return w(()=>o.$q.lang.rtl,r),Oe(()=>{a=o.$el.parentNode,v()}),pe(()=>{s!==null&&s(),h()}),Object.assign(o,{trigger:u,getPosition:()=>l}),Me}}),Ht=N({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:i,emit:l}){const{proxy:{$q:s}}=X(),e=_(null),a=_(s.screen.height),r=_(t.container===!0?0:s.screen.width),v=_({position:0,direction:"down",inflectionPoint:0}),h=_(0),u=_(ot.value===!0?0:de()),o=f(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),C=f(()=>t.container===!1?{minHeight:s.screen.height+"px"}:null),b=f(()=>u.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),d=f(()=>u.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function m(g){if(t.container===!0||document.qScrollPrevented!==!0){const S={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};v.value=S,t.onScroll!==void 0&&l("scroll",S)}}function B(g){const{height:S,width:$}=g;let D=!1;a.value!==S&&(D=!0,a.value=S,t.onScrollHeight!==void 0&&l("scrollHeight",S),p()),r.value!==$&&(D=!0,r.value=$),D===!0&&t.onResize!==void 0&&l("resize",g)}function q({height:g}){h.value!==g&&(h.value=g,p())}function p(){if(t.container===!0){const g=a.value>h.value?de():0;u.value!==g&&(u.value=g)}}let c=null;const k={instances:{},view:f(()=>t.view),isContainer:f(()=>t.container),rootRef:e,height:a,containerHeight:h,scrollbarWidth:u,totalWidth:f(()=>r.value+u.value),rows:f(()=>{const g=t.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:K({size:0,offset:0,space:!1}),right:K({size:300,offset:0,space:!1}),footer:K({size:0,offset:0,space:!1}),left:K({size:300,offset:0,space:!1}),scroll:v,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,S,$){k[g][S]=$}};if(Qe(ee,k),de()>0){let $=function(){g=null,S.classList.remove("hide-scrollbar")},D=function(){if(g===null){if(S.scrollHeight>s.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout($,300)},W=function(V){g!==null&&V==="remove"&&(clearTimeout(g),$()),window[`${V}EventListener`]("resize",D)},g=null;const S=document.body;w(()=>t.container!==!0?"add":"remove",W),t.container!==!0&&W("add"),lt(()=>{W("remove")})}return()=>{const g=it(i.default,[x(Vt,{onScroll:m}),x(he,{onResize:B})]),S=x("div",{class:o.value,style:C.value,ref:t.container===!0?void 0:e,tabindex:-1},g);return t.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:e},[x(he,{onResize:q}),x("div",{class:"absolute-full",style:b.value},[x("div",{class:"scroll",style:d.value},[S])])]):S}}});const Ft=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(t){const i=t;return(l,s)=>(I(),G(Bt,{clickable:"",to:i.link},{default:z(()=>[i.icon?(I(),G($e,{key:0,avatar:""},{default:z(()=>[T(rt,{name:i.icon},null,8,["name"])]),_:1})):ut("",!0),T($e,null,{default:z(()=>[T(ye,null,{default:z(()=>[Z(ke(i.title),1)]),_:1}),T(ye,{caption:""},{default:z(()=>[Z(ke(i.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}}),Xt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(t){const i=_(!1);function l(){i.value=!i.value}return(s,e)=>{const a=Le("RouterLink"),r=Le("router-view");return I(),G(Ht,{view:"lHh Lpr lFf"},{default:z(()=>[T(Mt,{elevated:""},{default:z(()=>[T(ht,{class:"bg-red text-white"},{default:z(()=>[T(st,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l}),T(yt,null,{default:z(()=>[T(a,{style:{"text-decoration":"none",color:"inherit"},to:"/"},{default:z(()=>[Z("Japan Weather App")]),_:1})]),_:1})]),_:1})]),_:1}),T(Et,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=v=>i.value=v),"show-if-above":"",bordered:""},{default:z(()=>[T(gt,null,{default:z(()=>[T(ye,{header:""},{default:z(()=>[Z(" Recommended City ")]),_:1}),(I(!0),ct(vt,null,dt(ft(Pt),(v,h)=>(I(),G(Ft,mt({key:h,ref_for:!0},v),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),T(Qt,null,{default:z(()=>[T(r)]),_:1})]),_:1})}}});export{Xt as default};