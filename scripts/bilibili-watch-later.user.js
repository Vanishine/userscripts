// ==UserScript==
// @name         哔哩哔哩稍后再看
// @namespace    https://userscripts.vanishing.dev/bilibili-watch-later
// @version      1.0
// @description  为哔哩哔哩移除蹩脚的稍后再看播放器，直接打开新标签页
// @author       Vanishine
// @match        https://www.bilibili.com/watchlater/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(async () => {
  'use strict';

  const [onDataLoad, dataLoaded] = useResolver();
  const $loading = document.querySelector(`.load-state`);
  new MutationObserver((mutations, observer) => {
    for (const { removedNodes } of mutations) {
      const resolved = [...removedNodes].includes($loading);
      if (!resolved) continue;
      onDataLoad();
      observer.disconnect();
      break;
    }
  }).observe($loading.parentNode, { childList: true });
  await dataLoaded;

  const links = document.querySelectorAll(`.av-about>.t`);
  links.forEach(a => {
    a.target = '_blank';
    a.setAttribute('rel', 'noopener noreferrer');
    a.href = a.href.replace(`/medialist/play/watchlater`, `/video`);
  });

  function useResolver() {
    let resolveFn;
    const promise = new Promise(resolve => (resolveFn = resolve));
    return [resolveFn, promise];
  }
})();
