import{d as K,o as p,c as v,a as Q,w as t,b as e,V as W,e as r,t as g,f as I,g as C,h as X,i as Y,j as O,k as E,s as Z,l as x,r as ee,F as te,m as ae,n as o,u as i,p as h,q as le,v as k,x as _,y as $,z as B,A as L,B as P,C as U,D as M,E as A,G as se,H as T,I as V,J as F,K as q,L as ie,M as oe,N as ne,O as re,P as de,Q as ue,R as me,S as ce,T as fe}from"./index-d089162b.js";import{m as H}from"./md5-cf2f62a3.js";import{u as pe}from"./common-40607810.js";const S={Sidebar_drawer:!0,Customizer_drawer:!1,mini_sidebar:!1,fontTheme:"Roboto",inputBg:!1},R=K({id:"customizer",state:()=>({Sidebar_drawer:S.Sidebar_drawer,Customizer_drawer:S.Customizer_drawer,mini_sidebar:S.mini_sidebar,fontTheme:"Poppins",inputBg:S.inputBg}),getters:{},actions:{SET_SIDEBAR_DRAWER(){this.Sidebar_drawer=!this.Sidebar_drawer},SET_MINI_SIDEBAR(a){this.mini_sidebar=a},SET_FONT(a){this.fontTheme=a}}}),he=[{title:"面板",icon:"mdi-view-dashboard",to:"/dashboard/default"},{title:"配置",icon:"mdi-cog",to:"/config"},{title:"插件",icon:"mdi-puzzle",to:"/extension"},{title:"控制台",icon:"mdi-console",to:"/console"},{title:"模型微调",icon:"mdi-grain",to:"/fine-tune"}],j={__name:"NavItem",props:{item:Object,level:Number},setup(a){return(d,u)=>(p(),v(O,{to:a.item.type==="external"?"":a.item.to,href:a.item.type==="external"?a.item.to:"",rounded:"",class:"mb-1",color:"secondary",disabled:a.item.disabled,target:a.item.type==="external"?"_blank":""},Q({prepend:t(()=>[a.item.icon?(p(),v(I,{key:0,size:a.item.iconSize,class:"hide-menu",icon:a.item.icon},null,8,["size","icon"])):C("",!0)]),default:t(()=>[e(X,null,{default:t(()=>[r(g(a.item.title),1)]),_:1}),a.item.subCaption?(p(),v(Y,{key:0,class:"text-caption mt-n1 hide-menu"},{default:t(()=>[r(g(a.item.subCaption),1)]),_:1})):C("",!0)]),_:2},[a.item.chip?{name:"append",fn:t(()=>[e(W,{color:a.item.chipColor,class:"sidebarchip hide-menu",size:a.item.chipIcon?"small":"default",variant:a.item.chipVariant,"prepend-icon":a.item.chipIcon},{default:t(()=>[r(g(a.item.chip),1)]),_:1},8,["color","size","variant","prepend-icon"])]),key:"0"}:void 0]),1032,["to","href","disabled","target"]))}},_e={class:"text-center"},ve={style:{position:"absolute",bottom:"32px",width:"100%"},class:"text-center"},be={key:1,style:{display:"block"}},Ve={key:2,style:{display:"block"}},ge=o("small",{style:{display:"block","margin-top":"8px"}},"© 2024 AstrBot",-1),ye={name:"VerticalSidebar",components:{NavItem:j},data:()=>({version:"",buildVer:""}),mounted(){this.get_version(),fetch("/assets/version").then(a=>a.text()).then(a=>{a.length>10||(this.buildVer=a)})},methods:{get_version(){k.get("/api/stat/version").then(a=>{this.version=a.data.data.version}).catch(a=>{console.log(a)})}}},we=E({...ye,setup(a){const d=R(),u=Z(he);return(f,m)=>(p(),v(le,{left:"",modelValue:i(d).Sidebar_drawer,"onUpdate:modelValue":m[0]||(m[0]=c=>i(d).Sidebar_drawer=c),elevation:"0","rail-width":"80","mobile-breakpoint":"960",app:"",class:"leftSidebar",rail:i(d).mini_sidebar},{default:t(()=>[e(ae,{class:"pa-4 listitem",style:{height:"auto"}},{default:t(()=>[(p(!0),x(te,null,ee(u.value,(c,y)=>(p(),v(j,{key:y,item:c,class:"leftPadding"},null,8,["item"]))),128))]),_:1}),o("div",_e,[e(W,{color:"inputBorder",size:"small"},{default:t(()=>[r(" v"+g(f.version),1)]),_:1})]),o("div",ve,[i(d).mini_sidebar?C("",!0):(p(),v(O,{key:0,href:"https://astrbot.soulter.top/"},{default:t(()=>[e(h,{variant:"plain",size:"small"},{default:t(()=>[r(" 🤔 初次使用？点击查看文档！ ")]),_:1})]),_:1})),f.buildVer?(p(),x("small",be,"构建: "+g(f.buildVer),1)):(p(),x("small",Ve,"构建: embedded")),ge])]),_:1},8,["modelValue","rail"]))}}),Se=o("span",{style:{"margin-left":"16px","font-size":"24px","font-weight":"1000"}},[r("Astr"),o("span",{style:{"font-weight":"normal"}},"Bot")],-1),xe={class:"mr-4"},ke={key:0},Ce=o("span",{class:"text-h5"},"更新项目",-1),ze=o("h3",{class:"mb-4"},"升级到最新版本",-1),Be={style:{"margin-top":"16px"}},Te=o("h3",{class:"mb-4"},"切换到指定版本或指定提交",-1),Ie=o("div",{class:"mb-4"},[o("small",null,"如 v3.3.16 (不带 SHA) 或 42e5ec5d80b93b6bfe8b566754d45ffac4c3fe0b"),o("br"),o("a",{href:"https://github.com/Soulter/AstrBot/commits/master"},[o("small",null,"查看 master 分支提交记录（点击右边的 copy 即可复制）")])],-1),Ae=o("span",{class:"text-h5"},"密码修改",-1),Ee=o("small",null,"如果是第一次修改密码，原密码请留空。",-1),Re=o("br",null,null,-1),Ne=E({__name:"VerticalHeader",setup(a){const d=R();let u=_(!1),f=_(!1),m=_(""),c=_(""),y=_(""),b=_(""),z=_(!1),w=_("");const G=n=>{window.open(n,"_blank")};function J(){m.value!=""&&(m.value=H.md5(m.value)),c.value=H.md5(c.value),k.post("/api/auth/password/reset",{password:m.value,new_password:c.value}).then(n=>{if(n.data.status=="error"){y.value=n.data.message,m.value="",c.value="";return}u.value=!u.value,y.value=n.data.message,setTimeout(()=>{re().logout()},1e3)}).catch(n=>{console.log(n),y.value=n,m.value="",c.value=""})}function N(){b.value="正在检查更新...",k.get("/api/update/check").then(n=>{z.value=n.data.data.has_new_version,b.value=n.data.message}).catch(n=>{console.log(n),b.value=n})}function D(n){b.value="正在切换版本...",k.post("/api/update/do",{version:n}).then(l=>{b.value=l.data.message,l.data.status=="success"&&setTimeout(()=>{window.location.reload()},1e3)}).catch(l=>{console.log(l),b.value=l})}return N(),pe().createWebSocket(),(n,l)=>(p(),v(ne,{elevation:"0",height:"70"},{default:t(()=>[e(h,{style:{"margin-left":"22px"},class:"hidden-md-and-down text-secondary",color:"lightsecondary",icon:"",rounded:"sm",variant:"flat",onClick:l[0]||(l[0]=$(s=>i(d).SET_MINI_SIDEBAR(!i(d).mini_sidebar),["stop"])),size:"small"},{default:t(()=>[e(I,null,{default:t(()=>[r("mdi-menu")]),_:1})]),_:1}),e(h,{class:"hidden-lg-and-up text-secondary ms-3",color:"lightsecondary",icon:"",rounded:"sm",variant:"flat",onClick:$(i(d).SET_SIDEBAR_DRAWER,["stop"]),size:"small"},{default:t(()=>[e(I,null,{default:t(()=>[r("mdi-menu")]),_:1})]),_:1},8,["onClick"]),Se,e(B),o("div",xe,[i(z)?(p(),x("small",ke," 有新版本！ ")):C("",!0)]),e(q,{modelValue:i(f),"onUpdate:modelValue":l[5]||(l[5]=s=>V(f)?f.value=s:f=s),width:"700"},{activator:t(({props:s})=>[e(h,L({onClick:N,class:"text-primary mr-4",color:"lightprimary",variant:"flat",rounded:"sm"},s),{default:t(()=>[r(" 更新 🔄 ")]),_:2},1040)]),default:t(()=>[e(P,null,{default:t(()=>[e(U,null,{default:t(()=>[Ce]),_:1}),e(M,null,{default:t(()=>[e(A,null,{default:t(()=>[ze,o("p",null,g(i(b)),1),e(h,{class:"mt-4 mb-4",onClick:l[1]||(l[1]=s=>D("latest")),color:"primary",style:{"border-radius":"10px"},disabled:!i(z)},{default:t(()=>[r(" 更新到最新版本 ")]),_:1},8,["disabled"]),e(se),o("div",Be,[Te,e(T,{label:"输入版本号或 master 分支下的 commit hash。",modelValue:i(w),"onUpdate:modelValue":l[2]||(l[2]=s=>V(w)?w.value=s:w=s),required:"",variant:"outlined"},null,8,["modelValue"]),Ie,e(h,{color:"error",style:{"border-radius":"10px"},onClick:l[3]||(l[3]=s=>D(i(w)))},{default:t(()=>[r(" 确定切换 ")]),_:1})])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(B),e(h,{color:"blue-darken-1",variant:"text",onClick:l[4]||(l[4]=s=>V(f)?f.value=!1:f=!1)},{default:t(()=>[r(" 关闭 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:i(u),"onUpdate:modelValue":l[9]||(l[9]=s=>V(u)?u.value=s:u=s),persistent:"",width:"700"},{activator:t(({props:s})=>[e(h,L({class:"text-primary mr-4",color:"lightprimary",variant:"flat",rounded:"sm"},s),{default:t(()=>[r(" 密码修改 📰 ")]),_:2},1040)]),default:t(()=>[e(P,null,{default:t(()=>[e(U,null,{default:t(()=>[Ae]),_:1}),e(M,null,{default:t(()=>[e(A,null,{default:t(()=>[e(ie,null,{default:t(()=>[e(oe,{cols:"12"},{default:t(()=>[e(T,{label:"原密码*",type:"password",modelValue:i(m),"onUpdate:modelValue":l[6]||(l[6]=s=>V(m)?m.value=s:m=s),required:"",variant:"outlined"},null,8,["modelValue"]),e(T,{label:"新密码*",type:"password",modelValue:i(c),"onUpdate:modelValue":l[7]||(l[7]=s=>V(c)?c.value=s:c=s),required:"",variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),Ee,Re,o("small",null,g(i(y)),1)]),_:1}),e(F,null,{default:t(()=>[e(B),e(h,{color:"blue-darken-1",variant:"text",onClick:l[8]||(l[8]=s=>V(u)?u.value=!1:u=!1)},{default:t(()=>[r(" 关闭 ")]),_:1}),e(h,{color:"blue-darken-1",variant:"text",onClick:J},{default:t(()=>[r(" 提交 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(h,{class:"text-primary mr-4",onClick:l[10]||(l[10]=s=>G("https://github.com/Soulter/AstrBot")),color:"lightprimary",variant:"flat",rounded:"sm"},{default:t(()=>[r(" GitHub Star! 🌟 ")]),_:1})]),_:1}))}}),De={style:{height:"100%"}},Me=E({__name:"FullLayout",setup(a){const d=R();return(u,f)=>(p(),v(ce,null,{default:t(()=>[e(me,{theme:"PurpleTheme",class:ue([i(d).fontTheme,i(d).mini_sidebar?"mini-sidebar":"",i(d).inputBg?"inputWithbg":""])},{default:t(()=>[e(Ne),e(we),e(de,null,{default:t(()=>[e(A,{fluid:"",class:"page-wrapper",style:{height:"calc(100% - 8px)"}},{default:t(()=>[o("div",De,[e(i(fe))])]),_:1})]),_:1})]),_:1},8,["class"])]),_:1}))}});export{Me as default};