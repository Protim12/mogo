import { Component, OnInit } from '@angular/core';
import { QuizMetrixService } from 'src/app/services/quiz-metrix.service';
import { DataServeService } from 'src/app/services/data-serve.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  newTurtlesQuestions: any;
  activeQuestion = 0;
  private subscription: Subscription;

  constructor(public quizMetrixService: QuizMetrixService, private questionDataServe: DataServeService) { }

  ngOnInit(): void {
    // this.quizMetrixService;
    this.newTurtlesQuestions = this.questionDataServe.quizQuestions;
  }

  getAnswerClass(i: any) {
    if(i === this.quizMetrixService.correctAnswer[this.activeQuestion]){
      return "active"
    }
    else if(i === this.newTurtlesQuestions[this.activeQuestion].selected){
      return "not-active"
    }
  }

  setActiveQuestion(i) {
    this.activeQuestion = i;
  }

  calculatePercentage() {
    return this.quizMetrixService.numCorrect / this.newTurtlesQuestions.length * 100;
  }

  reset() {
    this.quizMetrixService.changeState("results", false);
    
    this.quizMetrixService.numCorrect = 0;

    // this.quizMetrixService.countDate = 25;
    // this.subscription = interval(1000).subscribe(x => {
    //   this.quizMetrixService.newMin = Math.floor((this.quizMetrixService.countDate / 60) % 60)
    //   this.quizMetrixService.newSec = this.quizMetrixService.countDate % 60
    //   this.quizMetrixService.countDate = this.quizMetrixService.countDate - 1;
    //   if(this.quizMetrixService.newSec < 1) {
    //     this.quizMetrixService.timer = true;
    //     this.quizMetrixService.countDate = 0;
    //   }
    //   // if(this.resultActive = state) {
    //   //   this.timer = true;
    //   // }
    // });
    for(var i=0; i<this.newTurtlesQuestions.length; i++) {
      var data = this.newTurtlesQuestions[i];
      data.selected = null;
      data.correct = null;
    }
  }

}