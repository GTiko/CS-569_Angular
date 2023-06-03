import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ShortenPipe } from './shorten.pipe';
import { ColorizeDirective } from './colorize.directive';
import { ClickToIncreaseDirective } from './click-to-increase.directive';
import { SwapLettersPipe } from './swap-letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShortenPipe,
    ColorizeDirective,
    ClickToIncreaseDirective,
    SwapLettersPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
