var assert = require('assert');
var DateUtils = require('./DateUtils');
var Personne = require('./Personne');

var backupGetDateDuJour = null;

describe('classe Personne', () => {
  before(() => {
    backupGetDateDuJour = DateUtils.getDateDuJour;
    // Mock de la date du jour
    DateUtils.getDateDuJour = () => {
      return new Date('2000-01-01');
    };
  });

  after(() => {
    // Restore la fonction initiale
    DateUtils.getDateDuJour = backupGetDateDuJour;
  });

  it('est majeur si 18 ans révolus', () => {
    // arrange
    var personne = new Personne(new Date('1981-12-31'));
    // act
    var estMajeur = personne.estMajeur();
    // assert
    assert(estMajeur, '1981-12-31 est majeur');

    personne.dateDeNaissance = new Date('1982-01-01');
    estMajeur = personne.estMajeur();
    assert(!estMajeur, '1982-01-01 n\'est pas majeur');
  });
});