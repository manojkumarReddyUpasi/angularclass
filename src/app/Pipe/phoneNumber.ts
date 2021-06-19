import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

  name:'phone'
})
export class PhoneNumber implements PipeTransform {
  
  transform(number: string,values:string,value2:string) {
    

    return values+number+value2

  }


}