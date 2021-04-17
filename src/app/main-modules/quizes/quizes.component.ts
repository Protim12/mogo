import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Turtles } from '../turtles';
import myJson from 'src/assets/my-quiz.json';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent implements OnInit {

  public myturtles: {type:string, imageUrl:string, location:string, size:string, lifespan:string, entryDate:string, details:string}[] = myJson;

  splitDate: any;
  activeTurtle: {};
  myModalTrue = false

  constructor(public rs: RestService, private _myTur: RestService) { }
  
  ngOnInit(): void {
    for(var i = 0; i<this.myturtles.length; i++) {
      this.splitDate = this.myturtles[i].entryDate.split(" ");
      this.myturtles[i]["splittedDate"]= {
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
}