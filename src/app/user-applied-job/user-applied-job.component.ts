import { Component, OnInit } from '@angular/core';
import { ApplyJobService } from '../apply-job.service';
import { ApplyJob } from '../models/apply-job';
import { Job } from '../models/job';
import { User } from '../models/user';

@Component({
  selector: 'app-user-applied-job',
  templateUrl: './user-applied-job.component.html',
  styleUrls: ['./user-applied-job.component.css']
})
export class UserAppliedJobComponent implements OnInit {

  uid:any;
  user: User;
  userAppliedJobList:ApplyJob[];

  constructor(private _applyJobService:ApplyJobService) { }

  ngOnInit(): void {
    this.uid = sessionStorage.getItem('userId');
    this.getAllAppliedJobByUser();
  }



  getAllAppliedJobByUser()

  {

    this. _applyJobService.getAllAppliedJob().subscribe((response:ApplyJob[])=>

      {
        console.log(response);
          this.userAppliedJobList=response;

      },

      (error=>

        {

        console.log(error);

        })

      );

  }

  // getAllAppliedJobByUser()

  // {

  //   this. _applyJobService.getAllAppliedJobByUserID(this.uid).subscribe((response:ApplyJob[])=>

  //     {
  //       console.log(response);
  //         this.userAppliedJobList=response;

  //     },

  //     (error=>

  //       {

  //       console.log(error);

  //       })

  //     );

  // }

}
