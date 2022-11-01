import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-view-job-by-loc',
  templateUrl: './view-job-by-loc.component.html',
  styleUrls: ['./view-job-by-loc.component.css']
})
export class ViewJobByLocComponent implements OnInit {

  jobListByLoc:Job[]=[];
  jobLoc:string;
  constructor(private _activatedRouter:ActivatedRoute,private _jobService:JobService) { }

  ngOnInit(): void {
    this.jobLoc = this._activatedRouter.snapshot.params['jobLocation'];
    this.getJobDetailByLocation("banglore");
  }

  getJobDetailByLocation(jobLoc:string)
  {
    this._jobService.getJobByLoc(jobLoc).subscribe(response => {
      this.jobListByLoc = response;
      console.log(response);
    },
    error => {
      console.log(error);
    })
  }

  
  


}
