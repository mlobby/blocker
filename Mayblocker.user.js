// ==UserScript==
// @name         Mayblocker
// @namespace    https://mlobby.github.io/
// @version      0.1
// @description  Blocks important sites so you don't have to work.
// @author       TalonFist
// @match        https://*.mayfieldschools.org*
// @match        https://*.schoology.org*
// @grant        none
// ==/UserScript==

window.location.href("chrome-extension://mlbgnlemejoeocmncpolejmdbimkoiol/block.html?cat=blacklist&url=" + window.location)
