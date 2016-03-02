'use strict';

var DateUtils = require('./DateUtils');

class Personne {
  constructor(dateDeNaissance) {
    this.dateDeNaissance = dateDeNaissance;
  }
  
  estMajeur() {
    var maxDate = DateUtils.getDateDuJour();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    return this.dateDeNaissance < maxDate;
  }
}

module.exports = Personne;