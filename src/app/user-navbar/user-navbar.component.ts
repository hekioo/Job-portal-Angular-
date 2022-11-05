import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  uid:any;
  email:any;

  // selectedCategory = '';
  // jobListByLoc:Job[]=[];
  // jobLoc:string;

  constructor(private _activatedRouter:ActivatedRoute,private _jobService:JobService) { }

  ngOnInit(): void 
  {
    // we are getting user id from session storage which we stored in user-dashboard component
    this.uid = sessionStorage.getItem('userId');
    this.email = sessionStorage.getItem('email');
    //alert("user id: " +this.uid);
  }



  // getJobDetailByCategory(selectedCategory: string)
  // {
  //   this._jobService.getJobByLoc(selectedCategory).subscribe(response => {
  //     this.jobListByLoc = response;
  //     console.log(response);
  //   },
  //   error => {
  //     console.log(error);
  //   })
  // }

}
