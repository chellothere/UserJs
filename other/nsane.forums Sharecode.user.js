/* eslint-env browser */
// ==UserScript==
// @name        nsane.forums Sharecode
// @description nsane.forums Sharecode
// @include     https://www.nsaneforums.com/topic/*
// @version     1.0.48
// @modified    2020-2-7 11:10:50
// @author      dodying
// @namespace   https://github.com/dodying/UserJs
// @supportURL  https://github.com/dodying/UserJs/issues
// @icon        https://cdn.jsdelivr.net/gh/dodying/UserJs@master/Logo.png
// @run-at      document-end
// @grant       none
// @noframes
// require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js
// ==/UserScript==
/* eslint-disable no-debugger  */
(function () {
  [...document.querySelectorAll('[data-role="commentContent"]')].forEach((i) => {
    [...i.querySelectorAll('div,p')].forEach((j) => {
      const text = j.textContent.replace(/&#\d+;/g);
      const site = text.match(/Site:\s*(https?:.*?)(\n|Sharecode)/i);
      const sharecode = text.match(/Sharecode(\[\?\])*:\s*(.*?)(\n|$)/i);
      if (site && sharecode) {
        const link = `${site[1]}${sharecode[2]}`;
        console.log(link);
        j.innerHTML = `${j.innerHTML}<br><a target="_blank" href="${link}">${link}</a>`;
      }
    });
  });
}());
