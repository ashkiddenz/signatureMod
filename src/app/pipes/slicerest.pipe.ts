import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicerest'
})
export class SlicerestPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {

    let idx = value.lastIndexOf(' ');
    if (idx == -1)
        throw new Error("Only a single name: " + value);
    return value.substring(idx + 1);
  }

}
