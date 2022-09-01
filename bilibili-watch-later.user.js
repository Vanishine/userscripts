// ==UserScript==
// @name         哔哩哔哩稍后再看
// @namespace    https://userscript.vanishing.dev/bilibili-watch-later
// @version      0.2
// @description  为哔哩哔哩移除蹩脚的稍后再看播放器，直接打开新标签页
// @author       Vanishine
// @match        https://www.bilibili.com/watchlater/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(async () => {
  'use strict';
  // https://www.bilibili.com/watchlater/#/list

  let resolve;
  const untilDataLoaded = new Promise(r => (resolve = r));
  const $loading = document.querySelector('.load-state');
  new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
      const resolved = [...mutation.removedNodes].includes($loading);
      if (resolved) {
        resolve();
        observer.disconnect();
        break;
      }
    }
  }).observe($loading.parentNode, { childList: true });
  await untilDataLoaded;

  const links = document.querySelectorAll(`.av-about>.t`);
  links.forEach(a => {
    a.target = '_blank';
    a.setAttribute('rel', 'noopener noreferrer');
    a.href = a.href.replace('/medialist/play/watchlater', '/video');
  });
})();
