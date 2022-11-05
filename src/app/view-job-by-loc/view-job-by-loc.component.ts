import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, OutletContext } from '@angular/router';
import Swal from 'sweetalert2';
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

  jobListByLoc:Job[]=[];
  jobLoc:string;
  constructor(private _activatedRouter:ActivatedRoute,private _jobService:JobService) { }

  ngOnInit(): void {
    //this.jobLoc = this._activatedRouter.snapshot.params['jobLocation'];
    this.getJobDetailByCategory(this.selectedCategory);
    this.typee = sessionStorage.getItem('type');
    sessionStorage.setItem('category', 'yes');
  }


    // searching by keyword
    // enteredSearchValue: string = '';

    // @Output()
    // searchTextChange: EventEmitter<string> = new EventEmitter<string>();

    // onSeacrhTextChanged()
    // {
    //   this.searchTextChange.emit(this.enteredSearchValue);
    // }








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

  
  


}
