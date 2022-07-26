import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testFilter'
})

export class FilterPipe implements PipeTransform {
  transform(data: any, category:string) {
    let newData = data.filter((dat:any) => dat.status === category);
    console.log(newData)
    return newData;
  }
}


