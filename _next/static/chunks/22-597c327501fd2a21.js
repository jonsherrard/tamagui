(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{381:function(e,t,r){"use strict";var o=r(1706),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,_,l,n,d,b,c=!1;t||(t={}),i=t.debug||!1;try{if(l=o(),n=document.createRange(),d=document.getSelection(),(b=document.createElement("span")).textContent=e,b.ariaHidden="true",b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=s[t.format]||s.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(b),n.selectNodeContents(b),d.addRange(n),!document.execCommand("copy"))throw Error("copy command was unsuccessful");c=!0}catch(m){i&&console.error("unable to copy using execCommand: ",m),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(p){i&&console.error("unable to copy using clipboardData: ",p),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",_=r.replace(/#{\s*key\s*}/g,a),window.prompt(_,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(n):d.removeAllRanges()),b&&document.body.removeChild(b),l()}return c}},5969:function(e,t,r){"use strict";r.d(t,{i:function(){return _}});var o=r(2322);r(2784);var s=r(2655),a=r(6486);let i=e=>{switch(e){case"Tamagui (No Compiler)":case"Tamagui":return"$pink9";case"Stitches":return"$yellow9";case"Stitches 0.1.9":return"$yellow4";case"Styled Components":case"SC":return"$red9";case"react-native-web":case"RN":case"RNW":case"React Native":return"$purple9";case"Emotion":return"$green9";case"Dripsy":return"$blue9";case"NativeBase":return"$orange9";default:return"gray"}};function _(e){let{data:t,large:r,skipOthers:_=!1,animateEnter:l=!1}=e,n=Math.max(...t.map(e=>e.value));return(0,o.jsx)(s.FA,{space:"$2",marginTop:"_mt-1aj14ak",marginBottom:"_mb-1aj14ak",children:t.map((e,t)=>{let _="".concat(Math.round(e.value/n*100),"%");return(0,o.jsxs)(s.sL,{space:"$3",children:[(0,o.jsx)("div",{className:(0,a.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  "+(r?" _w-120px":" _w-70px")),children:(0,o.jsx)("p",{className:(0,a.concatClassName)("  is_Paragraph font_body _cur-text _ussel-text _ml-0px _mr-0px _ww-break-word _bxs-border-box _dsp-inline  _mb--3px _mt--3px _ta-right _whiteSpace-nowrap _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz  "+("Tamagui"===e.name?" _fow-700":" _fow-400")),children:e.name},e.name)}),(0,o.jsx)("div",{className:"  is_XStack _fg-1 _mr-65px _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-center ",children:(0,o.jsx)(s.FA,{bc:i(e.name),o:(e.name,1),width:_,height:20,br:"$2",position:"relative",jc:"center",scaleX:1,animation:"lazy",...l&&{enterStyle:{opacity:0,scaleX:0}},children:(0,o.jsxs)("p",{className:"  is_Paragraph font_body _r-lrpkci _pos-absolute _whiteSpace-nowrap _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcbz _ls-3oolt0 _fos-3slpwn _lh-3or5r4 _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline _transform-1hmnzav ",children:[e.value,"ms"]})})})]},t)})})}r(1166)},4502:function(e,t,r){"use strict";r.d(t,{F:function(){return a}});var o=r(2322);r(2784);var s=r(5969);let a=()=>(0,o.jsx)(s.i,{animateEnter:!0,skipOthers:!0,large:!0,data:[{name:"Tamagui",value:.02},{name:"react-native-web",value:.063},{name:"Dripsy",value:.108},{name:"NativeBase",value:.73}]})},1467:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var o=r(2322),s=r(5503);r(2784);let a=()=>(0,o.jsx)("div",{className:"  is_YStack _mr-lrpjp9 _bblr-100px _bbrr-100px _btrr-100px _btlr-100px _jc-center _h-25px _w-25px _bg-8htuv0 _mt-2px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:(0,o.jsx)(s.J,{size:12,color:"var(--colorHover)"})});r(2627)},4228:function(e,t,r){"use strict";r.d(t,{E:function(){return a},w:function(){return i}});var o=r(1560),s=r(5360);let a=(0,o.z)(s.Paragraph,{name:"Code",tag:"code",fontFamily:"$mono",size:"$3",variants:{colored:{true:{color:"$color",backgroundColor:"$background"}}},borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj147z",paddingRight:"_pr-1aj147z",paddingBottom:"_pb-1aj147z",paddingLeft:"_pl-1aj147z",whiteSpace:"_whiteSpace-pre",cursor:"_cur-inherit",lineHeight:"_lh-20px"}),i=(0,o.z)(s.Paragraph,{name:"CodeInline",tag:"code",fontFamily:"$mono",paddingTop:"_pt-lrpjoe",paddingRight:"_pr-lrpjoe",paddingBottom:"_pb-lrpjoe",paddingLeft:"_pl-lrpjoe",fontSize:"_fos-inherit",borderTopLeftRadius:"_btlr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderBottomLeftRadius:"_bblr-lmimb3",cursor:"_cur-inherit",backgroundColor:"_bg-180kg62",color:"_col-rnt87j"});r(8429)},4691:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var o=r(2322);r(2784);var s=r(357),a=r(2655),i=r(4228),_=r(9943),l=r(6486);function n(e){let{source:t,language:r,...n}=e;return(0,o.jsx)(a.FA,{borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",flexShrink:"_fs-1",flexGrow:"_fg-1",borderRightStyle:"_brs-solid",borderLeftStyle:"_bls-solid",borderTopStyle:"_bts-solid",borderBottomStyle:"_bbs-solid",borderLeftWidth:"_blw-1px",borderBottomWidth:"_bbw-1px",borderRightWidth:"_brw-1px",borderTopWidth:"_btw-1px",overflowY:"_oy-hidden",overflowX:"_ox-hidden",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",backgroundColor:"_bg-8htuv0",...n,className:(0,l.concatClassName)(("language-".concat(r)||0)+" "+(n&&n.className||""),n),children:(0,o.jsx)(s.Z,{contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,o.jsx)(s.Z,{horizontal:!0,contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,o.jsx)(_.S,{f:1,children:(0,o.jsx)(i.E,{dangerouslySetInnerHTML:{__html:t}})})})})})}r(3580)},6421:function(e,t,r){"use strict";r.d(t,{q:function(){return k},M:function(){return y}});var o=r(2322),s=r(2895),a=r(1428),i=r(2029),_=r(9097),l=r.n(_),n=r(2784),d=r(2655),b=r(9145),c=r(2341),p=r(8682),m=r(1312);let x=e=>{let{tint:t}=(0,m.d5)();return(0,o.jsx)(p.Q,{tint:t,...e})};var f=r(4691),h=r(4767),u=r(8074),g=r(6486);let w="  is_YStack",j="  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",v=[{name:"Bouncy",description:"A bouncy spring",animation:"bouncy",settings:s.s.animations.bouncy},{name:"Lazy",description:"A lazy, straightforward spring",animation:"lazy",settings:s.s.animations.lazy},{name:"Quick",description:"A super fast spring",animation:"quick",settings:s.s.animations.quick}],A=!1;function y(e){let{animationCode:t}=e,{tint:r}=(0,m.d5)(),[s,a]=(0,n.useState)(!0);return(0,o.jsx)("div",{className:j,children:(0,o.jsxs)(h._k,{position:"relative",space:"$8",children:[(0,o.jsxs)(d.FA,{zIndex:"_zi-1",space:"$3",children:[(0,o.jsxs)(u.PP,{pos:"relative",children:["Universal ",(0,o.jsx)("span",{className:"rainbow clip-text",children:"Animations"})]}),(0,o.jsx)(u.vk,{children:"Better platform targeting with animation drivers that can be changed without changing code."})]}),(0,o.jsxs)("div",{className:"  is_XStack _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,o.jsx)(c.Q,{name:r,children:(0,o.jsx)("div",{className:"  is_YStack _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _zi-100 _bg-8htuv0 _mr-lrpkci _als-center _fg-2 _fd-column _miw-5511 _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch _bxsh-asvu26 ",children:(0,o.jsx)(k,{})})}),(0,o.jsxs)("div",{className:"  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _transform-1rgx1si _oy-hidden _ox-hidden _bblr-lmimfe _bbrr-lmimfe _btrr-lmimfe _btlr-lmimfe _pos-relative _bxsh-1duix2k _dsp-_sm_none ",children:[(0,o.jsxs)("div",{className:(0,g.concatClassName)(w+" _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0  _jc-center _ai-center _pos-absolute _t-0px _l-0px _r-0px _b-0px  "+(s?" _o-1 _pe-auto":" _o-0 _pe-none")),children:[(0,o.jsx)("div",{className:"  is_YStack _o-0dot5 _t-6011 _pos-absolute _l-0px _r-0px _b-0px _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "}),(0,o.jsx)(b.zx,{accessibilityLabel:"View more",transform:"_transform-1m3rtws",iconAfter:i.K,size:"$4",paddingRight:"_pr-1aj14ak",paddingLeft:"_pl-1aj14ak",height:"_h-a0wku7",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",themeInverse:!0,zIndex:"_zi-10",onPress:()=>a(!1),children:"View more"})]}),(0,o.jsx)(f.s,{pe:s?"none":"auto",maxHeight:500,height:500,maxWidth:530,minWidth:530,language:"tsx",source:t})]})]}),(0,o.jsxs)(d.sL,{alignSelf:"_als-center",space:"$3",children:[(0,o.jsx)(l(),{legacyBehavior:!0,href:"/docs/core/animations#css",passHref:!0,children:(0,o.jsx)(b.zx,{accessibilityLabel:"CSS docs",fontFamily:"$silkscreen",theme:r,tag:"a",children:"CSS \xbb"})}),(0,o.jsx)(l(),{legacyBehavior:!0,href:"/docs/core/animations#reanimated",passHref:!0,children:(0,o.jsx)(b.zx,{accessibilityLabel:"Reanimated docs",fontFamily:"$silkscreen",tag:"a",children:"Reanimated \xbb"})}),(0,o.jsx)(l(),{legacyBehavior:!0,href:"/docs/core/animations",passHref:!0,children:(0,o.jsx)(b.zx,{accessibilityLabel:"Animation docs",fontFamily:"$silkscreen",tag:"a",children:"Docs \xbb"})})]})]})})}let k=(0,n.memo)(()=>{let[e,t]=(0,n.useState)(0),r=v[e],s=(0,n.useRef)(null),[i,_]=(0,n.useState)(2),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;_(t=>(t+e)%3)},d="string"==typeof r.settings?[["transition",r.settings]]:Object.entries(r.settings);return(0,a.q)(s,e=>{let[t]=e;if(null==t?void 0:t.isIntersecting){let r=e=>{"ArrowRight"===e.key&&l(),"ArrowLeft"===e.key&&l(-1)};return A||(A=!0,setTimeout(()=>{l()},250)),window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}}},{threshold:.5}),(0,o.jsxs)("div",{className:"  is_XStack _als-center _h-305px _oy-hidden _ox-hidden _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _w-10011 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _brs-solid _bls-solid _bts-solid _bbs-solid _blw-1px _bbw-1px _brw-1px _btw-1px _fd-1b2fkz3 _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _bxsh-9enu5w _transform-199k8sv ",children:[(0,o.jsx)("div",{ref:s,className:"  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _w-6011 _jc-center _ai-center _bg-180kg62 _pos-relative _w-_sm_10011 ",children:(0,o.jsx)(x,{position:i,animation:r.animation})}),(0,o.jsx)("div",{className:"  is_Separator _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _bbs-solid _brs-solid _fg-1 _bls-solid _bts-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-cx1iw7 "}),(0,o.jsxs)("div",{className:"  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _w-4011 _dsp-_sm_none ",children:[(0,o.jsx)(c.Q,{name:"alt2",children:(0,o.jsx)("div",{className:"  is_YStack _bg-cbjnf9 _zi--1 _pos-absolute _t-0px _l-0px _r-0px _b-0px _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "})}),(0,o.jsx)("div",{className:"  is_YStack _fg-1 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:v.map((e,s)=>{let a=e===r;return(0,o.jsx)(c.Q,{name:a?"active":"alt2",children:(0,o.jsxs)("div",{onClick(){t(s),l()},className:(0,g.concatClassName)(w+" _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _cur-pointer _pb-1aj148u _pt-1aj148u _pr-1aj14ak _pl-1aj14ak  "+(a?"  _bg-8htuv0":" ")),children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _fow-800 _cur-inherit _ussel-none _col-b5vn3b _ff-4yewjq _ls-3ooluq _fos-3slpyd _lh-3or5su _ml-0px _mb-lrpkbn _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:e.name}),(0,o.jsx)("p",{className:"  is_Paragraph font_body _col-vhj0rs _maw-10011 _ox-hidden _oy-hidden _textOverflow-ellipsis _whiteSpace-nowrap _cur-inherit _ussel-none _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:e.description})]})},e.name)})}),(0,o.jsx)("div",{className:"  is_Separator _mah-0px _h-0px _fg-1 _brs-solid _bls-solid _bts-solid _bbs-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-n24na2 "}),(0,o.jsx)("div",{className:"  is_XStack _jc-center _pl-1aj14ak _pb-1aj14ak _pr-1aj14ak _pt-1aj14ak _bg-180kg62 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:d.map((e,t)=>{let[r,s]=e;return"type"===r?null:(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:r}),(0,o.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcek _ls-3oolvl _fos-3slpz8 _lh-3or5tp _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:s})]}),t<d.length-1&&(0,o.jsx)("div",{className:"  is_Separator _ml-15px _mr-15px _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _bbs-solid _brs-solid _fg-1 _bls-solid _bts-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-cx1iw7 "})]},r)})})]})]})});r(6301)},147:function(e,t,r){"use strict";r.d(t,{D:function(){return g}});var o=r(2322),s=r(2930),a=r(2784),i=r(2655),_=r(3188),l=r(9145),n=r(4691),d=r(4767),b=r(8074),c=r(5666),p=r(1312),m=r(6486),x=r(2341);let f="  is_Paragraph font_body _pl-1aj14ca _pr-1aj14ca _ta-center _mih-50px _als-center _maw-480px _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcff _ls-3oolwg _fos-3slq03 _lh-3or5uk _ml-0px _mb-1aj14ak _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",h="  is_H5 font_heading _als-center _col-qpe6k3 _tt-3tb9i2 _ff-4yewjq _fow-3uqcga _ls-3oolxb _fos-3slq0y _lh-3or5vf _ml-0px _mb-0px _mr-0px _mt-0px _cur-text _ussel-text _ww-break-word _bxs-border-box _dsp-inline ",u="  _maw-_sm_10011";function g(e){let{examples:t,onlyDemo:r}=e,{tint:n}=(0,p.d5)(),[g,j]=(0,a.useState)(0),v=t[g];return(0,o.jsx)(d._k,{position:"relative",children:(0,o.jsxs)(i.FA,{zIndex:"_zi-1",space:"$6",children:[!r&&(0,o.jsxs)(i.FA,{alignItems:"_ai-center",space:"$3",children:[(0,o.jsx)(b.PP,{children:"A better style system"}),(0,o.jsxs)(b.vk,{tag:"a",ai:"center",jc:"center",children:["A multi-faceted optimizing compiler enables",(0,o.jsx)("br",{}),(0,o.jsx)("strong",{children:["SSR-first atomic CSS","eliminating inline style logic","flattening your component tree","removing dead code entirely"][g]}),"."]})]}),(0,o.jsx)(_.E4,{scrollable:!0,bordered:!0,bc:"$color2",chromeless:!0,theme:n,maxWidth:"100%",als:"center",children:t.map((e,t)=>(0,o.jsx)(l.zx,{accessibilityLabel:"See example",onPress:()=>j(t),theme:t===g?"active":null,size:"$4",paddingRight:"_pr-1aj14ak",paddingLeft:"_pl-1aj14ak",height:"_h-a0wku7",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",fontFamily:"$silkscreen",chromeless:!0,backgroundColor:"_bg-16hdpw2",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",shadowColor:"_shac-16hdpw2",className:(0,m.concatClassName)(t===g?" _o-1":" _o-0dot5"),children:e.name},t))}),(0,o.jsxs)("div",{className:(0,m.concatClassName)("  is_XStack _jc-7aqssh _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _fd-_sm_column "+(r?"  _fd-column":" ")),children:[(0,o.jsxs)(i.FA,{maxWidth:"_maw-5011",flexGrow:"_fg-1",flexShrink:"_fs-1",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",space:"$2",className:(0,m.concatClassName)((r?"  _maw-10011":" ")+u),children:[(0,o.jsx)("h5",{className:h,children:"Input"}),(0,o.jsx)("p",{className:f,children:(0,o.jsx)("span",{style:{opacity:.65},children:v.input.description})}),(0,o.jsx)(w,{...v.input})]},"input".concat(g)),(0,o.jsx)(x.Q,{name:"alt2",children:(0,o.jsx)("div",{className:(0,m.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0  _pe-none _zi-1000 _t-95px _jc-center _ai-center _r-0px _l-0px _pos-absolute  _dsp-_sm_none "+(r?"  _dsp-none":" ")),children:(0,o.jsx)(c.b,{als:"center",p:"$3",mb:0,children:(0,o.jsx)(s.N,{color:"var(--colorHover)",size:22})})})}),(0,o.jsxs)(i.FA,{maxWidth:"_maw-5011",flexGrow:"_fg-1",flexShrink:"_fs-1",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",space:"$2",className:(0,m.concatClassName)((r?"  _mt-1aj14ca _maw-10011":" ")+"  _mt-_sm_1aj14ca"+u),children:[(0,o.jsx)("h5",{className:h,children:"Output"}),(0,o.jsx)("p",{className:f,children:(0,o.jsx)("span",{style:{opacity:.65},children:v.output.description})}),(0,o.jsx)(w,{...v.output})]},"output".concat(g))]})]})})}let w=(0,a.memo)(e=>{let{examples:t}=e,[r,s]=(0,a.useState)(0),i=t[r],{tint:d}=(0,p.d5)();return(0,o.jsxs)("div",{className:"  is_YStack _fg-1 _oy-hidden _ox-hidden _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:[(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(_.E4,{size:"$2",theme:d,bordered:!0,zi:10,mb:"$-3",als:"center",children:t.map((e,t)=>(0,o.jsx)(l.zx,{accessibilityLabel:"See example",onPress:()=>s(t),theme:t===r?"active":"alt1",size:"$2",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",height:"_h-a0wksh",borderTopLeftRadius:"_btlr-lmim8i",borderTopRightRadius:"_btrr-lmim8i",borderBottomRightRadius:"_bbrr-lmim8i",borderBottomLeftRadius:"_bblr-lmim8i",children:e.name},t))})}),(0,o.jsx)("div",{className:"  is_XStack _fg-1 _maw-10011 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:(0,o.jsx)("div",{className:"  is_YStack _o-0hover-1 _o-0dot9 _maw-10011 _fg-1 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:(0,o.jsx)(n.s,{height:300,theme:"Card",maxHeight:300,f:1,language:i.language,source:i.code})})})]})});r(2529)},8074:function(e,t,r){"use strict";r.d(t,{PP:function(){return i},t_:function(){return a},vk:function(){return _}});var o=r(1560),s=r(5360);let a=(0,o.z)(s.H1,{className:"word-break-keep-all",size:"$9","color-gtSm":"_col-_gtSm_b5vn3b","textTransform-gtSm":"_tt-_gtSm_1b7l12b","fontFamily-gtSm":"_ff-_gtSm_4yewjq","fontWeight-gtSm":"_fow-_gtSm_1cfkkj7","letterSpacing-gtSm":"_ls-_gtSm_1782q72","fontSize-gtSm":"_fos-_gtSm_1all9bv","lineHeight-gtSm":"_lh-_gtSm_17a9wki","maxWidth-gtSm":"_maw-_gtSm_9011",marginBottom:"_mb-1aj148u"}),i=(0,o.z)(s.H2,{className:"word-break-keep-all",name:"HomeH2",size:"$11","color-xs":"_col-_xs_b5vn3b","textTransform-xs":"_tt-_xs_3tb9kn","fontFamily-xs":"_ff-_xs_4yewjq","fontWeight-xs":"_fow-_xs_3uqciv","letterSpacing-xs":"_ls-_xs_3oolzw","fontSize-xs":"_fos-_xs_3slq3j","lineHeight-xs":"_lh-_xs_3or5y0","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_1b7l12b","fontFamily-sm":"_ff-_sm_4yewjq","fontWeight-sm":"_fow-_sm_1cfkkj7","letterSpacing-sm":"_ls-_sm_1782q72","fontSize-sm":"_fos-_sm_1all9bv","lineHeight-sm":"_lh-_sm_17a9wki",marginTop:"_mt-lrpkci",maxWidth:"_maw-720px",alignSelf:"_als-center",textAlign:"_ta-center"}),_=(0,o.z)(s.H3,{className:"word-break-keep-all",fontFamily:"$body",name:"HomeH3",theme:"alt1",size:"$8","fontWeight-sm":"_fow-_sm_400","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_none","fontFamily-sm":"_ff-_sm_4yewjq","letterSpacing-sm":"_ls-_sm_-015px1a","fontSize-sm":"_fos-_sm_3slq0y","lineHeight-sm":"_lh-_sm_3or5vf",maxWidth:"_maw-690px",letterSpacing:"_ls--015px1a",paddingRight:"_pr-20px",paddingLeft:"_pl-20px",fontWeight:"_fow-400",alignSelf:"_als-center",textAlign:"_ta-center"});r(7043)},5666:function(e,t,r){"use strict";r.d(t,{b:function(){return a}});var o=r(1560),s=r(2655);let a=(0,o.z)(s.FA,{alignSelf:"_als-flex-start",paddingTop:"_pt-1aj148u",paddingRight:"_pr-1aj148u",paddingBottom:"_pb-1aj148u",paddingLeft:"_pl-1aj148u",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-100px",borderTopRightRadius:"_btrr-100px",borderBottomRightRadius:"_bbrr-100px",borderBottomLeftRadius:"_bblr-100px"});r(822)},7742:function(e,t,r){"use strict";r.d(t,{S:function(){return f}});var o=r(2322),s=r(5032),a=r(6935),i=r(2930),_=r(2784),l=r(2341),n=r(858),d=r(2655),b=r(4476),c=r(9145),p={src:"/_next/static/media/kanye.8a1ab422.jpg",height:182,width:182,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAApAdH/8QAHBAAAQQDAQAAAAAAAAAAAAAAAwECEyIABAUG/9oACAEBAAE/ADbHYF6djoTIJH2W0Uef/8QAGhEAAQUBAAAAAAAAAAAAAAAAAQACAxESMv/aAAgBAgEBPwCJud0T0v/EABkRAAEFAAAAAAAAAAAAAAAAAAEAAyEyM//aAAgBAwEBPwB45wKBf//Z",blurWidth:8,blurHeight:8},m=r(6486);let x="  is_Paragraph font_body _col-rnt87j _cur-text _ussel-text _ff-4yewjq _fow-3uqcdp _ls-3ooluq _fos-3slpyd _lh-3or5su _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",f=(0,_.memo)(e=>{let{theme:t,alt:r,onHoverSection:_,pointerEvents:f,pointerEventsControls:h,...u}=e;return(0,o.jsx)(l.Q,{name:r?"alt".concat(r):null,children:(0,o.jsxs)(n.Zb,{overflowX:"_ox-visible",overflowY:"_oy-visible",bordered:!0,borderBottomLeftRadius:"_bblr-lmimej",borderBottomRightRadius:"_bbrr-lmimej",borderTopRightRadius:"_btrr-lmimej",borderTopLeftRadius:"_btlr-lmimej",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_bbs-solid",borderTopStyle:"_bts-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_brs-solid",pointerEvents:f,alignItems:"_ai-stretch",paddingTop:"_pt-0px",paddingRight:"_pr-0px",paddingBottom:"_pb-0px",paddingLeft:"_pl-0px",...u,className:(0,m.concatClassName)(""+(u&&u.className||""),u),children:[(0,o.jsxs)(d.sL,{paddingLeft:"_pl-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingRight:"_pr-1aj14ak",paddingTop:"_pt-1aj14ak",alignItems:"_ai-center",space:"$5",children:[(0,o.jsx)("div",{className:"  is_Square _w-90px _h-90px _miw-90px _maw-90px _mah-90px _mih-90px _bblr-lmimdo _bbrr-lmimdo _btrr-lmimdo _btlr-lmimdo _oy-hidden _ox-hidden _bg-180kg62 _jc-center _ai-center _fd-column _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 ",children:(0,o.jsx)(b.E,{width:90,height:90,src:p.src})}),(0,o.jsxs)("div",{className:"  is_YStack _jc-center _mt--10px _fd-column _miw-165px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _fow-700 _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _ls-3oolvl _fos-3slpz8 _lh-3or5tp _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:"Spaceship"}),(0,o.jsx)("p",{className:x,children:"Kanye West"}),(0,o.jsx)("p",{className:x,children:"College Dropout"})]})]}),(0,o.jsx)("div",{className:"  is_Separator _mb--1px _mah-0px _h-0px _fg-1 _brs-solid _bls-solid _bts-solid _bbs-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-n24na2 "}),(0,o.jsxs)(d.sL,{alignItems:"_ai-center",borderBottomLeftRadius:"_bblr-17px",borderBottomRightRadius:"_bbrr-17px",backgroundColor:"_bg-8htuv0",paddingBottom:"_pb-1aj14ak",paddingTop:"_pt-1aj14ak",paddingLeft:"_pl-1aj14ca",paddingRight:"_pr-1aj14ca",width:"_w-10011",zIndex:"_zi-1000",space:"$5",justifyContent:"_jc-center",pointerEvents:f,children:[(0,o.jsx)(s.F,{size:20}),(0,o.jsx)(c.zx,{bordered:!0,"transform-hover":"_transform-0hover-1g5rx3l","borderTopColor-hover":"_btc-0hover-1byp41v","borderRightColor-hover":"_brc-0hover-1byp41v","borderBottomColor-hover":"_bbc-0hover-1byp41v","borderLeftColor-hover":"_blc-0hover-1byp41v","boxShadow-hover":"_bxsh-0hover-13vh14k","borderTopColor-active":"_btc-0active-1fsewm4","borderRightColor-active":"_brc-0active-1fsewm4","borderBottomColor-active":"_bbc-0active-1fsewm4","borderLeftColor-active":"_blc-0active-1fsewm4",marginBottom:"_mb-lrpkgt",marginTop:"_mt-lrpkgt",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_bbs-solid",borderTopStyle:"_bts-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_brs-solid",icon:a.d,size:"$8",circular:!0,width:"_w-a0wkxn",height:"_h-a0wkxn",maxWidth:"_maw-a0wkxn",maxHeight:"_mah-a0wkxn",minWidth:"_miw-a0wkxn",minHeight:"_mih-a0wkxn",borderTopLeftRadius:"_btlr-100000px",borderTopRightRadius:"_btrr-100000px",borderBottomRightRadius:"_bbrr-100000px",borderBottomLeftRadius:"_bblr-100000px",paddingTop:"_pt-0px",paddingRight:"_pr-0px",paddingBottom:"_pb-0px",paddingLeft:"_pl-0px",elevation:"$2",boxShadow:"_bxsh-1cgax6a",pointerEvents:h}),(0,o.jsx)(i.N,{size:20})]})]})})});r(5625)},9943:function(e,t,r){"use strict";r.d(t,{S:function(){return a}});var o=r(1560),s=r(2655);let a=(0,o.z)(s.FA,{tag:"pre",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj14ak",paddingRight:"_pr-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingLeft:"_pl-1aj14ak",overflowX:"_ox-visible",overflowY:"_oy-visible"});r(6776)},1166:function(){},2627:function(){},8429:function(){},3580:function(){},6301:function(){},2529:function(){},7043:function(){},822:function(){},5625:function(){},6776:function(){},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);