import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any): unknown {
    const today= new Date();
    const birthDate= new Date(value);
    let age= today.getFullYear() - birthDate.getFullYear()
    let month= today.getMonth()- birthDate.getMonth()
    if(month<0){
      age--;
    }
    return age;
  }

}
