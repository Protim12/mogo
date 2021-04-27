import { Injectable } from '@angular/core';
import myJson from 'src/assets/my-quiz.json';
import questionsJson from 'src/assets/questions.json';
import contactList from 'src/assets/contact-list.json';

@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  public myturtles: {type:string, imageUrl:string, location:string, size:string, lifespan:string, entryDate:string, details:string}[] = myJson;
  public quizQuestions: {type:string, text:string, possibilities:any, selected:null, correct:any}[] = questionsJson;
  public contact: {id:number, firstname:string, lastname:string, email:string}[] = contactList;
  correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
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
