import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { JobService } from '../job.service';
import { Job } from '../models/job';


@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  jobList:Job[]=[];
  constructor(private _jobService:JobService) { }

  ngOnInit(): void {
    this.getAllJobDetails();

   
  }


  getAllJobDetails()
  {
    this._jobService.getAllJob().subscribe(response => {
      this.jobList = response;
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
