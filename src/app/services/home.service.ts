import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../home/Model/User";



@Injectable({

  providedIn:'root'
})
export class HomeServices {
  
  data = new BehaviorSubject(null);
 
  // private subject = new Subject<any>();

  

  setData(data: any) {
    this.data.next(data);
    
  }

  getData() :Observable<any>{

    return this.data.asObservable();
    
  }

  getListUsers() :User[] {
    


    return [
      {
        id:1,
         firstName:"manoj",
         lastName:"kumar",
        email:"manoj@gmail.com",
       address:"Ap",
        phone: "889200765",
        date: new Date()
     },
  
     {
      id:2,
       firstName:"sindhu",
       lastName:"sindhu2",
      email:"sindhu@gmail.com",
     address:"KT",
       phone: "889200765",
       date: new Date()
   },
  
   
   {
    id:3,
     firstName:"siva",
     lastName:"siva2",
    email:"siva@gmail.com",
   address:"AP",
     phone: "889200765",
     date: new Date()
  },
  
  
  {
    id:4,
     firstName:"pradeep",
     lastName:"pradeep2",
    email:"pradeep@gmail.com",
   address:"AP",
    phone: "889200765",
    date: new Date()
  }
  
    ]; 
  }




}