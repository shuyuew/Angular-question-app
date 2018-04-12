import { Component, OnInit } from '@angular/core';
import { questionsService } from "../questionsServices.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  sum:number;
  showScore: boolean = false;

  constructor(private questionService: questionsService) { }

  ngOnInit() {


    //console.log(this.sum);
  }
  ngDoCheck(){
    this.questionService.ScoreSumup();
    this.sum = this.questionService.sum;
    if(this.sum!=0){
      this.showScore = true;
    }

    console.log(this.sum);
  }


}
