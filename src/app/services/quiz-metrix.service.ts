import { Injectable } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { DataServeService } from './data-serve.service';
// interval

@Injectable({
  providedIn: 'root'
})
export class QuizMetrixService {

  quizCardArea: any;
  resultActive: false;
  correctAnswer:any = [];
  numCorrect:any = 0;
  something: any = false;

  dateEntry = 10;
  // countDate: any = this.dateEntry;
  // newMin = 0;
  // newSec = 0;
  // timer = false;
  
  
  
  constructor(private dataServeService: DataServeService) { }

  changeState(metric, state) {
    if(metric === "quiz") {
      this.quizCardArea = state;
      // clearInterval(this.countDate);
      this.something = true;
      
      setInterval(function() {
        // console.log("hi")
        // this.newMin = Math.floor((this.countDate / 60) % 60)
        // this.newSec = this.countDate % 60;
        // this.countDate = this.countDate - 1;
        // if(this.newSec < 1) {
        //   this.timer = true;
        //   this.countDate = 0;
        // }
        // console.log(this.newMin)
      },
      1000)
    }
    else if(metric === "results") {
      this.resultActive = state;
      this.something = false;
      // this.subscription.unsubscribe();
      // this.countDate = this.dateEntry;
      
      // this.countDate = this.dateEntry;
      // this.countDate = false;
      // if(this.newSec < 1) {
      // }
      // this.timer = false;
    }
    else {
      // this.subscription.unsubscribe();
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


  private subject = new Subject<any>();
  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}
