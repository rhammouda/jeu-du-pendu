import { Component, OnInit } from '@angular/core';
import { GameService } from '../Game/Game.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pseudo',
  templateUrl: './Pseudo.component.html',
  styleUrls: ['./Pseudo.component.scss']
})
export class PseudoComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  pseudo: string;
  ngOnInit() {
  }

  onSubmit() {
    this.gameService.pseudo = this.pseudo;
    this.router.navigate(['/game']);
  }

}
