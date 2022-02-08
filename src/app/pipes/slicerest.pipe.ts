import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicerest'
})
export class SlicerestPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {

   const extra = value.split(" ")[2] || "" ;
   const extra2 = value.split(" ")[3] || "" ;

    return " "+value.split(" ")[1]+" "+extra+" "+extra2;
  }

}
