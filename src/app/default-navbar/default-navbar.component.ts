import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent implements OnInit {


  menuType:String ;
  user: any;
  admin:any;
  default: any;

  role: any;

  homePageRole:any;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    // this._router.events.subscribe((val:any) => {
    //   console.log(val.url);
    //   if(val.url)
    //   {
    //     if(val.url.includes('admin'))
    //     {
    //       console.log("in admin section");
    //       this.menuType = "admin";
    //     }
    //     else if(val.url.includes('user'))
    //     {
    //       console.log("in user section");
    //       this.menuType = "user";
    //     }
    //     else
    //     {
    //       console.log("default section");
    //       this.menuType = "default";
    //     }
    //   }
      
    // })


    this.role = sessionStorage.getItem('typee');
    this.homePageRole = sessionStorage.getItem('defaultType');
  }

}
