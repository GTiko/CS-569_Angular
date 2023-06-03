import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, args: number) {
    if (value.length > args) {
      return value.slice(0, args) + '...';
    }
    return value;
  }
}
