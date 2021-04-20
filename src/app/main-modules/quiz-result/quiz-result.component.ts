import { Component, OnInit } from '@angular/core';
import { QuizMetrixService } from 'src/app/services/quiz-metrix.service';
import { DataServeService } from 'src/app/services/data-serve.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  newTurtlesQuestions: any;
  activeQuestion = 0;

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
    for(var i=0; i<this.newTurtlesQuestions.length; i++) {
      var data = this.newTurtlesQuestions[i];
      data.selected = null;
      data.correct = null;
    }
  }

}