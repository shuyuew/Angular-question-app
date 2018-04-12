import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {questionsService} from "../questionsServices.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions:{questionId:number,questionItem:string,questionChoice1:string,
    questionChoice2:string,questionChoice3:string}[]=[];
  customerAnswer: {questionId:number,customerChoice:string}[]=[];
  ID: number = 0;
  radioChecked: boolean = false;
  onSubmited: boolean = true;

  constructor(private questionsService:questionsService){}

  ngOnInit(){
    this.questions = this.questionsService.questions;
    this.customerAnswer = this.questionsService.customerAnswer;
  }


  onRadioClick(id,radio){
    this.questionsService.onCustomerAnswerUpdate(id,radio);
    this.radioChecked = true;//enable the next button
    //console.log(this.radioChecked);
  }

  //The ID used to change question,
  //ngFor show all the question, but only the one id = ID will show
  //move to the next question
  onSelect(){
    this.ID+=1;
    this.radioChecked = false;
  }

  //return to the previous question
  onReturn(id){
    if(this.ID!=0){
      this.ID--;
    }
    this.radioChecked = false;
    this.questionsService.onQuestionsUpdate(id);
  }

  //Show score
  onSubmit(){
    //alert('Ready for your score!');
    this.questionsService.onScoreUpdate();
    this.onSubmited = false;
  }


}
