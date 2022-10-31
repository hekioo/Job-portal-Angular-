import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  preserveWhitespaces: true,
})
export class AddUserComponent implements OnInit {


  userReg: FormGroup;

  constructor(private _userServive: UserService, 
              private _formBuilder: FormBuilder, 
              private _router:Router) {

    this.userReg = this._formBuilder.group({

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
  }



  register() {
   // console.log(this.userReg.valid);  // this will set to TRUE only if all the validations are satisfied
    // console.log(this.userReg.value);  // this is used to get all the values from all the input tags

    if(this.userReg.valid)
    {

      Swal.fire({
        title: 'Do you want to save the Record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          this._userServive.addUser(this.userReg.value).subscribe(response => {
            Swal.fire('Record Saved!', '', 'success')
            this._router.navigate(['user-list']);  // to navigate automatically to view-user list
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
