import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character:any = {}
  constructor( private activatedRoute: ActivatedRoute,
              private _characterService: CharactersService ) 
  {
    this.activatedRoute.params.subscribe(params => {
      this.character = this._characterService.getCharacter(params['id']);
      console.log(this.character)
    })
  }

  ngOnInit( ) {
  }

}
