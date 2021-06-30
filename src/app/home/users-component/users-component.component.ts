import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeServices } from 'src/app/services/home.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss'],

  
})
export class UsersComponentComponent implements OnInit {


  public varbleList: string = "hiii welcome";
  value1 :any;
 test2: string = "bye";
  textFromParent: string = "Hi iam from parent";
  twoWayData: string="hi";
  cursor: string = "cursor";
  counter: number = 0;
  chaildCount: number=0;

  public isDisabled: boolean = false;

  obj :Object = {
    c: 123,
    b: 456,
    a: 789,
  };
   

  public color: string = "red";

  title: string = "Hi all";
  userList: User[];
  
  obsValue: any;

  constructor(private homeService:HomeServices,private router: Router) {


   }

  ngOnInit(): void {

    this.userList = this.homeService.getListUsers();
    
    this.obsValue = new Observable((observer) => {
      console.log("Observable starts")
      setTimeout(() => { observer.next("manoj") }, 5000);
    })
    
  }

 
  dataPass(user: User) {
    this.homeService.setData(user);
    this.router.navigate(['/users',user.id]);    
  }
  
  increment() {
    this.counter++;
  }

  interPro() :string{
    return "hii"
  }


  onSave() {
    
    alert("save");
  }

  check() {
    
    alert("check")
  }

  orderbyValueDsc = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value > b.value ? 1 : (a.value > b.value) ? 0 : -1  
  }
   

  handleInput(event) {

    this.value1=(event.target as HTMLInputElement).value;
    //console.log((event as HTMLInputElement).value);
   }

   
}




