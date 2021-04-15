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

  public mytur: {type:string, imageUrl:string,location:string, size:string,lifespan:string, entryDate:string,details:string}[] = myJson;
  
  turtleList: Turtles[] = [];
  newT;
  str:any = "My age 26 of"

  myArray:any = [
    {
      "name": "pranto 1 protim 10",
      "type": "dan 1 dna"
    }
  ];
  final: any;
  pranto: any;
  
  constructor(public rs: RestService, private _myTur: RestService) { }
  
  ngOnInit(): void {

    // this.newT = this._myTur.getTurtles();

    // this.pranto = this.myArray[0].name.split(" ");
    // console.log(this.pranto)
    // this.final = this.myArray[0].name.split(" ").filter(function(elem) {
    //   return !isNaN(elem);
    // }).map(function(val) {
    //   return parseFloat(val)
    // })

    console.log(this.mytur);
    this.pranto = this.mytur[0].entryDate.split(" ");
    console.log(this.pranto)
    this.final = this.pranto.filter(function(elem) {
      return !isNaN(elem);
    }).map(function(val) {
      return parseFloat(val)
    })
    console.log(this.final)
  }

}
