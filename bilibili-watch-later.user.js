// ==UserScript==
// @name         哔哩哔哩稍后再看
// @namespace    https://userscript.vanishing.dev/bilibili-watch-later
// @version      0.1
// @description  为哔哩哔哩移除蹩脚的稍后再看播放器，直接打开新标签页
// @author       Vanishine
// @match        https://www.bilibili.com/watchlater/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(async() => {
    'use strict'
    // https://www.bilibili.com/watchlater/#/list

    // TODO: Use some API like https://pptr.dev/api/puppeteer.page.waitforselector/
    await new Promise(resolve => setTimeout(resolve, 1_000))
    const links = document.querySelectorAll('.av-about>.t')
    links.forEach(a => {
        a.target = '_blank'
        a.setAttribute('rel', 'noopener noreferrer')
        a.href = a.href.replace('/medialist/play/watchlater', '/video')
    })
})()
