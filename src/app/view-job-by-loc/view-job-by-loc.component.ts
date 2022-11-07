import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, OutletContext } from '@angular/router';
import Swal from 'sweetalert2';
import { ApplyJobService } from '../apply-job.service';
import { JobService } from '../job.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-view-job-by-loc',
  templateUrl: './view-job-by-loc.component.html',
  styleUrls: ['./view-job-by-loc.component.css']
})
export class ViewJobByLocComponent implements OnInit {

  typee:any;
  selectedCategory = '';
  uid:any;

  jobListByLoc:Job[]=[];
  jobLoc:string;
  constructor(private _activatedRouter:ActivatedRoute,private _jobService:JobService, private _applyJobService:ApplyJobService) { }

  ngOnInit(): void {
    //this.jobLoc = this._activatedRouter.snapshot.params['jobLocation'];
    this.getJobDetailByCategory(this.selectedCategory);
    this.typee = sessionStorage.getItem('type');
    sessionStorage.setItem('category', 'yes');
    this.uid = sessionStorage.getItem('userId');
  }





  getJobDetailByCategory(selectedCategory: string)
  {
    this._jobService.getJobByLoc(selectedCategory).subscribe(response => {
      
        this.jobListByLoc = response;
      
     
      
      console.log(response);
    },
    error => {
      console.log(error);
    })
  }


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

          this.getJobDetailByCategory(this.selectedCategory);

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

  // getAllJobDetails()
  // {
  //   this._jobService.getAllJob().subscribe(response => {
  //     console.log(response);
  //     this.jobList = response;
  //     // this.userList = response;
  //   },
  //   error => {
  //     console.log(error);
  //   })
  // }

  
  
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

      // this._router.navigate(['/user-applied-job']);  

     },
      error => {
        console.log(error);
      })

  }



}
