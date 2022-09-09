// ==UserScript==
// @name         代码随想录
// @namespace    https://userscripts.vanishing.dev/programmercarl-leetcode
// @version      1.0
// @description  代码随想录移除关注墙；始终启用黑暗模式
// @author       Vanishine
// @match        https://programmercarl.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=programmercarl.com
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  document.documentElement.dataset.theme = 'dark';
  $('style')
    .html(`html { color-scheme: dark; } #app { color-scheme: auto; }`)
    .appendTo(document.body);

  Object.defineProperty(window, 'BTWPlugin', {
    value: class {
      init() {}
    },
    writable: false,
  });
})();
