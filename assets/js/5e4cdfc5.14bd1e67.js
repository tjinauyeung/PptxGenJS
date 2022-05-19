"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[9846],{4035:function(e,t,n){n.r(t);var o=n(7294),r=n(6698),l=n(5350),a=n(9943);t.default=function(){var e=function(){var e=(0,l.Z)(),t=e.isDarkTheme;e.setLightTheme,e.setDarkTheme;return o.createElement("section",{className:"mb-5 p-4 "+(t?"bg-black":"bg-white")},o.createElement("h4",null,"Table to Slides Feature"),o.createElement("p",null,"Create a presentation from an HTML table with a single line of code. Creates slides as needed (auto-paging)."),o.createElement("div",{className:"row align-items-center"},o.createElement("div",{className:"col-auto"},o.createElement("img",{className:"d-none d-md-none d-lg-block border border-light",alt:"input: html table",src:"/PptxGenJS/img/ex-html-to-powerpoint-1.png",height:"500"}),o.createElement("img",{className:"d-none d-md-block d-lg-none border border-light",alt:"input: html table",src:"/PptxGenJS/img/ex-html-to-powerpoint-1.png",height:"300"}),o.createElement("img",{className:"d-block d-md-none d-lg-none border border-light",alt:"input: html table",src:"/PptxGenJS/img/ex-html-to-powerpoint-1.png",height:"200"})),o.createElement("div",{className:"col-auto col-md text-center"},o.createElement("h1",{className:"mb-0"},"\u2192")),o.createElement("div",{className:"col-auto"},o.createElement("img",{className:"d-none d-md-none d-lg-block border border-light",alt:"output: powerpoint slides",src:"/PptxGenJS/img/ex-html-to-powerpoint-2.png",height:"500"}),o.createElement("img",{className:"d-none d-md-block d-lg-none border border-light",alt:"output: powerpoint slides",src:"/PptxGenJS/img/ex-html-to-powerpoint-2.png",height:"300"}),o.createElement("img",{className:"d-block d-md-none d-lg-none border border-light",alt:"output: powerpoint slides",src:"/PptxGenJS/img/ex-html-to-powerpoint-2.png",height:"200"}))))},t=function(){var e=(0,l.Z)(),t=e.isDarkTheme;e.setLightTheme,e.setDarkTheme;return o.createElement("section",{className:"mb-5 p-4 "+(t?"bg-black":"bg-white")},o.createElement("h4",null,"Demo Code"),o.createElement("p",null,"The ",o.createElement("code",null,"tableToSlides")," method clones the table including CSS style and creates slides as needed (auto-paging). These 3 lines of code were all it took to produce the slides shown above!"),o.createElement("p",null,"View the HTML-to-PowerPoint docs for a complete list of options like repeating header, start location on subsequnet slides, character and line weight, etc."),o.createElement(a.Z,{id:"494850b6775dd5c8ce314672a1846208"}),o.createElement("button",{type:"button","aria-label":"HTML to PowerPoint Documentation",className:"w-100 mt-4 btn btn-outline-primary",onClick:function(){return window.location.href="/PptxGenJS/docs/html-to-powerpoint"}},"HTML to PowerPoint Docs"))},n=function(){var e=(0,l.Z)(),t=e.isDarkTheme;e.setLightTheme,e.setDarkTheme;return o.createElement("section",{className:"mb-5 p-4 "+(t?"bg-black":"bg-white")},o.createElement("h4",null,"Live Demo"),o.createElement("p",null,"Try it for yourself! The demo below has an interactive table plus various options to test drive."),o.createElement("div",{className:"text-center"},o.createElement("img",{alt:"HTML Table",src:"/PptxGenJS/img/ex-html-to-powerpoint-3.png",height:"500",className:"border border-light"})),o.createElement("button",{type:"button","aria-label":"HTML to PowerPoint Demo",className:"w-100 mt-4 btn btn-outline-primary",onClick:function(){return window.location.href="/PptxGenJS/demo/index.html#html2pptx"}},"HTML to PowerPoint Demo"))};return o.createElement(r.Z,{title:"HTML-to-PowerPoint"},o.createElement("div",{className:"container my-4"},o.createElement("h1",{className:"mb-4"},"HTML to PowerPoint"),o.createElement(e,null),o.createElement(t,null),o.createElement(n,null)))}},9943:function(e,t,n){var o=n(7294);n(5697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var a=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,o=this.iframeNode,r=o.document;o.contentDocument?r=o.contentDocument:o.contentWindow&&(r=o.contentWindow.document);var l='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(l),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(o.PureComponent);t.Z=a}}]);