(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7387:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>_,originalPathname:()=>h,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),i=r(9108),o=r(2563),a=r.n(o),n=r(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7465)),"C:\\Users\\HP\\Desktop\\next_Dexbytes\\new_dexbytes\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"C:\\Users\\HP\\Desktop\\next_Dexbytes\\new_dexbytes\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\HP\\Desktop\\next_Dexbytes\\new_dexbytes\\src\\app\\page.js"],h="/page",_={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3575:(e,t,r)=>{Promise.resolve().then(r.bind(r,1132))},1900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let s=r(9694),i=r(7824)._(r(3729)),o=s._(r(1202)),a=s._(r(1758)),n=r(3855),l=r(3053),c=r(4187);r(837);let d=r(6150),h=s._(r(4931)),_={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,s,i,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==s?void 0:s.current)&&s.current(e)}}))}function p(e){let[t,r]=i.version.split(".",2),s=parseInt(t,10),o=parseInt(r,10);return s>18||18===s&&o>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let u=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:s,sizes:o,height:a,width:n,decoding:l,className:c,style:d,fetchPriority:h,placeholder:_,loading:u,unoptimized:g,fill:x,onLoadRef:f,onLoadingCompleteRef:j,setBlurComplete:v,setShowAltText:w,onLoad:W,onError:y,...$}=e;return i.default.createElement("img",{...$,...p(h),loading:u,width:n,height:a,decoding:l,"data-nimg":x?"fill":"1",className:c,style:d,sizes:o,srcSet:s,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&m(e,_,f,j,v,g))},[r,_,f,j,v,y,g,t]),onLoad:e=>{m(e.currentTarget,_,f,j,v,g)},onError:e=>{w(!0),"empty"!==_&&v(!0),y&&y(e)}})});function g(e){let{isAppRouter:t,imgAttributes:r}=e,s={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...p(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,s),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...s}))}let x=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),s=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=_||s||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[s]),{onLoad:a,onLoadingComplete:m}=e,p=(0,i.useRef)(a);(0,i.useEffect)(()=>{p.current=a},[a]);let x=(0,i.useRef)(m);(0,i.useEffect)(()=>{x.current=m},[m]);let[f,j]=(0,i.useState)(!1),[v,w]=(0,i.useState)(!1),{props:W,meta:y}=(0,n.getImgProps)(e,{defaultLoader:h.default,imgConf:o,blurComplete:f,showAltText:v});return i.default.createElement(i.default.Fragment,null,i.default.createElement(u,{...W,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:p,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:w,ref:t}),y.priority?i.default.createElement(g,{isAppRouter:!r,imgAttributes:W}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.AmpContext},2158:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.HeadManagerContext},4187:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.ImageConfigContext},6150:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.RouterContext},3126:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:s=!1}=void 0===e?{}:e;return t||r&&s}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(837);let s=r(3990),i=r(3053);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r;let n,l,c,{src:d,sizes:h,unoptimized:_=!1,priority:m=!1,loading:p,className:u,quality:g,width:x,height:f,fill:j=!1,style:v,onLoad:w,onLoadingComplete:W,placeholder:y="empty",blurDataURL:$,fetchPriority:N,layout:b,objectFit:C,objectPosition:P,lazyBoundary:B,lazyRoot:S,...T}=e,{imgConf:I,showAltText:k,blurComplete:D,defaultLoader:M}=t,O=I||i.imageConfigDefault;if("allSizes"in O)n=O;else{let e=[...O.deviceSizes,...O.imageSizes].sort((e,t)=>e-t),t=O.deviceSizes.sort((e,t)=>e-t);n={...O,allSizes:e,deviceSizes:t}}let U=T.loader||M;delete T.loader,delete T.srcSet;let A="__next_img_default"in U;if(A){if("custom"===n.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...s}=t;return e(s)}}if(b){"fill"===b&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[b];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[b];t&&!h&&(h=t)}let H="",R=a(x),E=a(f);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,$=$||e.blurDataURL,H=e.src,!j){if(R||E){if(R&&!E){let t=R/e.width;E=Math.round(e.height*t)}else if(!R&&E){let t=E/e.height;R=Math.round(e.width*t)}}else R=e.width,E=e.height}}let z=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:H)||d.startsWith("data:")||d.startsWith("blob:"))&&(_=!0,z=!1),n.unoptimized&&(_=!0),A&&d.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(_=!0),m&&(N="high");let L=a(g),F=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},k?{}:{color:"transparent"},v),G=D||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:R,heightInt:E,blurWidth:l,blurHeight:c,blurDataURL:$||"",objectFit:F.objectFit})+'")':'url("'+y+'")',J=G?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},q=function(e){let{config:t,src:r,unoptimized:s,width:i,quality:o,sizes:a,loader:n}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:s,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,s)=>n({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:s+1)+c).join(", "),src:n({config:t,src:r,quality:o,width:l[d]})}}({config:n,src:d,unoptimized:_,width:R,quality:L,sizes:h,loader:U});return{props:{...T,loading:z?"lazy":p,fetchPriority:N,width:R,height:E,decoding:"async",className:u,style:{...F,...J},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:_,priority:m,placeholder:y,fill:j}}}},1758:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let s=r(9694),i=r(7824)._(r(3729)),o=s._(r(7984)),a=r(7637),n=r(2158),l=r(3126);function c(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(837);let h=["name","httpEquiv","charSet","itemProp"];function _(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,s={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=s[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),s[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let s=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:s})})}let m=function(e){let{children:t}=e,r=(0,i.useContext)(a.AmpStateContext),s=(0,i.useContext)(n.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:_,headManager:s,inAmpMode:(0,l.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3990:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:i,blurDataURL:o,objectFit:a}=e,n=s?40*s:t,l=i?40*i:r,c=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return s}});let r=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let s=r(9694),i=r(3855),o=r(837),a=r(1900),n=s._(r(4931)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},4931:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:s,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+s+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},7984:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let s=r(3729),i=()=>{},o=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function n(){if(r&&r.mountedInstances){let t=s.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),n(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=n),()=>{r&&(r._pendingUpdate=n)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},837:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1223:(e,t,r)=>{r(7412)},1132:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var s=r(2295),i=r(3729),o=r.n(i),a=r(7225);r(1223);var n=r(4001),l=r.n(n);let c=()=>s.jsx("section",{className:`${l().sectionHome}`,children:s.jsx("div",{className:`${l().sectionWrapper} ${l().innerSectionHomeWr}`,children:(0,s.jsxs)("div",{className:`${l().innerLeftRightMargin} ${l().homesectionWr}`,children:[(0,s.jsxs)("div",{className:`${l().sectionLeftBox}`,children:[(0,s.jsxs)("div",{className:`${l().homeTopBtnWr}`,children:[s.jsx("div",{className:`${l().leftHiringWr}`,children:s.jsx("span",{className:`${l().hiringText}`,children:"We're hiring!"})}),s.jsx("div",{className:`${l().rightJoinourTeamWr}`,children:s.jsx("a",{className:`${l().joinourTeamLink}`,href:"/JoinOurTeam",children:"Join our team"})})]}),(0,s.jsxs)("div",{className:`${l().homeTextOuterWr}`,children:[(0,s.jsxs)("h1",{className:`${l().homeH1Text}`,children:["Driving Digital",s.jsx("br",{}),"Transformation"]}),s.jsx("p",{className:`${l().homePtext1}`,children:"Upscale your business process to deliver superior customer experience and revolutionize your business from top to bottom."}),s.jsx("div",{className:`${l().homeBtnWr}`,children:s.jsx("a",{className:`${l().getYourProjectLink}`,href:"/getyourproject",children:"Get Your Project Started"})})]})]}),s.jsx("div",{className:`${l().sectionRightBox}`,children:s.jsx("div",{className:`${l().heroImageOuterWr}`,children:s.jsx("img",{src:"assets/images/home_hero_image.png",className:"logo-modal"})})})]})})});var d=r(3006),h=r.n(d);let _=()=>s.jsx("section",{className:`${h().homefeaturedproject}`,children:s.jsx("div",{className:`${h().homefeaturedprojectWr}`,children:(0,s.jsxs)("div",{className:`${h().innerLeftRightMargin}`,children:[s.jsx("div",{className:`${h().hfpInnerhadingSec}`,children:s.jsx("h3",{className:`${h().h3text}`,children:"Featured Projects"})}),s.jsx("div",{className:`${h().projectsCardWr}`,children:(0,s.jsxs)("div",{className:`${h().homeProjectBoxWr}`,children:[(0,s.jsxs)("div",{className:`${h().innerHomeProjectBoxWr}`,children:[s.jsx("div",{className:`${h().innerHPImage}`,children:s.jsx("img",{src:"assets/images/webbabyshower.png"})}),s.jsx("div",{className:`${h().projectBoxPopUp} ${h().popUpRight}`,children:(0,s.jsxs)("a",{href:"/FeatureProjects",children:[(0,s.jsxs)("div",{className:`${h().projectBoxPopUpText}`,children:[s.jsx("h5",{children:"WebBabyShower"}),s.jsx("p",{children:"Share Your Joy with Friends and Family Worldwide"})]}),s.jsx("div",{className:`${h().projectBoxPopUpArrow}`,children:s.jsx("img",{src:"assets/images/circle_arrow_right.svg"})})]})})]}),(0,s.jsxs)("div",{className:`${h().innerHomeProjectBoxWr}`,children:[s.jsx("div",{className:`${h().innerHPImage}`,children:s.jsx("img",{src:"assets/images/QuickOnDemandServices.png"})}),s.jsx("div",{className:`${h().projectBoxPopUp} ${h().popUpRightDown}`,children:(0,s.jsxs)("a",{href:"/FeatureProjects",children:[(0,s.jsxs)("div",{className:`${h().projectBoxPopUpText}`,children:[s.jsx("h5",{children:"Quick On Demand Services"}),s.jsx("p",{children:"Share Your Joy with Friends and Family Worldwide"})]}),s.jsx("div",{className:`${h().projectBoxPopUpArrow}`,children:s.jsx("img",{src:"assets/images/circle_arrow_right.svg"})})]})})]}),(0,s.jsxs)("div",{className:`${h().innerHomeProjectBoxWr}`,children:[s.jsx("div",{className:`${h().innerHPImage}`,children:s.jsx("img",{src:"assets/images/WorkAutomation.png"})}),s.jsx("div",{className:`${h().projectBoxPopUp} ${h().popUpRight}`,children:(0,s.jsxs)("a",{href:"/FeatureProjects",children:[(0,s.jsxs)("div",{className:`${h().projectBoxPopUpText}`,children:[s.jsx("h5",{children:"Work Automation"}),s.jsx("p",{children:"Share Your Joy with Friends and Family Worldwide"})]}),s.jsx("div",{className:`${h().projectBoxPopUpArrow}`,children:s.jsx("img",{src:"assets/images/circle_arrow_right.svg"})})]})})]}),(0,s.jsxs)("div",{className:`${h().innerHomeProjectBoxWr}`,children:[s.jsx("div",{className:`${h().innerHPImage}`,children:s.jsx("img",{src:"assets/images/AccountsByAI.png"})}),s.jsx("div",{className:`${h().projectBoxPopUp} ${h().popUpRightDown}`,children:(0,s.jsxs)("a",{href:"/FeatureProjects",children:[(0,s.jsxs)("div",{className:`${h().projectBoxPopUpText}`,children:[s.jsx("h5",{children:"Accounts by AI"}),s.jsx("p",{children:"Share Your Joy with Friends and Family Worldwide"})]}),s.jsx("div",{className:`${h().projectBoxPopUpArrow}`,children:s.jsx("img",{src:"assets/images/circle_arrow_right.svg"})})]})})]})]})})]})})});var m=r(2185),p=r.n(m);let u=()=>s.jsx("section",{className:`${p().mainWhatWeDeliverSec}`,children:s.jsx("div",{className:`${p().whatWeDeliverSecWr}`,children:(0,s.jsxs)("div",{className:`${p().innerWeDeliverSec}`,children:[s.jsx("h3",{className:`${p().h3TextWeDeliverSec}`,children:"What We Deliver"}),s.jsx("p",{className:`${p().pTextWeDeliverSec}`,children:"We define business processes through ideation, creation, and optimization with a team of exceptional strategists."}),(0,s.jsxs)("div",{className:`${p().innerWeDeliverSecCardsWr}`,children:[(0,s.jsxs)("div",{className:`${p().innerWeDeliverSecCard} ${p().pD}`,children:[s.jsx("div",{className:`${p().card_imgs} ${p().card_img_PD}`}),s.jsx("h4",{className:`${p().h4TextCard}`,children:"Product Development"}),s.jsx("p",{className:`${p().pTextCard}`,children:"We ideate and develop unique software solutions to help businesses meet their exact objectives."})]}),(0,s.jsxs)("div",{className:`${p().innerWeDeliverSecCard} ${p().pC}`,children:[s.jsx("div",{className:`${p().card_imgs} ${p().card_img_PC}`}),s.jsx("h4",{className:`${p().h4TextCard}`,children:"Product Consultation"}),s.jsx("p",{className:`${p().pTextCard}`,children:"We offer SaaS consultation to help businesses tread on visionary and strategic frameworks."})]}),(0,s.jsxs)("div",{className:`${p().innerWeDeliverSecCard} ${p().pO}`,children:[s.jsx("div",{className:`${p().card_imgs} ${p().card_img_PO}`}),s.jsx("h4",{className:`${p().h4TextCard}`,children:"Product Optimization"}),s.jsx("p",{className:`${p().pTextCard}`,children:"We optimize products through advanced updates to make them efficient and promisingly growing."})]})]}),s.jsx("div",{className:`${p().viewSerBtn}`,children:s.jsx("a",{className:`${p().viewSerBtnLink}`,href:"/ViewServices",children:"View Services"})})]})})});var g=r(1751),x=r.n(g);let f=()=>s.jsx("section",{id:"whyWork",className:`${x().homeWhyWorkwithUsWr}`,children:s.jsx("div",{className:`${x().innerhwwwWr} ${x().wrapper}`,children:(0,s.jsxs)("div",{className:`${x().h3textWr}`,children:[s.jsx("h3",{className:`${x().h3text}`,children:"Why Work With Us"}),(0,s.jsxs)("div",{className:`${x().textCardWr}`,children:[(0,s.jsxs)("div",{className:`${x().cardBox}`,children:[s.jsx("h4",{className:`${x().h4CardText}`,children:"Agile throughout our processes"}),s.jsx("p",{className:`${x().pCardText}`,children:"We are following the agile development process till the next methodological marvel drops."})]}),(0,s.jsxs)("div",{className:`${x().cardBox}`,children:[s.jsx("h4",{className:`${x().h4CardText}`,children:"Go-live in a zap"}),s.jsx("p",{className:`${x().pCardText}`,children:"We follow the Iterative development model to facilitate effective software life cycle management that ultimately reduces the go-live timeline for MVPs to only 8-12 weeks."})]}),(0,s.jsxs)("div",{className:`${x().cardBox}`,children:[s.jsx("h4",{className:`${x().h4CardText}`,children:"Speedy software delivery"}),s.jsx("p",{className:`${x().pCardText}`,children:"We carry out bi-weekly sprints, facilitate regular code push, and follow CI/CD model for rapid build deployment and quicker delivery."})]})]})]})})});var j=r(2114),v=r.n(j);r(355);var w=r(673),W=r.n(w);class y{constructor(){this.bus={}}$off(e){delete this.bus[e]}$on(e,t){this.bus[e]=t}$emit(e,...t){this.bus[e]&&this.bus[e](...t)}}new y;let $=()=>s.jsx("section",{id:"blogCardSec",className:`${W().mainBlogCardWr}`,children:s.jsx("div",{className:`${W().wrapper}`,children:(0,s.jsxs)("div",{className:`${W().innerBlogCardWr}`,children:[(0,s.jsxs)("div",{className:`${W().BlogHeadTextWr}`,children:[s.jsx("h3",{className:`${W().h3Text}`,children:"Blogs"}),s.jsx("a",{href:"/viewAll",className:`${W().viewAllBlogBtn}`,children:"View All"})]}),(0,s.jsxs)("div",{className:`${W().BlogCardBoxWr}`,children:[(0,s.jsxs)("div",{className:`${W().BlogCard}`,children:[s.jsx("img",{src:"assets/images/blog/blog1.png",className:`${W().imgBlogCard}`}),s.jsx("h4",{className:`${W().h4TextBlogCard}`,children:"Unleashing the Power of OpenAI: How Businesses are Harnessing AI Models to Foster Innovation"}),s.jsx("p",{className:`${W().pTextBlogCard_Date}`,children:"January 1, 2024"}),s.jsx("a",{href:"/readMore",className:`${W().readMoreBtn}`,children:"Read More"})]}),(0,s.jsxs)("div",{className:`${W().BlogCard}`,children:[s.jsx("img",{src:"assets/images/blog/blog2.png",className:`${W().imgBlogCard}`}),s.jsx("h4",{className:`${W().h4TextBlogCard}`,children:"Top 10 UI/UX Design Tools In 2024"}),s.jsx("p",{className:`${W().pTextBlogCard_Date}`,children:"January 1, 2024"}),s.jsx("a",{href:"/readMore",className:`${W().readMoreBtn}`,children:"Read More"})]}),(0,s.jsxs)("div",{className:`${W().BlogCard}`,children:[s.jsx("img",{src:"assets/images/blog/blog3.png",className:`${W().imgBlogCard}`}),s.jsx("h4",{className:`${W().h4TextBlogCard}`,children:"Why Is Docker In Vogue?"}),s.jsx("p",{className:`${W().pTextBlogCard_Date}`,children:"January 1, 2024"}),s.jsx("a",{href:"/readMore",className:`${W().readMoreBtn}`,children:"Read More"})]})]})]})})}),N=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("section",{id:"homeOurClientsSec",style:{left:"0px",width:"100%",top:"0px"},className:`${v().homeOurClientWr}`,children:(0,s.jsxs)("div",{className:`${v().wrapper}`,children:[s.jsx("div",{className:`${v().innerWrapper}`,children:s.jsx("h3",{className:`${v().h3TextClients}`,children:"A few of our clients"})}),(0,s.jsxs)("div",{className:`${v().clientsLogoWr} ${v().innerWrapper}`,children:[(0,s.jsxs)("div",{className:`${v().clientsLogoRow}`,style:{"margin-bottom":"100px"},children:[s.jsx("img",{src:"assets/images/clientslogo/clientlogo1.png",className:`${v().clientslogoImg}`}),s.jsx("img",{src:"assets/images/clientslogo/clientlogo2.png",className:`${v().clientslogoImg}`}),s.jsx("img",{src:"assets/images/clientslogo/clientlogo3.png",className:`${v().clientslogoImg}`})]}),(0,s.jsxs)("div",{className:`${v().clientsLogoRow}`,children:[s.jsx("img",{src:"assets/images/clientslogo/clientlogo4.png",className:`${v().clientslogoImg}`}),s.jsx("img",{src:"assets/images/clientslogo/clientlogo5.png",className:`${v().clientslogoImg}`}),s.jsx("img",{src:"assets/images/clientslogo/clientlogo6.png",className:`${v().clientslogoImg}`})]})]}),s.jsx("div",{id:"blankDiv",className:`${v().joinTogetherBtnWr}`,children:s.jsx("a",{className:`${v().joinTogetherBtn}`,href:"/jointogether",children:"Let's join together"})})]})}),s.jsx("div",{style:{position:"relative",zIndex:2,backgroundColor:"#ffff"},id:"blogCard85",children:s.jsx($,{})})]});var b=r(5095),C=r.n(b);let P=()=>s.jsx("section",{className:`${C().projectInMindWr}`,children:s.jsx("div",{className:`${C().wrapper}`,children:(0,s.jsxs)("div",{className:`${C().innerProInMind}`,children:[s.jsx("p",{children:"Have a project in mind? Schedule a free consultation today."}),s.jsx("a",{href:"/contactSales",className:`${C().contactSalesBtn}`,children:"Contact Sales"})]})})});var B=r(7133),S=r.n(B);let T=()=>(0,s.jsxs)("section",{className:`${S().mainfooterWr}`,children:[s.jsx("div",{className:`${S().wrapper}`,children:(0,s.jsxs)("div",{className:`${S().innerfooterWr}`,children:[s.jsx("div",{className:`${S().imageWr}`,children:s.jsx("img",{src:"assets/images/whiteFooterLogo.svg",className:`${S().imgLogoFooter}`})}),(0,s.jsxs)("div",{className:`${S().linkWr}`,children:[s.jsx("h6",{className:`${S().h6text}`,children:"COMPANY"}),s.jsx("a",{href:"/",children:"Home"}),s.jsx("a",{href:"/about-us",children:"About Us"}),s.jsx("a",{href:"/services",children:"Services"}),s.jsx("a",{href:"/career",children:"Career"}),s.jsx("a",{href:"/blog",children:"Blogs"}),s.jsx("a",{href:"/contact-us",children:"Contact"})]}),(0,s.jsxs)("div",{className:`${S().linkWr}`,children:[s.jsx("h6",{className:`${S().h6text}`,children:"MOBILE APP"}),s.jsx("a",{href:"/",children:"iOS App"}),s.jsx("a",{href:"/androidapp",children:"Android App"}),s.jsx("a",{href:"/flutterapp",children:"Flutter App"})]}),(0,s.jsxs)("div",{className:`${S().linkWr}`,children:[s.jsx("h6",{className:`${S().h6text}`,children:"WEB APP"}),s.jsx("a",{href:"/",children:"Full Stack"}),s.jsx("a",{href:"/laravel",children:"Laravel"}),s.jsx("a",{href:"/reactjs",children:"ReactJS"}),s.jsx("a",{href:"/nodejs",children:"NodeJS"}),s.jsx("a",{href:"/php",children:"PHP"})]}),(0,s.jsxs)("div",{className:`${S().contactWr}`,children:[s.jsx("h6",{className:`${S().h6text}`,children:"CONTACT"}),s.jsx("p",{className:`${S().pText}`,children:"1-B, Agra Bombay Road, Press Complex, Indore 452001"}),s.jsx("p",{className:`${S().pText}`,children:"Support : support@dexbytes.com"}),s.jsx("p",{className:`${S().pText}`,children:"Skype : dexbytes_in"}),(0,s.jsxs)("div",{className:`${S().socialIconWr}`,children:[s.jsx("a",{href:"/linkedin",children:s.jsx("img",{src:"assets/images/social/social_linkedin_white.svg",className:`${S().socialIcon}`})}),s.jsx("a",{href:"/facebook",children:s.jsx("img",{src:"assets/images/social/social_facebook_white.svg",className:`${S().socialIcon}`})}),s.jsx("a",{href:"/instagram",children:s.jsx("img",{src:"assets/images/social/social_instagram_white.svg",className:`${S().socialIcon}`})}),s.jsx("a",{href:"/youtube",children:s.jsx("img",{src:"assets/images/social/social_youtube_white.svg",className:`${S().socialIcon}`})})]})]})]})}),s.jsx("div",{className:`${S().outerBottomTextWr}`,children:s.jsx("div",{className:`${S().wrapper}`,children:s.jsx("div",{className:`${S().innerBottomTextWr}`,children:s.jsx("p",{children:"\xa9 2024 DexBytes. All right reserved."})})})})]}),I=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.default,{}),(0,s.jsxs)("div",{style:{position:"relative",zIndex:2,backgroundColor:"#ffff"},children:[s.jsx(c,{}),s.jsx(_,{}),s.jsx(u,{}),s.jsx(f,{})]}),s.jsx(N,{}),s.jsx(P,{}),s.jsx(T,{})]});function k(){return s.jsx(o().Fragment,{children:s.jsx(I,{})})}},673:e=>{e.exports={mainBlogCardWr:"blog_cards_sec_mainBlogCardWr__7dbeC",wrapper:"blog_cards_sec_wrapper__33HtC",innerBlogCardWr:"blog_cards_sec_innerBlogCardWr__h9pS3",h3Text:"blog_cards_sec_h3Text__8fuVg",viewAllBlogBtn:"blog_cards_sec_viewAllBlogBtn__Zk7O6",BlogHeadTextWr:"blog_cards_sec_BlogHeadTextWr__F_mO9",imgBlogCard:"blog_cards_sec_imgBlogCard__OP7KS",h4TextBlogCard:"blog_cards_sec_h4TextBlogCard__d5g5V",pTextBlogCard_Date:"blog_cards_sec_pTextBlogCard_Date__JcKdw",readMoreBtn:"blog_cards_sec_readMoreBtn__ha4o5",BlogCard:"blog_cards_sec_BlogCard__jpyoH",BlogCardBoxWr:"blog_cards_sec_BlogCardBoxWr__rgP5r"}},5095:e=>{e.exports={projectInMindWr:"projectInMind_projectInMindWr__8U0_r",wrapper:"projectInMind_wrapper__hpUtF",innerProInMind:"projectInMind_innerProInMind__sYwnG",contactSalesBtn:"projectInMind_contactSalesBtn__kKQM9"}},7133:e=>{e.exports={mainfooterWr:"footer_mainfooterWr__ALwLE",wrapper:"footer_wrapper___RAG7",innerfooterWr:"footer_innerfooterWr__OSQIL",imageWr:"footer_imageWr__eQBC9",linkWr:"footer_linkWr__oFDt_",contactWr:"footer_contactWr__F34FG",h6text:"footer_h6text__ELQhS",socialIconWr:"footer_socialIconWr__rT4P6",outerBottomTextWr:"footer_outerBottomTextWr__B3Gn3",innerBottomTextWr:"footer_innerBottomTextWr__kG6at"}},3006:e=>{e.exports={innerLeftRightMargin:"home_featured_projects_innerLeftRightMargin__1pgfx",homefeaturedproject:"home_featured_projects_homefeaturedproject__PZ_6_",homefeaturedprojectWr:"home_featured_projects_homefeaturedprojectWr__9p4ss",h3text:"home_featured_projects_h3text__TxQFU",hfpInnerhadingSec:"home_featured_projects_hfpInnerhadingSec__RVQcz",projectBoxPopUp:"home_featured_projects_projectBoxPopUp__GWQz6",popUpShow:"home_featured_projects_popUpShow__UTzq6",projectBoxPopUpText:"home_featured_projects_projectBoxPopUpText__HEYJc",projectBoxPopUpArrow:"home_featured_projects_projectBoxPopUpArrow__LiPS4",innerHPImage:"home_featured_projects_innerHPImage__9toNm",innerHomeProjectBoxWr:"home_featured_projects_innerHomeProjectBoxWr__7z6DE",popUpRight:"home_featured_projects_popUpRight__9FfKc",homeProjectBoxWr:"home_featured_projects_homeProjectBoxWr__0VoD6",popUpRightDown:"home_featured_projects_popUpRightDown__H1Bdk",projectsCardWr:"home_featured_projects_projectsCardWr__fHSO7"}},2114:e=>{e.exports={homeOurClientWr:"home_our_clients_homeOurClientWr__QP7T6",wrapper:"home_our_clients_wrapper__b7TN6",innerWrapper:"home_our_clients_innerWrapper__FW5ud",h3TextClients:"home_our_clients_h3TextClients__V6vPk",clientslogoImg:"home_our_clients_clientslogoImg__J7a4W",clientsLogoWr:"home_our_clients_clientsLogoWr__j0ky_",clientsLogoRow:"home_our_clients_clientsLogoRow__6_1ID",joinTogetherBtnWr:"home_our_clients_joinTogetherBtnWr__yMR1l",joinTogetherBtn:"home_our_clients_joinTogetherBtn__RivqZ"}},4001:e=>{e.exports={sectionWrapper:"home_top_section_sectionWrapper__bUWcm",sectionHome:"home_top_section_sectionHome__J7IID",innerLeftRightMargin:"home_top_section_innerLeftRightMargin__flwtJ",sectionLeftBox:"home_top_section_sectionLeftBox__BTkm4",sectionRightBox:"home_top_section_sectionRightBox__GsEdx",innerSectionHomeWr:"home_top_section_innerSectionHomeWr__NWaVn",homeTopBtnWr:"home_top_section_homeTopBtnWr__tpHxM",leftHiringWr:"home_top_section_leftHiringWr__yH2p5",joinourTeamLink:"home_top_section_joinourTeamLink__cM4Bf",rightJoinourTeamWr:"home_top_section_rightJoinourTeamWr__03Vzs",homeTextOuterWr:"home_top_section_homeTextOuterWr__MPLp_",homeH1Text:"home_top_section_homeH1Text___Rl_Z",homePtext1:"home_top_section_homePtext1__mHQ4K",homeBtnWr:"home_top_section_homeBtnWr__lzjZ2",getYourProjectLink:"home_top_section_getYourProjectLink__bnpnG",homesectionWr:"home_top_section_homesectionWr__ZCovq"}},2185:e=>{e.exports={mainWhatWeDeliverSec:"home_what_we_deliver_mainWhatWeDeliverSec__UwuxN",whatWeDeliverSecWr:"home_what_we_deliver_whatWeDeliverSecWr___cbtU",innerWeDeliverSec:"home_what_we_deliver_innerWeDeliverSec__9hu1_",innerWeDeliverSecCardsWr:"home_what_we_deliver_innerWeDeliverSecCardsWr__It6wx",h3TextWeDeliverSec:"home_what_we_deliver_h3TextWeDeliverSec__Twt_R",pTextWeDeliverSec:"home_what_we_deliver_pTextWeDeliverSec__wC4cA",innerWeDeliverSecCard:"home_what_we_deliver_innerWeDeliverSecCard__MkaHF",pD:"home_what_we_deliver_pD__1pqEc",card_img_PD:"home_what_we_deliver_card_img_PD__O7dDE",pC:"home_what_we_deliver_pC__I07Cs",card_img_PC:"home_what_we_deliver_card_img_PC__yyNo3",pO:"home_what_we_deliver_pO__pepDd",card_img_PO:"home_what_we_deliver_card_img_PO__ZgWMX",card_imgs:"home_what_we_deliver_card_imgs__oJBGk",h4TextCard:"home_what_we_deliver_h4TextCard__snnzz",pTextCard:"home_what_we_deliver_pTextCard__0NzUN",viewSerBtn:"home_what_we_deliver_viewSerBtn__FCO_K",viewSerBtnLink:"home_what_we_deliver_viewSerBtnLink__Nkd7H"}},1751:e=>{e.exports={homeWhyWorkwithUsWr:"home_why_work_with_us_homeWhyWorkwithUsWr__hjH5p",wrapper:"home_why_work_with_us_wrapper__sZJvj",h3textWr:"home_why_work_with_us_h3textWr__wwxLX",h3text:"home_why_work_with_us_h3text__wHB_f",cardBox:"home_why_work_with_us_cardBox___Qfry",h4CardText:"home_why_work_with_us_h4CardText__DK8oh",pCardText:"home_why_work_with_us_pCardText__Bhjig",textCardWr:"home_why_work_with_us_textCardWr__cDlaU"}},7465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>a});let s=(0,r(6843).createProxy)(String.raw`C:\Users\HP\Desktop\next_Dexbytes\new_dexbytes\src\app\page.js`),{__esModule:i,$$typeof:o}=s,a=s.default},355:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,970,533,259],()=>r(7387));module.exports=s})();