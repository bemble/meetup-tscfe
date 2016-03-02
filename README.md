# meetup-tscfe

Playground pour la présentation "Tester son code front-end".

Les quelques slides sont disponible sur [Google Drive](https://docs.google.com/presentation/d/15uIt5m3wXPBRzrP8pMalq_wVUlpd94wbpu0BIAC7oco/edit?usp=sharing).

## La playground

Dans le dossier de la playground, `npm install` et les environnements sont prêt à l'emploi.

Pour exécuter tout la batterie de tests, un simple `npm test` suffit.

## Notes

En temps normal, vous n'avez pas à utiliser `run.js`.
Le plus simple est d'utiliser un task runner comme `gulp` ou `grunt`, ou d'utiliser directement les outils :

- installer `mocha` en global (`npm install -g mocha`) et lancer `mocha tests/mocha/**/*.spec.js`
- installer `karma-cli` en global et utiliser `karma start tests/karma.conf.js`