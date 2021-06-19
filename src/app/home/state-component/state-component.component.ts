import { Component, OnInit } from '@angular/core';
import { HomeServices } from 'src/app/services/home.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-state-component',
  templateUrl: './state-component.component.html',
  styleUrls: ['./state-component.component.scss']
})
export class StateComponentComponent implements OnInit {

  userList: User[];
  
  constructor(private homeService:HomeServices) { }

  ngOnInit(): void {

    this.userList=this.homeService.getListUsers();
  }

}
