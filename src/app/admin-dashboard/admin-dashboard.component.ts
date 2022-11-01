import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _locationSt:LocationStrategy) { }

  ngOnInit(): void {

    // this is to prevent going back using back Button

    history.pushState(null, '', location.href);
    this._locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

}
