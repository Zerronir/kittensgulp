# Instrucciones
Para poder usar este "programa" tenemos que empezar usando el comando
`git clone https://github.com/Zerronir/kittensgulp`.

Una vez hecho el clon del proyecto pasaremos a instalar las dependencias que necesitaremos, que en este caso el comando simplemente será:
`npm install` ya que tenemos todas las dependencias en el archivo `package.json`.

Una vez hecho eso ya podremos usar los comandos de gulp que hemos asignado para las tareas:

- `gulp sass` -- Compila los archivos .scss y los guarda como .css en la carpeta `/css/`
- `gulp watchSass` -- Vigila cada cambio que se hace en los archivos .scss y lo compila usando el comando `gulp sass` automáticamente
- `gulp minifyAll` -- Minimza los archivos css y js
- `gulp concatStyles` -- Une todos los css en uno solo dentro de la carpeta `dist/css`
- `gulp concatScripts` -- Une todos los js en uno solo dentro de la carpeta `dist/js`
- `gupl babel` -- Ejecuta la función de babel en el archivo `all.js`
- `gulp kittens` -- Para ejecutar todas las tareas en un solo comando