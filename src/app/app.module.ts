import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Game/Game.component';
import { PseudoComponent } from './Pseudo/Pseudo.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
   declarations: [
      AppComponent,
      GameComponent,
      PseudoComponent,
      KeyboardComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      ModalModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
