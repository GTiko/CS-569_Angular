import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'swapLetters',
})
export class SwapLettersPipe implements PipeTransform {
  transform(value: string, ...args: any): string {
    let obj = { ...args[0] };
    let result = '';

    for (let each of value.toLowerCase()) {
      if (obj[each]) {
        result += obj[each];
      } else {
        result += each;
      }
    }
    return result;
  }
}
