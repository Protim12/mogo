import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { QuizMetrixService } from 'src/app/services/quiz-metrix.service';
import { DataServeService } from 'src/app/services/data-serve.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-quizs-option',
  templateUrl: './quizs-option.component.html',
  styleUrls: ['./quizs-option.component.scss']
})
export class QuizsOptionComponent implements OnInit, OnDestroy {

  newTurtlesQuestions: any;
  activeQuestion = 0;
  numQuestionAnswered = 0;
  error = false;
  finalize = false;

  countDate: any = this.quizMetrixService.dateEntry;
  newMin = 0;
  newSec = 0;
  timer = false;
  counterInterval;
  private subscription: Subscription;

  constructor(public quizMetrixService: QuizMetrixService, private questionDataServe: DataServeService) {
    this.subscription = this.quizMetrixService.getClickEvent().subscribe(()=>{
      // this.newTime();
      this.quizTimer();
      // this.resetCounter();
    })
  }

  
  
  ngOnInit(): void {
    this.newTurtlesQuestions = this.questionDataServe.quizQuestions;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  // Get Time
  getTime() {
    this.newMin = Math.floor((this.countDate / 60) % 60);
    this.newSec = Math.floor(this.countDate % 60);
    this.countDate = this.countDate - 1;
    if(this.newSec < 1) {
      this.timer = true;
      this.countDate = 0;
    }
  }

  // Quiz timer
  quizTimer() {
    this.counterInterval = setInterval(() => {
      this.getTime();
    },
    1000)
  }

  // Finalize answer
  finalizeAnswer() {
    // this.countDate = this.quizMetrixService.dateEntry;
    this.finalize = false;
    this.numQuestionAnswered = 0;
    this.activeQuestion = 0;
    this.quizMetrixService.markQuiz();
    this.quizMetrixService.changeState("quiz", false);
    this.quizMetrixService.changeState("results", true);
    this.timer = false;
    // clearInterval(this.countDate);

    clearInterval(this.counterInterval)
    this.countDate = this.quizMetrixService.dateEntry;
  }
}