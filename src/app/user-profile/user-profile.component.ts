import { Component, OnInit } from '@angular/core';
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
  constructor(private _userService:UserService) { }

  ngOnInit(): void 
  {
    // we are getting user id from session storage which we stored in user-dashboard component
    this.uid = sessionStorage.getItem('userId');
    // for getting the user details in the profile section
    this._userService.getUserById(this.uid).subscribe(response => {
      this.user = response;
    },
    error => {
      console.log(error);
    })
  }

}
