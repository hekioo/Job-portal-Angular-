import { Component, OnInit } from '@angular/core';
import { ApplyJobService } from '../apply-job.service';
import { ApplyJob } from '../models/apply-job';
import { User } from '../models/user';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {

  uid: any;
  user: User;
  appliedJobList: ApplyJob[];

  constructor(private _applyJobService: ApplyJobService) { }

  ngOnInit(): void {
    this.uid = sessionStorage.getItem('userId');

    this.getAllAppliedJob();
  }


  getAllAppliedJob() {

    this._applyJobService.getAllAppliedJob().subscribe((response: ApplyJob[]) => {
      console.log(response);
      this.appliedJobList = response;

    },

      (error => {

        console.log(error);

      })

    );

  }
}
