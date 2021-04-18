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

  constructor(public quizMetrixService: QuizMetrixService, private questionDataServe: DataServeService) { }

  ngOnInit(): void {
    this.newTurtlesQuestions = this.questionDataServe.quizQuestions;
  }

}
