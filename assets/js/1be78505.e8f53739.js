(self.webpackChunkanasoid=self.webpackChunkanasoid||[]).push([[514],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n=a(7294),i=a(3905),l=a(2263),o=a(6291),r=a(2611),s=a(2122),c=a(9756),u=a(6010),d=a(6700),m=a(944),b=a(1839),p=a(3783),f=a(7898),v=a(6742),h=a(3919),E=a(5537),C=function(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},_=a(4478),k=a(4973),g="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",y="menuLinkText_2aKo",A="menuWithAnnouncementBar_2WvA",M="collapseSidebarButton_1CGd",R="collapseSidebarButtonIcon_3E-R",x="sidebarMenuIcon_fgN0",T="sidebarMenuCloseIcon_1lpH",B="menuLinkExternal_1OhN";var L=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},w=(0,n.memo)((function(e){var t=e.items,a=(0,c.Z)(e,["items"]);return t.map((function(e,t){return n.createElement(P,(0,s.Z)({key:t,item:e},a))}))}));function P(e){switch(e.item.type){case"category":return n.createElement(H,e);case"link":default:return n.createElement(D,e)}}function H(e){var t,a,i,l=e.item,o=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,c.Z)(e,["item","onItemClick","collapsible","activePath"]),b=l.items,p=l.label,f=L(l,d),v=(a=f,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),h=(0,n.useState)((function(){return!!r&&(!f&&l.collapsed)})),E=h[0],C=h[1],_=(0,n.useRef)(null),k=(0,n.useState)(void 0),g=k[0],Z=k[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=_.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){f&&!v&&E&&C(!1)}),[f,v,E]);var I=(0,n.useCallback)((function(e){e.preventDefault(),g||N(),setTimeout((function(){return C((function(e){return!e}))}),100)}),[g]);return 0===b.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&f},t[y]=!r,t)),onClick:r?I:void 0,href:r?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:_,style:{height:g},onTransitionEnd:function(){E||N(!1)}},n.createElement(w,{items:b,tabIndex:E?"-1":"0",onItemClick:o,collapsible:r,activePath:d})))}function D(e){var t,a=e.item,i=e.onItemClick,l=e.activePath,o=(e.collapsible,(0,c.Z)(e,["item","onItemClick","activePath","collapsible"])),r=a.href,d=a.label,m=L(a,l);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(v.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[B]=!(0,h.Z)(r),t)),to:r},(0,h.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},o),d))}function O(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",M),onClick:t},n.createElement(C,{className:R}))}function W(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(x,T)},"\xd7"):n.createElement(_.Z,{className:x,height:24,width:24}))}var K=function(e){var t,a,i=e.path,l=e.sidebar,o=e.sidebarCollapsible,r=void 0===o||o,s=e.onCollapse,c=e.isHidden,v=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,f.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),h=(0,d.LU)(),C=h.navbar.hideOnScroll,_=h.hideableSidebar,k=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,n.useEffect)((function(){i===p.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),M=y.showResponsiveSidebar,R=y.closeResponsiveSidebar,x=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(g,(t={},t[Z]=C,t[N]=c,t))},C&&n.createElement(E.Z,{tabIndex:-1,className:I}),n.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(a={"menu--show":M},a[A]=!k&&v,a))},n.createElement(W,{responsiveSidebarOpened:M,onClick:x}),n.createElement("ul",{className:"menu__list"},n.createElement(w,{items:l,onItemClick:R,collapsible:r,activePath:i}))),_&&n.createElement(O,{onClick:s}))},z=a(3541),F=a(4608),J=a(5977),Y="docPage_31aa",G="docMainContainer_3ufF",Q="docMainContainerEnhanced_3NYZ",U="docSidebarContainer_3Kbt",X="docSidebarContainerHidden_3pA8",j="collapsedDocSidebar_2JMH",q="expandSidebarButtonIcon_1naQ",V="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,a,o,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,l.default)(),v=f.siteConfig,h=f.isClient,E=b.pluginId,_=b.permalinkToSidebar,g=b.docsSidebars,Z=b.version,N=_[m.path],I=g[N],S=(0,n.useState)(!1),y=S[0],A=S[1],M=(0,n.useState)(!1),R=M[0],x=M[1],T=(0,n.useCallback)((function(){R&&x(!1),A(!y)}),[R]);return n.createElement(r.Z,{key:h,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},n.createElement("div",{className:Y},I&&n.createElement("div",{className:(0,u.Z)(U,(t={},t[X]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(U)&&y&&x(!0)},role:"complementary"},n.createElement(K,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(a=null==(o=v.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:T,isHidden:R}),R&&n.createElement("div",{className:j,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},n.createElement(C,{className:q}))),n.createElement("main",{className:(0,u.Z)(G,(s={},s[Q]=y||!I,s))},n.createElement("div",{className:(0,u.Z)("container padding-vert--lg",$,(c={},c[V]=y,c))},n.createElement(i.Zo,{components:z.Z},p)))))}var te=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return l?n.createElement(ee,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t)):n.createElement(F.default,e)}}}]);