import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreboardComponentComponent } from './scoreboard-component.component';
import { ButtonsComponentComponent } from './buttons-component.component';
import { CheatingComponentComponent } from './cheating-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponentComponent,
    ButtonsComponentComponent,
    CheatingComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
