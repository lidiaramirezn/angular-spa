import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character:any = {};
  @Input() index:number;

  @Output() characterSelect: EventEmitter<number>;

  constructor() { 
    this.characterSelect = new EventEmitter();
  }

  ngOnInit() {
  }

  showCharacter() {
    this.characterSelect.emit(this.index);
  }

}
