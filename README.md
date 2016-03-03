# meetup-tscfe

Playground pour la présentation "Tester son code front-end".

Les quelques slides sont disponible sur [Google Drive](https://docs.google.com/presentation/d/15uIt5m3wXPBRzrP8pMalq_wVUlpd94wbpu0BIAC7oco/edit?usp=sharing).

## La playground

Dans le dossier de la playground, `npm install` et les environnements sont prêt à l'emploi.

Pour exécuter toute la batterie de tests, exécutez `npm test`, ou :

- `npm run mocha`
- `npm run karma`

## Notes

En temps normal, on exécuterait les tests comme ceci :

- installer `mocha` en global (`npm install -g mocha`) et lancer `mocha tests/mocha/**/*.spec.js`
- installer `karma-cli` en global et utiliser `karma start tests/karma.conf.js`