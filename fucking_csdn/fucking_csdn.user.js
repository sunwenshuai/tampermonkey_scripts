// ==UserScript==
// @name   fucking csdn
// @name:en-US   fucking csdn
// @name:zh-CN   gtmd fucking csdn
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description:zh-CN	从bing搜索引擎过滤csdn的搜索页面 /filter csdn from bing search results
// @author       timesbaptism
// @match        http*://*.bing.com/*
// @grant        none
// @license	 GPL-2.0-only
// @description:en-US	filter csdn from bing search results
// ==/UserScript==

function fuckingCsdn() {
    let searchItems = document.querySelectorAll(".b_algo");
    searchItems.forEach(function (item) {
	let attr = item.querySelector(".b_attribution");
        if(attr==null){
            return;
        }
        let bingAttr = attr.innerHTML;
        if (bingAttr.toLowerCase().indexOf("csdn") >= 0) {
            item.style.display = "none";
        }
    });
}

document.onreadystatechange = () => (document.readyState === 'complete') && fuckingCsdn()
