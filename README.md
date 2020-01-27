# Proyecto Angular

## Crear proyecto con CLI 
~~~
ng new nombreAplicacion
~~~

## Extensión de visual code usada 
Angular 8 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout

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

## Rutas

1. Se debe crear un archivo para manejar las rutas `app.routes.ts` que tendría el contenido siguiente

~~~
import { RouterModule, Routes } from '@angular/router';
import { Component } from './components/component-import';
import { Component2 } from './components/component-import2';

const APP_ROUTES: Routes = [
  { path: 'ruta', component:  Component },
  { path: 'ruta2', component:  Component2 },
  { path: '**', pathMatch: 'full', redirectTo: 'ruta' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true})
~~~

El `useHash:true` se utiliza para que cuando se recargue no se pierda parametros, trabaja de forma más eficiente y es lo más recomendado

2. Se debe agregar en `app.module.ts` en `imports`

~~~
// rutas
import { APP_ROUTING } from './app.routes'

@NgModule({
  declarations: [
    // Componentes
  ],
  imports: [
    APP_ROUTING
  ],
  providers: []
})
~~~

Observacion: Cuando no se usa el `useHash:true` y se utiliza el angular CLI se debe tener obligatoriamente en el `index.html` la línea de código `<base href="/">` 

3. Lo siguiente es usar en `app.component.html` usando el `<router-outlet>`

~~~
<div class="container">
  <router-outlet></router-outlet>
</div>
~~~

## Uso de rutas en navegador

En el elemento html `<a></a>` ya no va la propiedad href sino `routerLink` de la siguiente forma:

~~~
<a routerLink="/ruta" >Texto Link</a>
o
<a [routerLink]="['ruta']" >Texto Link</a>
~~~

### Extra: Agregar clase de link activo

Se debe agregar al elemento padre del `<a></a>` la propiedad `routerLinkActive` y pasarle la clase css de elemento activo.

~~~
<li> routerLinkActive="active"
  <a routerLink="/ruta" >Texto Link</a>
</li>
~~~