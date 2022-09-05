// ==UserScript==
// @name         CSDN 免登录
// @namespace    https://userscripts.vanishing.dev/csdn-saver
// @version      1.0
// @description  免登录查看 CSDN 博客完整内容
// @author       Vanishing
// @match        https://blog.csdn.net/*/article/details/*
// @match        https://*.blog.csdn.net/article/details/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

/* global $ */

(() => {
  'use strict';

  const cssRules = [];

  // 直接看全文
  $(`.hide-article-pos`).remove();
  $(`#article_content`).css({ height: 'auto' });

  // 界面缩放不弹出提示
  cssRules.push(`.leftPop { display: none }`);

  // 代码可复制
  cssRules.push(`#content_views pre,
                 #content_views pre code { user-select: text !important }`);
  cssRules.push(`.hljs-button.signin { display: none !important }`);

  $(`<style>`).html(cssRules.join('')).appendTo(document.body);
})();
