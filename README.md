# meetup-tscfe

Playground pour la présentation "Tester son code front-end".

Les quelques slides sont disponible sur [Google Drive](https://docs.google.com/presentation/d/15uIt5m3wXPBRzrP8pMalq_wVUlpd94wbpu0BIAC7oco/edit?usp=sharing).

## La playground

Dans le dossier de la playground, `npm install` et les environnements sont prêt à l'emploi.

Pour exécuter toute la batterie de tests, exécutez `npm test`, ou :

- `npm run mocha`
- `npm run karma`
- `npm run protractor`
- `npm run quixote`

## Liens utiles

- [mocha](https://mochajs.org/)
- [karma](http://karma-runner.github.io/0.13/index.html)
- [jasmine](http://jasmine.github.io/)
- [protractor](https://angular.github.io/protractor/#/)
- [quixote](https://github.com/jamesshore/quixote)

## Notes

En temps normal, on exécuterait les tests comme ceci :

- installer `mocha` en global (`npm install -g mocha`) et lancer `mocha tests/mocha/**/*.spec.js`
- installer `karma-cli` en global et lancer `karma start tests/karma.conf.js`
- installer `protractor` en global, mettre à jour webdriver `webdriver-manager update` et lancer `protractor`
- pour `quixote`, lancer `karma start tests/quixote.conf.js`, cependant, ceci est pour la démo.
  Il faut normalement faire tourner l'appli à tester en local, décommenter les lignes 9 à 12 du fichier de conf et mettre la bonne valeur ligne 11.