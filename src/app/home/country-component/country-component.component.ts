import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { HomeServices } from 'src/app/services/home.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.scss']

})
export class CountryComponentComponent implements OnInit {

  userList: User[];
  constructor(  private homeservice: HomeServices) {
    

   }

  ngOnInit(): void {

    this.userList = this.homeservice.getListUsers();
  }

}
