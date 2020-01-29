import { Component, OnInit } from '@angular/core';
import { CharactersService, Character } from '../../services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  charactersOP:Character[] = [];

  constructor( private _charactersService:CharactersService, 
               private router:Router) { }

  ngOnInit() {
    this.charactersOP = this._charactersService.getCharacters();
  }

  showCharacter(idx:number) {
    this.router.navigate(['/personaje', idx])
  }

}