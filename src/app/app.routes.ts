import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';


const APP_ROUTES: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje/:id', component: CharacterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true})
