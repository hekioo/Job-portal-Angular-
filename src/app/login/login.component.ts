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

    sessionStorage.removeItem('email');
    
    sessionStorage.removeItem('type');
    sessionStorage.removeItem('userId');
    //sessionStorage.setItem('defaultType', "default");
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
        sessionStorage.setItem('email', "admin");
        sessionStorage.setItem('type', "adminType");
        //sessionStorage.removeItem('defaultType');

        this._route.navigate(['admin']);
      }

      else
      {
          this._userService.checkLogin(email,password).subscribe(response => {

            if(response!=null)
            {
              alert("user login");
              sessionStorage.setItem('email', response.userEmail.toString());
              sessionStorage.setItem('type', "userType");
              //sessionStorage.removeItem('defaultType');

                this._route.navigate(['user', response.userId]);
            }
            else{
                alert("Invalid Credentials!");
                this._route.navigate(['register-page']);
                window.confirm("Guess you are Not registered, Please Register First!");
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
