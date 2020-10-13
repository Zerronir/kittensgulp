# Descripció del problema:
Crea un projecte anomenat "Kittens" mitjançant npm. Aleshores, afegeix Gulp per automatitzar les següents tasques:

1- Tasca "sass". Compilar els arxius .scss de la carpeta "sass" i ficar-los dins una carpeta anomenada "css"

2- Tasca "sass:watch". Crea un watcher que vigili que quan hi ha un canvi a un arxiu .scss de tot el projecte es cridi a la tasca "sass".

3- Tasca "minimitzacss". Minimitza els arxius de la carpeta .css i deixa'ls dins la carpeta "dist/css". Prerequisit: tasca "sass".

4- Tasca "minimitzajs". Minimitza els arxius de la carpeta "js" i deixa'ls dins "dist/js".

5- Tasca "concatcss". Concatena tots els arxius de la carpeta "dist/css" en ORDRE i crea un fitxer "all.css" a "dist/css/all.css". Prerequisit: "minimitzacss"

6- Tasca "concatjs". Concatena tots els arxius de la carpeta "dist/js" en ORDRE i crea un fitxes "all.js" a "dist/js/all.js". Prerequisit: "minimitzajs".

7- Tasca "babel". Executa "babel" a l'arxiu "dist/js/all.js" i crea l'arxiu "all-babel.js". Prerequisit: "concatjs".

8- Crea una tasca "kittens" que executi totes les tasques (excepte els watchers), és a dir, executant la tasca "kittens" s'hauria de deixar preparat el projecte per pujar a producció.

# Solució
