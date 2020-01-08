// ==UserScript==
// @name         GMail Hacks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var css = [];

    // cfg CSS
    css.push('.G3.G2 > div > div { display: flex; flex-direction: column; } ');
    css.push('.G3.G2 > div > div .adn.ads { order: 2; } ');
    css.push('.G3.G2 > div > div .gA.gt { order: 1; } ');

    css = css.join('');

    // ---  helper functions  ---

    /**
     * insert custom CSS
     *
     */
    function insertCss(css, css_id) {
        var style = document.createElement('STYLE');
        if (css_id) {
            style.id = css_id;
        }
        style.innerHTML = css;
        document.querySelector('head').appendChild(style);
    }

    /**
     * replace old styles-element with new one
     *
     * @param css_id
     * @param css
     */
    function updateCss(css, css_id) {
        var styles = document.querySelector('#' + css_id);
        if (styles) {
            styles.parentNode.removeChild(styles);
        }
        insertCss(css, css_id);
    }

    /**
     * set multiple styles on an element
     *
     * @param elem      DOM node
     * @param styles    key-value array {width: 'auto', height: 'auto', ... }
     */
    function setStylesOnElement(elem, styles){
        Object.assign(elem.style, styles);
    }


    // ---  main  ---

    updateCss(css);


    console.log('GMail Hacks started ...');

})();