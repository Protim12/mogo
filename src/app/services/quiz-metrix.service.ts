import { Injectable } from '@angular/core';
import { DataServeService } from './data-serve.service';

@Injectable({
  providedIn: 'root'
})
export class QuizMetrixService {

  quizCardArea: any;
  resultActive: false;
  correctAnswer:any = [];
  numCorrect:any = 0;
  
  constructor(private dataServeService: DataServeService) { }

  changeState(metric, state) {
    if(metric === "quiz") {
      this.quizCardArea = state
    }
    else if(metric === "results") {
      this.resultActive = state;
    }
    else {
      return false;
    }
  }

  markQuiz() {
    this.correctAnswer = this.dataServeService.correctAnswers;
    for(var i=0; i<this.dataServeService.quizQuestions.length; i++) {
      if(this.dataServeService.quizQuestions[i].selected === this.dataServeService.correctAnswers[i]) {
        this.dataServeService.quizQuestions[i].correct = true;
        this.numCorrect++;
      }
      else {
        this.dataServeService.quizQuestions[i].correct = false;
      }
    }
  }

}
