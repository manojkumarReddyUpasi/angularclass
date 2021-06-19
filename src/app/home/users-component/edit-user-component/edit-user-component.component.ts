import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { HomeServices } from 'src/app/services/home.service';
import { HomeComponent } from '../../home.component';
import { EditUser } from '../../Model/EditUser';

@Component({
  selector: 'app-edit-user-component',
  templateUrl: './edit-user-component.component.html',
  styleUrls: ['./edit-user-component.component.scss']
  
})
export class EditUserComponentComponent implements OnInit {

  firstname: string = "manoj";
  editUserForm: any;
  @ViewChild('contactForm') contactForms: NgForm;
  editUser = new EditUser();
  constructor(private formBuilder: FormBuilder,private homeService:HomeServices) { }
  submitted: boolean = false;
  

  ngOnInit(): void {
   
    this.editUserForm = this.formBuilder.group(

      {
        firstname:["" ,[Validators.required, Validators.minLength(3)]   ],

        lastname:["",[]],

        address:["",[Validators.required, Validators.minLength(2)]],

        email:["",[Validators.required,Validators.email]],

        phone:["",[Validators.required, Validators.minLength(3)]]

      }
    );

   
    
    this.homeService.getData().subscribe(m => {
      this.editUserForm.setValue({firstname:m['firstName'],lastname:m['lastName'],address:m['address'],email:m['email'],phone:m['phone']});
    });
   
   
  }


  onSubmit() {

    this.submitted = true;
    console.log( this.editUserForm );
    

  }

   get f() { return this.editUserForm.controls; }

  changeCountry() {
    
 }
 

}
