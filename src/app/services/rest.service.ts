import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turtles } from '../main-modules/turtles';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/quizInfo"

  getTurtles() {
    return this.http.get<Turtles[]>(this.url)
  }
}
