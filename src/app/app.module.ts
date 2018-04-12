import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { ScoreComponent } from './score/score.component';
import { questionsService } from "./questionsServices.service";

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [questionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
