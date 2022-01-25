# Getting Started with Create React App

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts:

Dans ce projet vous pouvez executer:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Outils utilisés :  visual studio code ,npm, npx, webpack, Babel, ESLint, create-react-app





### VScode
Visual Studio Code est un éditeur de code source léger mais puissant qui fonctionne sur votre bureau et est disponible pour Windows, macOS et Linux.
Il est livré avec un support intégré pour JavaScript, TypeScript et Node.js et dispose d'un riche écosystème d'extensions pour d'autres langages (tels que C++, C#, Java, Python, PHP, Go) et moteurs d'exécution (tels que .NET et Unity).

### NPM
npm est le plus grand registre de logiciels au monde. Les développeurs de logiciels open source de tous les continents utilisent npm pour partager et emprunter des packages, et de nombreuses organisations utilisent également npm pour gérer le développement privé.
npm se compose de trois éléments distincts : le site Web, l'interface en ligne de commande (CLI), le registre.
Le site web est utilisé pour découvrir des packages, configurer des profils et gérer d'autres aspects de l’expérience npm. Par exemple, il est possible de mettre en place des organisations pour gérer l'accès aux packages publics ou privés.
Le CLI s'exécute à partir d'un terminal, et c'est ainsi que la plupart des développeurs interagissent avec npm.
Le registre est une grande base de données publique de logiciels JavaScript et des méta-informations qui les entourent.

### Webpack
Webpack est un regroupeur de modules statiques pour les applications JavaScript modernes. Lorsque webpack traite votre application, il construit en interne un graphe de dépendances à partir d'un ou plusieurs points d'entrée, puis combine tous les modules dont votre projet a besoin dans un ou plusieurs lots, qui sont des actifs statiques pour servir votre contenu.
Depuis la version 4.0.0, webpack ne nécessite pas de fichier de configuration pour regrouper les projets des programmeurs. Néanmoins, il est configurable pour mieux s'adapter à leurs besoins.
Pour commencer, il suffit de comprendre les concepts de base : Entrée, Sortie, Loaders, Plugins, Mode, Browser Compatibility.
Entrée : Un point d'entrée indique quel module webpack doit utiliser pour commencer à construire son graphe de dépendances interne. Webpack déterminera de quels autres modules et bibliothèques ce point d'entrée dépend (directement et indirectement).
Sortie : La propriété output indique à webpack où émettre les bundles qu'il crée et comment nommer ces fichiers. La valeur par défaut est ./dist/main.js pour le fichier de sortie principal et le dossier ./dist pour tout autre fichier généré.
Loaders : Par défaut, webpack ne comprend que les fichiers JavaScript et JSON. Les Loaders permettent à webpack de traiter d'autres types de fichiers et de les convertir en modules valides qui peuvent être consommés par votre application et ajoutés au graphe de dépendances.
Plugins : les plugins peuvent être utilisés pour effectuer un plus large éventail de tâches telles que l'optimisation des paquets, la gestion des actifs et l'injection de variables d'environnement.
Mode : En définissant le paramètre mode sur development, production ou none, on peut activer les optimisations intégrées de webpack qui correspondent à chaque environnement. La valeur par défaut est production.
Browser Compatibility :Webpack prend en charge tous les navigateurs conformes à ES5 (IE8 et les versions inférieures ne sont pas prises en charge). Webpack a besoin de Promise pour import() et require.ensure().Pour prendre en charge des navigateurs plus anciens, il faut charger un polyfill avant d'utiliser ces Expressions.

### npx
npx est le gestionnaire des packages, depuis la version 5.2.0 de npm, C’est un outil destiné à compléter l'expérience d'utilisation des paquets du registre npm - de la même manière que npm facilite l'installation et la gestion des dépendances hébergées dans le registre. C'est donc un standard aujourd'hui. npx est aussi un outil CLI dont le but est de faciliter l'installation et la gestion des dépendances hébergées dans le registre npm. Il est maintenant très facile d'exécuter n'importe quel type d'exécutable basé sur Node.js en l’installant normalement via npm. npx nous aide à éviter les problèmes de versions, de dépendances et l'installation de packages inutiles, Il fournit également un moyen clair et facile d'exécuter des packages, des commandes, des modules et même des gistes et dépôts GitHub.

### Babel
Babel est un compilateur JavaScript, il est une chaîne d'outils qui sert principalement à convertir le code ECMAScript 2015+ en une version rétrocompatible de JavaScript dans les navigateurs ou environnements actuels et anciens. Les principales fonctions que Babel peut offrir sont :
Transformer la syntaxe, Fonctions polyfill qui manquent dans votre environnement cible (par le biais d'un polyfill tiers tel que core-js), transformations de code source (codemods).
Babel prend en charge la dernière version de JavaScript grâce à des transformateurs syntaxiques, il peut aussi convertir la syntaxe JSX et supprimer les annotations de type, il est construit à partir de plugins. Il essaie de rester fidèle à la norme ECMAScript, dans la mesure du possible, il peut aussi avoir des options spécifiques pour être plus conforme à la spécification en échange de performances.
Babel s'efforce d'utiliser le moins de code possible sans dépendre d'un temps d'exécution encombrant.

### ESlint
ESLint analyse statiquement du code pour trouver rapidement les problèmes. ESLint est intégré à la plupart des éditeurs de texte et peut être exécuter dans le cadre de votre pipeline d'intégration continue. De nombreux problèmes détectés par ESLint peuvent être corrigés automatiquement, ses corrections tiennent compte de la syntaxe, de sorte que les programmeurs ne rencontrent pas d'erreurs introduites par les algorithmes traditionnels de recherche et de remplacement.
Prétraiter le code, utiliser des analyseurs personnalisés et écrire ses propres règles qui fonctionnent avec les règles intégrées de ESLint. On peut le personnaliser pour qu'il fonctionne exactement comme on le souhaite pour les projets.

https://cours-examens.org/images/Etudes_superieures/Ingenieur-en-informatique/4_annee/Genie_logiciel_II/9_atelier.pdf

https://bu.umc.edu.dz/theses/informatique/ABD5735.pdf.




La qualité des logiciels est sacrifiée par de nombreux développeurs pour plus de fonctionnalités, un développement plus rapide et un coût moindre. Cependant, il faut bien comprendre qu'un produit de bonne qualité améliore en fait la vitesse de développement du logiciel. Il réduit le coût et permet l'amélioration et la fonctionnalité avec facilité car il s'agit d'un produit mieux structuré. Vous devez Vous devez payer pour une mauvaise qualité en termes de temps et de coûts de maintenance. La bonne qualité peut-elle être attribuée à un logiciel en améliorant les tests ? La réponse est NON. Le site processus de développement de logiciels de haute qualité est le plus important pour le développement de produit logiciel de qualité. La qualité des logiciels implique la fonctionnalité du logiciel la facilité d'utilisation, la fiabilité, les performances, l'évolutivité, le support et la sécurité.

Traduit avec www.DeepL.com/Translator (version gratuite)