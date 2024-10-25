// ==UserScript==
// @name         GMail Hacks
// @namespace    http://tampermonkey.net/
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/thinze/gmail_hacks/refs/heads/master/gmail_hacks.js
// @downloadURL  https://raw.githubusercontent.com/thinze/gmail_hacks/refs/heads/master/gmail_hacks.js
// @description  try to take over the world!
// @author       You
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  var css = [];

  // cfg CSS
  css.push('.G3.G2 > div > div { display: flex; flex-direction: column; } ');
  css.push('.G3.G2 > div > div .adn.ads { order: 2; } ');
  css.push('.G3.G2 > div > div .gA.gt { order: 1; } ');
  css.push('.nH > .bGI > .UI .vip { color: #005fff; } ');
  css.push('.nH > .bGI > .UI .important { color: #ff1d7b; } ');
  css.push('.nH > .bGI > .UI .servermonitor { background-color: #ff991d; } ');

  css = css.join('');

  /**
   * insert custom CSS
   *
   */
  function insertCss(css, css_id) {
    var style = document.createElement('STYLE');
    if (css_id) {
      style.id = css_id;
    }
    var node = document.createTextNode(css);
    style.appendChild(node);
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


  // ---  scripts  ---

  function markImportantSenders(elem) {
    var importants = [
      ['alexander kürsten', ' vip'],
      ['sylvia saffroy', ' important'],
      ['server monitor', ' servermonitor']
    ];
    importants.forEach(function(person) {
      if (elem.innerText.toLowerCase().indexOf(person[0]) > -1) {   // person found
        elem.className = elem.className.replace(person[1], '') + person[1];
      }
    });
  }

  function mailsListEnhancer(selector) {
    const mailsList = document.querySelector(selector);

    if (mailsList) {

      // Konfiguration für den MutationObserver (Welche Arten von Mutationen sollen beobachtet werden)
      const observerConfig = {
        // attributes: true, // Überwache Attributänderungen im Ziel-Element
        childList: true, // Überwache Änderungen in der Liste der Kinder des Ziel-Elements
        subtree: true, // Überwache Änderungen im gesamten Unterbaum des Ziel-Elements
        // characterData: true // Überwache Änderungen im Textinhalt des Ziel-Elements
      };

      // Callback-Funktion, die aufgerufen wird, wenn eine Mutation erkannt wird
      const mailsListMutationCallback = function (mutationsList, observer) {
        mutationsList.forEach(mutation => {
          // console.log('mutation detected:', mutation);
          var senders = document.querySelectorAll(selector + ' table tr td:nth-child(5)');
        if (senders.length) {
          senders.forEach(markImportantSenders);
        }
      });
      };

      // Erstellen eines MutationObservers mit der Callback-Funktion und der Konfiguration
      const mailsListObserver = new MutationObserver(mailsListMutationCallback);

      // Starte die Überwachung des Ziel-Elements mit der definierten Konfiguration
      mailsListObserver.observe(mailsList, observerConfig);

      // Um den Observer zu stoppen, verwende:
      // observer.disconnect();
    }

  }

  function waitFor_mailsList(selector) {
    const mailsList = document.querySelector(selector);

    if (mailsList) {
      // console.log('mailsList wurde gefunden.');
      mailsListEnhancer(selector);

    } else {
      setTimeout(function() { waitFor_mailsList(selector); } , 100);
      // console.log("wait for DOM element '" + selector + "' ...");
    }
  }


  updateCss(css, 'gmail-hacks');
  waitFor_mailsList(".AO div[id=':1']");

  console.log('GMail Hacks started ...');


})();
