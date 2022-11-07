import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  uid:any;
  role:any;
  constructor() { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('type');
    this.role = sessionStorage.getItem('userId');
  }

}
