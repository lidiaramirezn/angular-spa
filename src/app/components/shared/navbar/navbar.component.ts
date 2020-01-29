import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _charactersService:CharactersService) { }

  ngOnInit() {
  }

  searchCharacter(text:string) {
    this._charactersService.searchCharacter(text);
  }

}
