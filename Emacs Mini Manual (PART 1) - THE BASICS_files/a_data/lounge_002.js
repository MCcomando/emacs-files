!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.24f72d376eb2ca218aef7ded079574a2.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.e0323601412ad443751b586a553b3945.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.85f5bbef17ae1502e3c8cf6c43ea50af.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.daedd146972fc7d8dffd9be34c404865.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.5c2c79222b3102b8568ff61fb846a843.js",a.body.appendChild(c)}();