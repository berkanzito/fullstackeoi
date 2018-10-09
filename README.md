# fullstackeoi
Fullstack EOI git 

## Enlaces de Interés

## Notas de Manz
### Parcel

*Detalle importante de la clase de hoy: Bases de JS*Hoy vimos que al hacer un `onClick` desde el HTML, no funcionaba. En clases, pensé que era por el tema de la minificación de Babel y la minificación de nombres de variables (mangle: https://en.wikipedia.org/wiki/Name_mangling), pero no. Lo pongo por aquí y mañana lo comento en clase:- `package.json`: En el script `dev` hacer un `parcel serve src/index.html --global global --open`. Esto hará que el parcel cree una variable `global` que es la que contendrá todas las funciones "globales".
- `index.html`: Al añadir un `onClick` a un elemento HTML, por ejemplo al `<button>`, el nombre de la función será `global.nombreFuncion()` en lugar de `nombreFuncion()` como vimos en clase.
- `index.js`: En las funciones que queramos llamar desde el HTML, añadimos un `export` antes del `function`.Con esto le decimos a parcel que cree una variable `global` que contendrá todas las funciones que queramos llamar desde el HTML.No obstante, pongo esto sólo por si alguien tiene curiosidad y quiere investigar, pero lo *recomendable* es hacerlo como vimos en clase, el `onclick` *directamente desde Javascript*. Así lo tendremos mejor organizado: la lógica en Javascript, y el contenido/etiquetado en HTML. 

Los que estén utilizando Parcel recuerden: la carpeta `src` contiene los archivos fuente que editamos (postcss, less, pug, etc...), la carpeta `dist` contiene los archivos finales que abre en el navegador al hacer un `npm run dev`.- Al hacer un `npm run dev`, cada vez que hacemos un guardado de algún fichero en VSCODE, Parcel actualiza los ficheros implicado en `dist`. En local todo funcionará correctamente porque el HTML está en la carpeta `dist` y los enlaces a CSS/JS tienen la ruta `/loquesea.js`.- Al subirlo a un repo de GitHub (usando GitHub Pages), recuerden que la URL final va a ser algo del tipo `https://manzdev.github.io/javascript-repo/practica1/`, por lo tanto, si tenemos la ruta `/loquesea.js` esto implica que el navegador buscará el archivo en `https://manzdev.github.io/loquesea.js`.Para solucionar esto último, hay una tarea `build` en el `package.json` que podríamos dejar así: `parcel build src/index.html -d build --global global --public-url /javascript-repo/practica1/`. Esta tarea crea una carpeta `build` con el HTML/CSS/JS final para subir a GitHub, cambiando "automágicamente" los enlaces a la ruta del GitHub que necesita.*Resumen*: Carpeta `dist` la versión final para probar en local. Carpeta `build` la versión final para subir a GitHub. Carpeta `src` el código fuente con el que trabajamos.

`git subtree push --prefix build origin gh-pages`Sube a la rama `gh-pages` (donde generalmente se suben las Github Pages) el contenido de la subcarpeta `build`. De esta forma se puede desplegar en GitHub una carpeta con archivos HTML/CSS/JS directamente.
