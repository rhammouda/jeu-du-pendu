import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  pseudo: string;
  private newGameSource = new Subject();
  $onNewGame = this.newGameSource.asObservable();
  wordToFind: string;
  private wordsList = ['DOTNET', 'ANGULAR', 'TYPESCRIPT', 'JAVASCRIPT', 'JAVA', 'HTML' , 'PHP', 'CSS', 'REACT', 'PHYTHON', 'SQL'];
  constructor() { }

  newGame() {
    const index =  Math.floor(Math.random() * this.wordsList.length);
    this.wordToFind = this.wordsList[index];
    this.newGameSource.next();
  }
}
