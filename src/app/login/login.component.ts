import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;


  constructor(private _formBuilder:FormBuilder,
              private _userService:UserService,
              private _route:Router) { }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({

      userEmail: ['',Validators.compose([Validators.required, Validators.email])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  })
  }


  loginCheck()
  {
    if(this.loginForm.valid)
    {

      // calling the input tag individually and storing the value
      var email = this.loginForm.get('userEmail')?.value;
      var password = this.loginForm.get('userPassword')?.value;

      if((email=="admin@gmail.com") && (password=="adminn"))
      {
        alert("admin");
        this._route.navigate(['admin-dashboard']);
      }

      else
      {
          this._userService.checkLogin(email,password).subscribe(response => {

            if(response!=null)
            {
              alert("user login");
                this._route.navigate(['user-dashboard']);
            }
            else{
                alert("Login Failed!");
            }

        }, 
        error => {
          console.log(error);
        });
      }

    }
    console.log(this.loginForm.value);
  }

}
