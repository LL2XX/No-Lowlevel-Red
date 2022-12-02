// ==UserScript==
// @name         不要低级红
// @namespace    https://github.com/XspiderX/
// @version      1.0
// @description  去除滤镜
// @author       G3ra1t
// @match        *
// @icon         https://www.gov.cn/govweb/xhtml/2016gov/images/public/logo.jpg
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle('*{filter:none !important}');
})();