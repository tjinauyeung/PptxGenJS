(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),i=(a(0),a(107)),b={id:"api-images",title:"Images"},l={unversionedId:"api-images",id:"api-images",isDocsHomePage:!1,title:"Images",description:"Images of almost any type can be added to Slides.",source:"@site/docs/api-images.md",slug:"/api-images",permalink:"/PptxGenJS/docs/api-images",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1626922386,formattedLastUpdatedAt:"7/21/2021",sidebar:"docs",previous:{title:"Charts",permalink:"/PptxGenJS/docs/api-charts"},next:{title:"Media",permalink:"/PptxGenJS/docs/api-media"}},p=[{value:"Usage",id:"usage",children:[{value:"Usage Notes",id:"usage-notes",children:[]},{value:"Supported Formats and Notes",id:"supported-formats-and-notes",children:[]},{value:"Performance Considerations",id:"performance-considerations",children:[]}]},{value:"Base Properties",id:"base-properties",children:[{value:"Position/Size Props (PositionProps)",id:"positionsize-props-positionprops",children:[]},{value:"Data/Path Props (DataOrPathProps)",id:"datapath-props-dataorpathprops",children:[]},{value:"Image Props (ImageProps)",id:"image-props-imageprops",children:[]}]},{value:"Sizing Properties",id:"sizing-properties",children:[{value:"Sizing Types",id:"sizing-types",children:[]},{value:"Sizing Notes",id:"sizing-notes",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Image Types",id:"image-types",children:[]},{value:"From URL",id:"from-url",children:[]},{value:"Sizing Options",id:"sizing-options",children:[]}]},{value:"Samples",id:"samples",children:[]}],d={toc:p};function c(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Images of almost any type can be added to Slides."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'// Image from remote URL\nslide.addImage({ path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg" });\n\n// Image by local URL\nslide.addImage({ path: "images/chart_world_peace_near.png" });\n\n// Image by data (pre-encoded base64)\nslide.addImage({ data: "image/png;base64,iVtDafDrBF[...]=" });\n')),Object(i.b)("h3",{id:"usage-notes"},"Usage Notes"),Object(i.b)("p",null,"Either provide a URL location or base64 data to create an image."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," - URL: relative or full"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data")," - base64: string representing an encoded image")),Object(i.b)("h3",{id:"supported-formats-and-notes"},"Supported Formats and Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Standard image types: png, jpg, gif, et al."),Object(i.b)("li",{parentName:"ul"},"Animated gifs: only shown animated on Microsoft 365/Office365 and the newest desktop versions, older versions will animate them in presentation mode only"),Object(i.b)("li",{parentName:"ul"},"SVG images: supported in the newest version of desktop PowerPoint or Microsoft 365/Office365")),Object(i.b)("h3",{id:"performance-considerations"},"Performance Considerations"),Object(i.b)("p",null,"It takes CPU time to read and encode images! The more images you include and the larger they are, the more time will be consumed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The time needed to read/encode images can be completely eliminated by pre-encoding any images"),Object(i.b)("li",{parentName:"ul"},"Pre-encode images into a base64 strings and use the ",Object(i.b)("inlineCode",{parentName:"li"},"data")," option value instead"),Object(i.b)("li",{parentName:"ul"},"This will both reduce dependencies (who needs another image asset to keep track of?) and provide a performance\nboost (no time will need to be consumed reading and encoding the image)")),Object(i.b)("h2",{id:"base-properties"},"Base Properties"),Object(i.b)("h3",{id:"positionsize-props-positionprops"},"Position/Size Props (",Object(i.b)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#position-props"},"PositionProps"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Option"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"x")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"1.0")),Object(i.b)("td",{parentName:"tr",align:"left"},"hor location (inches)"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"x")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"hor location (percent)"),Object(i.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(i.b)("inlineCode",{parentName:"td"},"{x:'50%'}")," middle of the Slide)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"y")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"1.0")),Object(i.b)("td",{parentName:"tr",align:"left"},"ver location (inches)"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"y")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"ver location (percent)"),Object(i.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(i.b)("inlineCode",{parentName:"td"},"{y:'50%'}")," middle of the Slide)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"w")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"1.0")),Object(i.b)("td",{parentName:"tr",align:"left"},"width (inches)"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"w")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"width (percent)"),Object(i.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(i.b)("inlineCode",{parentName:"td"},"{w:'50%'}")," 50% the Slide width)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"h")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"1.0")),Object(i.b)("td",{parentName:"tr",align:"left"},"height (inches)"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"h")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"height (percent)"),Object(i.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(i.b)("inlineCode",{parentName:"td"},"{h:'50%'}")," 50% the Slide height)")))),Object(i.b)("h3",{id:"datapath-props-dataorpathprops"},"Data/Path Props (",Object(i.b)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#datapath-props-dataorpathprops"},"DataOrPathProps"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Option"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"data")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"image data (base64)"),Object(i.b)("td",{parentName:"tr",align:"left"},"base64-encoded image string. (either ",Object(i.b)("inlineCode",{parentName:"td"},"data")," or ",Object(i.b)("inlineCode",{parentName:"td"},"path")," is required)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"path")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"image path"),Object(i.b)("td",{parentName:"tr",align:"left"},'Same as used in an (img src="") tag. (either ',Object(i.b)("inlineCode",{parentName:"td"},"data")," or ",Object(i.b)("inlineCode",{parentName:"td"},"path")," is required)")))),Object(i.b)("h3",{id:"image-props-imageprops"},"Image Props (",Object(i.b)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#image-props-imageprops"},"ImageProps"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Option"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"altText")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"alt text value"),Object(i.b)("td",{parentName:"tr",align:"left"},"description of what image shows")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"flipH")),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:"left"},"Flip horizontally?"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"flipV")),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:"left"},"Flip vertical?"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"hyperlink")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/PptxGenJS/docs/types#hyperlink-props-hyperlinkprops"},"HyperlinkProps")),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"add hyperlink"),Object(i.b)("td",{parentName:"tr",align:"left"},"object with ",Object(i.b)("inlineCode",{parentName:"td"},"url")," or ",Object(i.b)("inlineCode",{parentName:"td"},"slide"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"placeholder")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"image placeholder"),Object(i.b)("td",{parentName:"tr",align:"left"},"Placeholder location: ",Object(i.b)("inlineCode",{parentName:"td"},"title"),", ",Object(i.b)("inlineCode",{parentName:"td"},"body"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"rotate")),Object(i.b)("td",{parentName:"tr",align:"left"},"integer"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",{parentName:"tr",align:"left"},"rotation (degrees)"),Object(i.b)("td",{parentName:"tr",align:"left"},"Rotation degress: ",Object(i.b)("inlineCode",{parentName:"td"},"0"),"-",Object(i.b)("inlineCode",{parentName:"td"},"359"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"rounding")),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:"left"},"image rounding"),Object(i.b)("td",{parentName:"tr",align:"left"},"Shapes an image into a circle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"sizing")),Object(i.b)("td",{parentName:"tr",align:"left"},"object"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"transforms image"),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"#sizing-properties"},"Image Sizing"))))),Object(i.b)("h2",{id:"sizing-properties"},"Sizing Properties"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"sizing")," option provides cropping and scaling an image to a specified area. The property expects an object with the following structure:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Unit"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"type")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"sizing algorithm"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"'crop'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'contain'")," or ",Object(i.b)("inlineCode",{parentName:"td"},"'cover'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"w")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},"inches"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"w")," of the image"),Object(i.b)("td",{parentName:"tr",align:"left"},"area width"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"h")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},"inches"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"h")," of the image"),Object(i.b)("td",{parentName:"tr",align:"left"},"area height"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"x")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},"inches"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",{parentName:"tr",align:"left"},"area horizontal position related to the image"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n (effective for ",Object(i.b)("inlineCode",{parentName:"td"},"crop")," only)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"y")),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},"inches"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",{parentName:"tr",align:"left"},"area vertical position related to the image"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n (effective for ",Object(i.b)("inlineCode",{parentName:"td"},"crop")," only)")))),Object(i.b)("h3",{id:"sizing-types"},"Sizing Types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contain")," works as CSS property ",Object(i.b)("inlineCode",{parentName:"li"},"background-size")," \u2014 shrinks the image (ratio preserved) to the area given by ",Object(i.b)("inlineCode",{parentName:"li"},"w")," and ",Object(i.b)("inlineCode",{parentName:"li"},"h")," so that the image is completely visible. If the area's ratio differs from the image ratio, an empty space will surround the image."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cover")," works as CSS property ",Object(i.b)("inlineCode",{parentName:"li"},"background-size")," \u2014 shrinks the image (ratio preserved) to the area given by ",Object(i.b)("inlineCode",{parentName:"li"},"w")," and ",Object(i.b)("inlineCode",{parentName:"li"},"h")," so that the area is completely filled. If the area's ratio differs from the image ratio, the image is centered to the area and cropped."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"crop")," cuts off a part specified by image-related coordinates ",Object(i.b)("inlineCode",{parentName:"li"},"x"),", ",Object(i.b)("inlineCode",{parentName:"li"},"y")," and size ",Object(i.b)("inlineCode",{parentName:"li"},"w"),", ",Object(i.b)("inlineCode",{parentName:"li"},"h"),".")),Object(i.b)("h3",{id:"sizing-notes"},"Sizing Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you specify an area size larger than the image for the ",Object(i.b)("inlineCode",{parentName:"li"},"contain")," and ",Object(i.b)("inlineCode",{parentName:"li"},"cover")," type, then the image will be stretched, not shrunken."),Object(i.b)("li",{parentName:"ul"},"In case of the ",Object(i.b)("inlineCode",{parentName:"li"},"crop")," option, if the specified area reaches out of the image, then the covered empty space will be a part of the image."),Object(i.b)("li",{parentName:"ul"},"When the ",Object(i.b)("inlineCode",{parentName:"li"},"sizing")," property is used, its ",Object(i.b)("inlineCode",{parentName:"li"},"w")," and ",Object(i.b)("inlineCode",{parentName:"li"},"h")," values represent the effective image size. For example, in the following snippet, width and height of the image will both equal to 2 inches and its top-left corner will be located at ","[1 inch, 1 inch]",":")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"image-types"},"Image Types"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image Types",src:a(221).default})),Object(i.b)("h3",{id:"from-url"},"From URL"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image Sizing Examples",src:a(222).default})),Object(i.b)("h3",{id:"sizing-options"},"Sizing Options"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image Sizing Examples",src:a(223).default})),Object(i.b)("h2",{id:"samples"},"Samples"),Object(i.b)("p",null,"Sample code: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/demos/modules/demo_image.mjs"},"demos/modules/demo_image.mjs")))}c.isMDXComponent=!0},107:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),o=c(a),s=n,O=o["".concat(b,".").concat(s)]||o[s]||m[s]||i;return a?r.a.createElement(O,l(l({ref:t},d),{},{components:a})):r.a.createElement(O,l({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var d=2;d<i;d++)b[d]=a[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},221:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-image-types-4cc5ee307e9f5abad3901d9cdac572b7.gif"},222:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-image-paths-e30e98a0ed944724155a2b36dccefd9b.png"},223:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-image-sizing-61fc95b1ccc58b0cc2d34f4676bf3a2b.png"}}]);