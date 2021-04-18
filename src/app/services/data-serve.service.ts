import { Injectable } from '@angular/core';
import myJson from 'src/assets/my-quiz.json';
import questionsJson from 'src/assets/questions.json';

@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  public myturtles: {type:string, imageUrl:string, location:string, size:string, lifespan:string, entryDate:string, details:string}[] = myJson;
  public quizQuestions: {type:string, text:string, possibilities:any, selected:null, correct:null}[] = questionsJson;
  turtlesData: any;
  // quizQuestions: any;
  length: number;

  constructor() { }

  // getTurtles() {
  //   return {
  //     {type:string, imageUrl:string, location:string, size:string, lifespan:string, entryDate:string, details:string}[] = myJson;
  //   }
  // }
}
