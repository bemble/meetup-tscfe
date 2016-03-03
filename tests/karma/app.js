'use strict';

(function() {
  class InfoApp {
    afficherLocation() {
      InfoApp.getCible().innerHTML = location.href;
    }
  }
  InfoApp.getCible = () => {
    return document.querySelector('.afficher-location');
  };

  window.InfoApp = InfoApp;
})();