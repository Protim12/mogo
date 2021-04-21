import { Injectable } from '@angular/core';
import { DataServeService } from './data-serve.service';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizMetrixService {

  quizCardArea: any;
  resultActive: false;
  correctAnswer:any = [];
  numCorrect:any = 0;
  timer = false;


  countDate: any = 25;
  sec = 1000;
  min = this.sec * 60;
  hr = this.min * 60;
  day = this.hr * 24;
  public distance;
  public newDay = 0;
  public newHr = 0;
  public newMin = 0;
  public newSec = 0;
  private subscription: Subscription;
  
  constructor(private dataServeService: DataServeService) { }

  changeState(metric, state) {
    if(metric === "quiz") {
      this.quizCardArea = state;

      this.subscription = interval(1000).subscribe(x => {
        this.newMin = Math.floor((this.countDate / 60) % 60)
        this.newSec = this.countDate % 60
        this.countDate = this.countDate - 1;
        if(this.newSec < 1) {
          this.timer = true;
          this.countDate = 0;
        }
      });
    }
    else if(metric === "results") {
      this.resultActive = state;
      this.subscription.unsubscribe();
      this.countDate = 25;
      // this.countDate = false;
      // if(this.newSec < 1) {
      // }
      // this.timer = false;
    }
    else {
      this.subscription.unsubscribe();
      this.countDate = 25;
      // this.subscription = interval(2000).subscribe(x => {
      //   this.newMin = Math.floor((this.countDate / 60) % 60)
      //   this.newSec = this.countDate % 60
      //   this.countDate = this.countDate - 1;
      //   if(this.newSec < 1) {
      //     this.timer = true;
      //     this.countDate = 0;
      //   }
      // });
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
