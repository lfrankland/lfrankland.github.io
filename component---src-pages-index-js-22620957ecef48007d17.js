(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),l=i(a("VbXa")),o=i(a("8OQS")),s=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=f(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,w=y&&window.IntersectionObserver,x=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function _(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),x.set(e,t)),function(){a.unobserve(e),x.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+d+l+o+a+i+t+n+r+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(R,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return i.length>1?d.default.createElement("picture",null,r(i),o):o})),R=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,p=e.draggable,f=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":f,sizes:a,srcSet:i,src:r},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:p,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&w&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,p=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,x=e.itemProp,E=e.loading,_=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:k?1:0,transition:N?"opacity "+y+"ms":"none"},o),O="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},j=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&T,o,p),V={title:t,alt:this.state.isVisible?"":a,style:j,className:f,itemProp:x};if(g){var P=g,W=m(g);return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),O&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&T)}),W.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:V,imageVariants:P,generateSources:I}),W.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:V,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(P),d.default.createElement(R,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E,draggable:_})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:E},W,{imageVariants:P}))}}))}if(h){var H=h,q=m(h),M=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},O&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:O,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},N&&T)}),q.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:V,imageVariants:H,generateSources:I}),q.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:V,imageVariants:H,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(H),d.default.createElement(R,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E,draggable:_})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:E},q,{imageVariants:H}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});N.propTypes={resolutions:z,sizes:O,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=N;t.default=T},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return W}));var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),l=a("9eSz"),o=a.n(l),s=a("Bl7J"),d=a("vOnD"),c=d.b.div.withConfig({displayName:"container__Wrapper",componentId:"sc-1xtilmy-0"})(["margin:auto;max-width:var(--max-width);"]);function u(e){var t=e.children;return r.a.createElement(c,null,t)}var p=a("vrFN"),f=d.b.div.withConfig({displayName:"splash__SplashWrapper",componentId:"sc-1qdwh2w-0"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;padding:32px 64px;text-align:center;text-shadow:0 0 16px rgba(0,0,0,0.2);@media (min-width:640px){align-items:flex-start;justify-content:flex-end;padding:64px;}"]),m=d.b.h1.withConfig({displayName:"splash__Title",componentId:"sc-1qdwh2w-1"})(["font-size:2rem;line-height:1;margin-bottom:16px;text-decoration:none;@media (min-width:640px){font-size:4rem;text-align:left;}"]),g=d.b.h2.withConfig({displayName:"splash__SubTitle",componentId:"sc-1qdwh2w-2"})(["font-size:1.2rem;line-height:1.4;margin-bottom:16px;@media (min-width:640px){font-size:1.4rem;line-height:1.2;text-align:left;}"]),h=d.b.p.withConfig({displayName:"splash__Description",componentId:"sc-1qdwh2w-3"})(["line-height:1.6;@media (min-width:640px){text-align:left;}"]),b=function(){return r.a.createElement(f,null,r.a.createElement(u,null,r.a.createElement(m,null,"Hey, I'm Louis…"),r.a.createElement(g,null,"…a User Experience Designer and Frontend Developer based in Leeds"),r.a.createElement(h,null,"I currently work in the product design team at Virtual College. My role is to collaborate with other designers, developers and stakeholders to conceptualise, prototype and develop user interfaces for the companies websites and applications with a strong emphasis on user experience.")))},y=d.b.div.withConfig({displayName:"skills__Wrapper",componentId:"f5u42s-0"})(["padding:32px 64px;"]),w=d.b.h2.withConfig({displayName:"skills__Title",componentId:"f5u42s-1"})(["color:var(--color-light);margin-bottom:24px;text-align:center;"]),x=d.b.ul.withConfig({displayName:"skills__List",componentId:"f5u42s-2"})(["display:grid;grid-template-columns:1fr;grid-gap:24px;margin:0;padding:0;width:100%;grid-gap:32px;@media (min-width:768px){grid-template-columns:1fr 1fr;grid-gap:32px;}"]),v=d.b.li.withConfig({displayName:"skills__Skill",componentId:"f5u42s-3"})(["background-color:var(--color-light);border-radius:2px;box-shadow:0 3px 3px rgba(0,0,0,0.2);color:var(--color-dark);margin-left:0;min-width:0;padding:32px;list-style:none;"]),E=function(){return r.a.createElement(y,null,r.a.createElement(u,null,r.a.createElement(w,null,"Skills"),r.a.createElement(x,null,r.a.createElement(v,null,r.a.createElement("h3",null,"Front-end development"),r.a.createElement("p",null,"Over ten years experience in front-end web development. Keeping up-to-date with the latest technologies, such as CSS Grid to create working, accessible and maintainable front-end code.")),r.a.createElement(v,null,r.a.createElement("h3",null,"Collaborative design"),r.a.createElement("p",null,"Working with others, be that other designers, developers, stakeholders - or most importantly - end users, I get results which were never thought possible.")),r.a.createElement(v,null,r.a.createElement("h3",null,"Ideation"),r.a.createElement("p",null,"A good idea is the first step in any new project. I have years of experience of rapid ideation to nurture ideas into delivered products and services.")),r.a.createElement(v,null,r.a.createElement("h3",null,"Prototyping"),r.a.createElement("p",null,"Depending on the stage of development and your audience, lo-fi sketches on whiteboards to high quality part-functional prototypes I have produced have saved time and money in product development.")),r.a.createElement(v,null,r.a.createElement("h3",null,"User research"),r.a.createElement("p",null,"Using techniques such as surveys, usability testing and customer interviews to understand those who use the product as best as possible, to make the products as best as possible for them")),r.a.createElement(v,null,r.a.createElement("h3",null,"Usability testing"),r.a.createElement("p",null,"Carrying out usability testing and working with others to devise and test scenarios to gain real insights into how people interact with a service or application."," ")))))},S=d.b.div.withConfig({displayName:"tools__ToolsWrapper",componentId:"sc-1t36alc-0"})(["padding:32px 64px;"]),I=d.b.h2.withConfig({displayName:"tools__Title",componentId:"sc-1t36alc-1"})(["color:var(--color-light);margin-bottom:24px;text-align:center;"]),_=d.b.ul.withConfig({displayName:"tools__ToolList",componentId:"sc-1t36alc-2"})(["display:flex;flex-wrap:wrap;list-style:none;justify-content:center;padding:0;margin:auto;max-width:var(--max-width);"]),k=d.b.li.withConfig({displayName:"tools__Tool",componentId:"sc-1t36alc-3"})(["align-items:center;background-color:var(--color-light);border-radius:50%;display:flex;height:96px;justify-content:center;margin:8px 24px;padding:16px;width:96px;img{max-width:100%;}"]),C=function(){return r.a.createElement(S,null,r.a.createElement(I,null,"Tools & Technologies"),r.a.createElement(_,null,r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/html5.svg",alt:"HTML5"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/css3.svg",alt:"CSS3"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/sass.svg",alt:"Sass"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/gatsby.svg",alt:"GatsbyJS"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/react.svg",alt:"React"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/axure.svg",alt:"Axure RP"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/illustrator.svg",alt:"Illustrator"})),r.a.createElement(k,null,r.a.createElement("img",{src:"/logos/photoshop.svg",alt:"Photoshop"}))))},L=d.b.div.withConfig({displayName:"pages__ProjectsWrapper",componentId:"sc-177d31y-0"})(["padding:32px 64px;"]),R=d.b.h2.withConfig({displayName:"pages__Title",componentId:"sc-177d31y-1"})(["margin-bottom:24px;text-align:center;"]),N=d.b.div.withConfig({displayName:"pages__ProjectList",componentId:"sc-177d31y-2"})(["display:flex;flex-wrap:wrap;justify-content:center;width:100%;"]),z=Object(d.b)(n.Link).withConfig({displayName:"pages__Project",componentId:"sc-177d31y-3"})(["backface-visibility:hidden;background-color:var(--color-light);box-shadow:0 3px 3px rgba(0,0,0,0.2);color:var(--color-dark);margin-bottom:32px;text-align:center;text-decoration:none;transition:ease 200ms;transform:translateZ(0);width:100%;-webkit-font-smoothing:subpixel-antialiased;&:hover{box-shadow:0 3px 5px rgba(0,0,0,0.4);transform:scale3d(1.007,1.007,1.007);}@media (min-width:800px){display:flex;}}"]),O=Object(d.b)(o.a).withConfig({displayName:"pages__ProjectImage",componentId:"sc-177d31y-4"})(["@media (min-width:800px){width:50%;}"]),T=d.b.div.withConfig({displayName:"pages__ProjectDetails",componentId:"sc-177d31y-5"})(["display:flex;flex-direction:column;padding:24px;text-align:left;@media (min-width:800px){padding:16px;width:50%;}"]),j=d.b.div.withConfig({displayName:"pages__TagList",componentId:"sc-177d31y-6"})(["display:inline-flex;flex-wrap:wrap;margin:-4px -4px 16px -4px;max-width:100%;"]),V=d.b.div.withConfig({displayName:"pages__Tag",componentId:"sc-177d31y-7"})(["background:var(--color-grey);border-radius:2px;color:var(--color-dark);font-size:0.9rem;font-weight:600;margin:4px;padding:2px 6px;mix-blend-mode:darken;"]),P=d.b.div.withConfig({displayName:"pages__Button",componentId:"sc-177d31y-8"})(["background:var(--color-dark);border-radius:4px;color:var(--color-light);flex:none;margin-top:auto;padding:8px 16px;width:140px;"]),W=(t.default=function(e){var t=e.data,a=e.location,i=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges;return r.a.createElement(s.a,{location:a,title:i},r.a.createElement(p.a,{title:"Portfolio"}),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(C,null),r.a.createElement(L,{id:"projects"},r.a.createElement(R,null,"Projects"),r.a.createElement(u,null,r.a.createElement(N,null,n.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,i=t.frontmatter.description,n=t.frontmatter.tags;return r.a.createElement(z,{key:t.fields.slug,to:t.fields.slug},r.a.createElement(O,{fluid:t.frontmatter.thumbnail.childImageSharp.fluid}),r.a.createElement(T,null,r.a.createElement("h3",null,a),r.a.createElement("p",null,i),r.a.createElement(j,null,n.map((function(e){return r.a.createElement(V,{key:e},e)}))),r.a.createElement(P,null,"Read more…")))}))))))},"284041117")}}]);
//# sourceMappingURL=component---src-pages-index-js-22620957ecef48007d17.js.map