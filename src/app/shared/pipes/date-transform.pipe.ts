import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(value: number): unknown {
    let date = new Date();
    date.setMonth(value - 1);

    return date.toLocaleString('en-US', { month: 'long' }).toUpperCase();
  }
}