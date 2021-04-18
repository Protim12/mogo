// PIPE FOR QUIZ CARD SEARCH BOX

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quizCardSearch'
})
export class QuizCardSearchPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if(value.length != "") {
      return value.filter(search=> {
        return search.type?.toLocaleLowerCase().match(sName?.toLocaleLowerCase());
      })
    }
    else if(value.length == 0) {
      return value
    }
  }

}
