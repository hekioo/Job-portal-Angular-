import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobService } from '../job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  jobReg: FormGroup;

  constructor(private _jobServive: JobService, 
              private _formBuilder: FormBuilder, 
              private _router:Router){ 

                this.jobReg = this._formBuilder.group({

                  jobId: [0],
                  companyName: ['', Validators.compose([Validators.required])], 
                  jobTitle: ['', Validators.compose([Validators.required, Validators.minLength(5)])],  //Validators.compose is used to to combine all the validations at once
                  jobCategory: ['', Validators.compose([Validators.required])],
                  jobDescription: ['', Validators.compose([Validators.required,])],
                  jobLocation: ['', Validators.compose([Validators.required])],
                  jobSalary: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])]
            
            
                });
              }


              

  ngOnInit(): void {  
    
  }



// function to add a new JOb onto platform (ONLY ADMIN)
  registerJob() {
    // console.log(this.jobReg.valid);  // this will set to TRUE only if all the validations are satisfied
     // console.log(this.jobReg.value);  // this is used to get all the values from all the input tags
 
     if(this.jobReg.valid)
     {
 
       Swal.fire({
         title: 'Do you want to save the Record?',
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: 'Save',
         denyButtonText: `Don't save`,
       }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
 
           this._jobServive.addJob(this.jobReg.value).subscribe(response => {
             Swal.fire('Record Saved!', '', 'success')
             //this._router.navigate(['admin/job-list']);  // previous it was "job-list"// to navigate automatically to view-job list
             this._router.navigate(['admin/job-list']);  // previous it was "job-list"// to navigate automatically to view-job list

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
