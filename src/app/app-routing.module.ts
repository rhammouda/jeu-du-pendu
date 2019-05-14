import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PseudoComponent } from './Pseudo/Pseudo.component';
import { GameComponent } from './Game/Game.component';

const routes: Routes = [
  { path: 'pseudo', component: PseudoComponent },
  { path: 'game', component: GameComponent},
  { path: '',   redirectTo: '/pseudo', pathMatch: 'full' },
  { path: '**', component: PseudoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
