import { Component, OnInit } from '@angular/core';
import { QuizMetrixService } from 'src/app/services/quiz-metrix.service';
import { DataServeService } from 'src/app/services/data-serve.service';

@Component({
  selector: 'app-quizs-option',
  templateUrl: './quizs-option.component.html',
  styleUrls: ['./quizs-option.component.scss']
})
export class QuizsOptionComponent implements OnInit {

  newTurtlesQuestions: any;
  activeQuestion = 0;
  numQuestionAnswered = 0;
  error = false;
  finalize = false;

  constructor(public quizMetrixService: QuizMetrixService, private questionDataServe: DataServeService) { }

  ngOnInit(): void {
    this.newTurtlesQuestions = this.questionDataServe.quizQuestions;
  }

  // Active next question
  setActiveQuestion(i = undefined) {
    if(i === undefined) {
      let breakOut = false;
      while(!breakOut) {
        this.activeQuestion = this.activeQuestion < (this.newTurtlesQuestions.length -1)?++this.activeQuestion:0;
        if(this.activeQuestion === 0) {
          this.error = true;
        }
        if(this.newTurtlesQuestions[this.activeQuestion].selected === null) {
          breakOut = true;
        }
      }
    }
    else {
      this.activeQuestion = i;
    }
  }

  // Continue quiz after click continue button
  continueQuiz() {
    if(this.newTurtlesQuestions[this.activeQuestion].selected !== null) {
      this.numQuestionAnswered++
      if(this.numQuestionAnswered >= this.newTurtlesQuestions.length) {
        // finalize quiz
        for(var i=0; i<this.newTurtlesQuestions.length; i++) {
          if(this.newTurtlesQuestions[i].selected === null) {
            this.setActiveQuestion(i);
            return
          }
        }
        this.error = false;
        this.finalize = true;
        return;
      }
    }
    this.setActiveQuestion();
  }

  // Selected answer
  seletedAnswer(i) {
    this.newTurtlesQuestions[this.activeQuestion].selected = i;
    console.log("selected")
  }

  // Finalize answer
  finalizeAnswer() {
    // 
  }
}