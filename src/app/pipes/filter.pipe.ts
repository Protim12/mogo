import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, catName: string): any[] {
    const resultArray = [];
    if(value.length === 0 || filterString === "" || catName ==="") {
      return value;
    }

    for(const item of value) {
      if(item[catName] === filterString) {
        resultArray.push(item)
      }
    }

    return resultArray;
  }

}
