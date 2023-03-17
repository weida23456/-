// ==UserScript==
// @name     Hide Zhihu Video Content
// @match    https://www.zhihu.com/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle ( `
    .ZVideoItem {
        visibility: hidden !important;
    }
    DIV[itemtype="http://schema.org/SocialMediaPosting"]{
        color: #E1E1E1 !important;
    }
` );