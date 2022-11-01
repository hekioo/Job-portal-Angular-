import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  uid:any;
  constructor() { }

  ngOnInit(): void 
  {
    // we are getting user id from session storage which we stored in user-dashboard component
    this.uid = sessionStorage.getItem('userId');
    alert("user id: " +this.uid.userName);
  }

}
