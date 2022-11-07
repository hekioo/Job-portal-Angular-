import { Component, OnInit } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';
import Swal from 'sweetalert2';
import { ApplyJobService } from '../apply-job.service';
import { JobService } from '../job.service';
import { ApplyJob } from '../models/apply-job';
import { Job } from '../models/job';
import { User } from '../models/user';


@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  uid:any;
  typee:any;
  category:any;

  userList: User[] = [];
  jobList:Job[]=[];


  // objects for 3rd model
  userObj:User;
  jobObj:Job;
  applyJob: ApplyJob = new ApplyJob();

  constructor(private _jobService:JobService, private _applyJobService:ApplyJobService, private _router:Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('category', 'no');
    this.uid = sessionStorage.getItem('userId');
    this.typee = sessionStorage.getItem('type');
    this.category = sessionStorage.getItem('category');
    this.getAllJobDetails(); 
  }


  // Function to display all the listed jobs onto the portal for Admin and User
  getAllJobDetails()
  {
    this._jobService.getAllJob().subscribe(response => {
      console.log(response);
      this.jobList = response;
    },
    error => {
      console.log(error);
    })
  }

  // getJobDetailByCategory(selectedCategory: string)
  // {
  //   this._jobService.getJobByLoc(selectedCategory).subscribe(response => {
      
  //       this.jobListByLoc = response;
      
     
      
  //     console.log(response);
  //   },
  //   error => {
  //     console.log(error);
  //   })
  // }


  // function to show the previous Applied jobs
  appliedJob(jobId:number, element:any, text:any)
  {

    // for changing button text
    element.textContent = text;
    element.disabled = true;

    // this.userObj.userId = this.uid;  //chnage typeOf
    // //this.userObj.userId = JSON.parse(sessionStorage.getItem('userId') as any);  //chnage typeOf
    // //console.log(sessionStorage.getItem('userId'));
    // //console.log(typeof(JSON.parse(sessionStorage.getItem('userId') as any)));
    // this.jobObj.jobId = jobId;
    // this.applyJob.jobs = this.jobObj;
    // this.applyJob.users = this.userObj;

    this._applyJobService.addAppliedJob(jobId,this.uid).subscribe(response => {

      Swal.fire({
        title: 'You Have Successfully Applied for the Job',
        width: 600,
        padding: '3em',
        color: 'green',
        background: '#fff url(../../assets/images/success.webm)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(../../assets/images/success.webm)
          left top
          no-repeat
        `
      })


     },
      error => {
        console.log(error);
      })

  }


// deleting the job function (ONLY ADMIN)
  deleteJob(id:number)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure you want to delete this record?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this._jobService.deleteJob(id).subscribe(response => {

          this.getAllJobDetails();


          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your Record has been deleted.',
            'success'
          )
        },
        error=>{
          console.log(error);
        })


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your Record is safe :)',
          'error'
        )
      }
    })
  }

}
