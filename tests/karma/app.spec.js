'use strict';
var backupGetCible = null;

describe('class InfoApp', () => {
  beforeAll(() => {
    backupGetCible = InfoApp.getCible;
  });

  beforeEach(() => {
    // Mock de la cible
    var eltCible = document.createElement('test');
    InfoApp.getCible = () => {
      return eltCible;
    };
  });

  afterAll(() => {
    InfoApp.getCible = backupGetCible
  });

  it('met la valeur du location.href dans l\'élement cible', () => {
    var elt = InfoApp.getCible();
    var app = new InfoApp();

    app.afficherLocation();

    expect(elt.innerHTML).toEqual(location.href);
  });
});