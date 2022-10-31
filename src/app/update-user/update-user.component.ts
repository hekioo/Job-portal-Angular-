import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  uid:number ;
  
  user:User;
  updateUserForm: FormGroup;
  constructor(private _activatedRouter:ActivatedRoute,
              private _userService:UserService,
              private _formBuilder:FormBuilder,
              private _route:Router) 
  {
    this.updateUserForm = this._formBuilder.group({

      userId: [0],
      userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],  //Validators.compose is used to to combine all the validations at once
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      userMobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      userQualification: ['', Validators.compose([Validators.required])],
      userSkills: ['', Validators.compose([Validators.required])]


    });

  }

  ngOnInit(): void {

    this.uid = this._activatedRouter.snapshot.params['userId'];
    //alert(this.uid);
    this._userService.getUserById(this.uid).subscribe(response => {
      this.user=response;
      console.log(response);


      this.updateUserForm = this._formBuilder.group({
        userId: [0],
        userName: [response.userName, Validators.compose([Validators.required, Validators.minLength(4)])],  //Validators.compose is used to to combine all the validations at once
        userEmail: [response.userEmail, Validators.compose([Validators.required, Validators.email])],
        userPassword: [response.userPassword, Validators.compose([Validators.required, Validators.minLength(6)])],
        userMobile: [response.userMobile, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
        userQualification: [response.userQualification, Validators.compose([Validators.required])],
        userSkills: [response.userSkills, Validators.compose([Validators.required])]
      });
    },
    error => {
      console.log(error);
    })
   

      // there are 2 types of route
      //1. Router -> to move to any other component
      //2. ActivatedRoute -> used to get or receive the Id from other component



  }



  updateUser()
  {
    if(this.updateUserForm.valid)
    {
      Swal.fire({
        title: 'Do you want to Update the Record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Update',
        denyButtonText: `Don't Update`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          this._userService.updateUserById(this.uid, this.updateUserForm.value).subscribe(response => 
          {
            Swal.fire('Record Updated Successfully!', '', 'success');
            this._route.navigate(['user-list']);

          },
          error => {
            console.log(error);
          })


        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
  }
}
