# Proyecto Angular

## Crear proyecto con CLI 
~~~
ng new nombreAplicacion
~~~

## Extensión de visual code usada 
Angular 8 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout

## Uso de librerías 

### bootstrap
npm install bootstrap --save

### jquery
npm install jquery --save

### popper
npm install popper --save

### Configurar para uso de librerías

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
  { path: 'ruta3/:id', component: Component3 },
  { path: '**', pathMatch: 'full', redirectTo: 'ruta' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true})
~~~

El `useHash:true` se utiliza para que cuando se recargue no se pierda parámetros, trabaja de forma más eficiente y es lo más recomendado

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

Observación: Cuando no se usa el `useHash:true` y se utiliza el angular CLI se debe tener obligatoriamente en el `index.html` la línea de código `<base href="/">` 

3. Lo siguiente es usar en `app.component.html` el `<router-outlet>`

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
o
<a [routerLink]="['/ruta1']" >Texto Link</a>
~~~

Se coloca `"['/ruta1']"` porque el '/' indica que va a tomar la base de la página donde esta para agregarle "ruta1"

### Extra: Agregar clase de link activo

Se debe agregar al elemento padre del `<a></a>` la propiedad `routerLinkActive` y pasarle la clase css de elemento activo.

~~~
<li> routerLinkActive="active"
  <a routerLink="/ruta" >Texto Link</a>
</li>
~~~

## Servicios

1. Para los servicios se recomienda crear una carpeta fuera de componentes y se debe crear un archivo con la siguiente estructura 

~~~
import { Injectable } from '@angular/core';

@Injectable()
export class nameService {

  constructor() { }

}
~~~

2. Luego se debe agregar en `app.module.ts` en `providers`

~~~
// Servicios
import { NameService } from './services/name-file-service.service';

@NgModule({
  declarations: [
    // Componentes
  ],
  imports: [
    // rutas
  ],
  providers: [
    NameService
  ],
})
~~~

3. Para utilizar el servicio en un componente se debe importar debidamente y llamar en constructor

En `componente.ts`
~~~
import { NameService } from '../../services/name-file-service.service';

export class nameComponent implements OnInit {
  result = [];

  constructor( private _nameService:NameService) { }

  ngOnInit() {
    this.result = this._nameService.getData();
  }
}
~~~

En `componente.html`
Cuando se trata de utilizar elementos con angular el atributo debe ir en []

~~~
<div *ngFor="let item of result">
  <img [src]="item.image">
</div>
~~~

## Pipes

Transforman la data en el template de forma visual. Se tienen los siguientes pipes:

* currency
* date
* uppercase
* json
* limitTo
* lowercase
* async
* decimal
* percent

Ejemplo:
~~~
<h3>{{ name | uppercase }}</h3>
~~~

## Decorador @Input
Permite la comunicación de un componente padre a componente hijo

1. En el componente hijo se debe importar el decorador `Input`

~~~
import { Component, OnInit, Input } from '@angular/core';
~~~

2. Para luego pasarse como decorador a una variable del hijo
~~~
export class ComponenteHijo implements OnInit {
  @Input() valorInput;
}
~~~

3. En el padre el valor se traspasa a través del padre como si fuera un atributo como lo maneja angular

~~~
<app-componente-hijo [valorInput]="ValorInputEnPadre">
</app-componente-hijo>
~~~

## Decorador @Output
Permite que el componente hijo avise de algún evento al padre. Para poder emitir eventos se requiere de EventEmitter.

1. En el componente hijo se debe importar el decorador `Output`

~~~
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
~~~

2. Declarar el evento de la siguiente forma y luego usarlo en el evento generado por el componente hijo

~~~
@Output() nameEventoHijo: EventEmitter<tipo-dato-parametro>;

funcionEventoHijo() {
  this.nameEventoHijo.emit(this.parametro);
}
~~~

3. En el padre se debe invocar el output como si fuera un evento y pasarle la función que realice alguna acción.

~~~
<app-componente-hijo (nameEventoHijo)="funcionEventoPadre($event)">
</app-componente-hijo>


funcionEventoPadre(parametro) {
  //  Realiza alguna acción
}
~~~