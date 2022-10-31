import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobService } from '../job.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  jid:number ;
  
  job:Job;
  updateJobForm: FormGroup;
  constructor(private _activatedRouter:ActivatedRoute,
              private _jobService:JobService,
              private _formBuilder:FormBuilder,
              private _route:Router) 
              { 

                this.updateJobForm = this._formBuilder.group({

                  jobId: [0],
                  companyName: ['', Validators.compose([Validators.required])], 
                  jobTitle: ['', Validators.compose([Validators.required, Validators.minLength(10)])],  //Validators.compose is used to to combine all the validations at once
                  jobCategory: ['', Validators.compose([Validators.required])],
                  jobDescription: ['', Validators.compose([Validators.required,])],
                  jobLocation: ['', Validators.compose([Validators.required])],
                  jobSalary: ['', Validators.compose([Validators.required, Validators.min(250000)])]
            
            
                });
              }

  ngOnInit(): void {

    this.jid = this._activatedRouter.snapshot.params['jobId'];
    this._jobService.getJobById(this.jid).subscribe(response => {

      this.job=response;
      console.log(response);


      this.updateJobForm = this._formBuilder.group({

        jobId: [0],
        companyName: [response.companyName, Validators.compose([Validators.required])], 
        jobTitle: [response.jobTitle, Validators.compose([Validators.required, Validators.minLength(10)])],  //Validators.compose is used to to combine all the validations at once
        jobCategory: [response.jobCategory, Validators.compose([Validators.required])],
        jobDescription: [response.jobDescription, Validators.compose([Validators.required,])],
        jobLocation: [response.jobLocation, Validators.compose([Validators.required])],
        jobSalary: [response.jobSalary, Validators.compose([Validators.required, Validators.min(250000)])]
  
  
      });
    },
    error => {
        console.log(error);
    })

  }


  updateJob()
  {
    if(this.updateJobForm.valid)
    {
      Swal.fire({
        title: 'Do you want to Update the Record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Update',
        denyButtonText: `Don't Update`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          this._jobService.updateJobById(this.jid, this.updateJobForm.value).subscribe(response => 
          {
            Swal.fire('Record Updated Successfully!', '', 'success');
            this._route.navigate(['job-list']);

          },
          error => {
            console.log(error);
          })


        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
  }

}
