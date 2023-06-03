import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history.component';
import { ScoreboardComponent } from './scoreboard.component';
import { ButtonsComponent } from './buttons.component';
import { CheatBoardComponent } from './cheat-board.component';
import { CheatDirectiveDirective } from './cheat-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ScoreboardComponent,
    ButtonsComponent,
    CheatBoardComponent,
    CheatDirectiveDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
