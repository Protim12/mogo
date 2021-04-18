import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Turtles } from '../turtles';
import myJson from 'src/assets/my-quiz.json';
import { QuizCardSearchPipe } from 'src/app/pipes/quiz-card-search.pipe';
import { QuizMetrixService } from 'src/app/services/quiz-metrix.service';
import { DataServeService } from 'src/app/services/data-serve.service';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent implements OnInit {

  newMyTurtlesData: any;
  newArray: any;
  splitDate: any;
  activeTurtle: {};
  myModalTrue = false;
  turtlesSearch: any;

  constructor(public rs: RestService, private _myTur: RestService, public quizMetrixService: QuizMetrixService, private newMyTurtles: DataServeService) { }
  
  ngOnInit(): void {
    this.newMyTurtlesData = this.newMyTurtles.myturtles;

    this.newArray = this.newMyTurtlesData;
    for(var i = 0; i<this.newMyTurtlesData.length; i++) {
      this.splitDate = this.newMyTurtlesData[i].entryDate.split(" ");
      this.newMyTurtlesData[i]["splittedDate"]= {
        "number": this.splitDate[0],
        "month": this.splitDate[1]
      }
    }
  }

  changeActiveTurtle(index) {
    this.activeTurtle = index;
    this.myModalTrue = true;
  }

  closeModal() {
    if(this.myModalTrue = true) {
      this.myModalTrue = false;
    }
  }

  // quizToggleMethod
  quizToggleMethod() {
    this.quizMetrixService.changeState(true);
  }
}