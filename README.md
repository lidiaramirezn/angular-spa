# Proyecto Angular

## Crear proyecto con CLI 
~~~
ng new nombreAplicacion
~~~

## Uso de Librerias 

### bootstrap
npm install bootstrap --save

### jquery
npm install jquery --save

### popper
npm install popper --save

### Configurar para uso de librerias

En `angular.json`

~~~
"styles": [
            "src/styles.css",
            "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
"scripts": [
            "node_modules/jquery/dist/jquery.slim.min.js",
            "node_modules/popper.js/dist/umd/popper.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
          ]
~~~

## Crear componentes
~~~
ng g c componente
~~~

### Excluir css 
~~~
ng g c componente -is
~~~