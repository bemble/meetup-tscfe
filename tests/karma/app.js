'use strict';

(function() {
  class InfoApp {
    afficherLocation() {
      InfoApp.getCible().innerHTML = location.href;
    }

    static getCible() {
      return document.querySelector('.afficher-location');
    }
  }

  window.InfoApp = InfoApp;
})();