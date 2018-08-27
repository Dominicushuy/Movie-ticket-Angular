import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daypipe'
})
export class DayPipe implements PipeTransform {
  constructor(){}
  transform(value: any) : any{
  	let mangNgay  = value.split('-');
  	let day = mangNgay[2].substring(0,2) + '/' + mangNgay[1] + '/' +mangNgay[0];
    return day;
  }

}