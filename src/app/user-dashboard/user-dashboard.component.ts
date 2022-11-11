import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  uid:number;
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    // for getting user id into this component or any other component

    this.uid = this._activatedRoute.snapshot.params['userId'];
    sessionStorage.setItem('userId',this.uid.toString());
    //alert(this.uid);
  }

}
