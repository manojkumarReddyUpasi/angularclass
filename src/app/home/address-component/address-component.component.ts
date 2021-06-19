import { Component, OnInit } from '@angular/core';
import { HomeServices } from 'src/app/services/home.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.scss']
})
export class AddressComponentComponent implements OnInit {


  userList: User[];
  
  constructor(private homeService:HomeServices) { }

  ngOnInit(): void {
   this.userList= this.homeService.getListUsers();
  }

}
