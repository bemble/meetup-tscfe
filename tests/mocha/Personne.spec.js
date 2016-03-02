var assert = require('assert');
var DateUtils = require('./DateUtils');
var Personne = require('./Personne');

describe('classe Personne', () => {
  var backupGetDateDuJour = DateUtils.getDateDuJour;
  before(() => {
    DateUtils.getDateDuJour = () => {
      return new Date('2000-01-01');
    };
  });

  after(() => {
    DateUtils.getDateDuJour = backupGetDateDuJour;
  });

  it('est majeur si 18 ans révolus', () => {
    var personne = new Personne(new Date('1981-12-31'));
    var estMajeur = personne.estMajeur();
    assert(estMajeur, '1981-12-31 est majeur');

    personne.dateDeNaissance = new Date('1982-01-01');
    estMajeur = personne.estMajeur();
    assert(!estMajeur, '1982-01-01 n\'est pas majeur');
  });
});