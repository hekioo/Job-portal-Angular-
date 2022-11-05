import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  uid:any;
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

  ngOnInit(): void 
  {
    // we are getting user id from session storage which we stored in user-dashboard component
    this.uid = sessionStorage.getItem('userId');
    // for getting the user details in the profile section
    this._userService.getUserById(this.uid).subscribe(response => {
      this.user = response;

      this.updateUserForm = this._formBuilder.group({
        userId: [this.uid],
        userName: [response.userName, Validators.compose([Validators.required, Validators.minLength(4)])],  //Validators.compose is used to to combine all the validations at once
        userEmail: [response.userEmail, Validators.compose([Validators.required, Validators.email])],
        userPassword: [response.userPassword, Validators.compose([Validators.required, Validators.minLength(6)])],
        userMobile: [response.userMobile, Validators.compose([Validators.required, , Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)])],
        userQualification: [response.userQualification, Validators.compose([Validators.required])],
        userSkills: [response.userSkills, Validators.compose([Validators.required])]
      });
    },
    error => {
      console.log(error);
    })
  }





  updateUserProfile()
  {
    console.log(this.updateUserForm.valid);
    console.log(this.updateUserForm.value);
    if(this.updateUserForm.valid)
    {
      Swal.fire({
        title: 'Do you want to Update the Profile?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Update',
        denyButtonText: `Don't Update`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          this._userService.updateUserById(this.uid, this.updateUserForm.value).subscribe(response => 
          {
            Swal.fire('Profile Updated Successfully!', '', 'success');
            this._route.navigate(['user/uid/job-list']);

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
