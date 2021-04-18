import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizMetrixService {

  quizCardArea: any;
  
  constructor() { }

  changeState(state) {
    this.quizCardArea = state
  }

}
