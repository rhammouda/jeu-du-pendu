import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from './Character';
import { GameService } from '../Game/Game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  characters: Character[];
  @Output() newCharacter = new EventEmitter<string>();
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
                      .map(c => new Character(c, true));
    this.gameService.$onNewGame.subscribe(() => {
      this.characters.forEach(c => {
        c.isEnabled = true;
      });
    });
  }

  onCharacterClick( c: Character) {
    c.isEnabled = false;
    this.newCharacter.emit(c.value);
  }

}


