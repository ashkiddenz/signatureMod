import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'slicefirst'
})
export class StringPipe implements PipeTransform {

  transform(value: string, ...args: string[]): any {
    return value.split(" ")[0];
  }

}
