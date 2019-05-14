import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Character } from '../keyboard/Character';
import { GameService } from './Game.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-game',
  templateUrl: './Game.component.html',
  styleUrls: ['./Game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService, private modalService: BsModalService) { }

  wordTofind: Character[];
  nbrCases: number;
  modalRef: BsModalRef;
  @ViewChild('modalFelicitation') public modalFelicitation: TemplateRef<any>;
  @ViewChild('modalLost') public modalLost: TemplateRef<any>;

  ngOnInit() {
   this.newGame();
  }

  newGame() {
    this.nbrCases = 7;
    this.gameService.newGame();
    this.wordTofind = this.gameService.wordToFind.split('').map(c => new Character(c, false));
    console.log(this.wordTofind);
  }

  onNewCharacter(value: string) {
    const sameCharacters = this.wordTofind.filter(c => c.value === value);
    if (sameCharacters.length === 0) {
      this.nbrCases --;
    } else {
      sameCharacters.forEach(c => {
        c.isEnabled = true;
      });
    }
    this.checkCompleete();
  }

  checkCompleete() {
    let win = true;
    for (let i = 0; i < this.wordTofind.length; i++) {
      if (!this.wordTofind[i].isEnabled) {
        win = false;
        break;
      }
    }
    if (win) {
      this.showFelicitation();
    } else if (this.nbrCases === 0) {
      this.showLost();
    }
  }

  showFelicitation() {
    const ngbModalOptions: ModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    this.modalRef = this.modalService.show(this.modalFelicitation, ngbModalOptions);
  }

  showLost() {
    const ngbModalOptions: ModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    this.modalRef = this.modalService.show(this.modalLost, ngbModalOptions);

  }
}
