import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userList:User[]=[];


  constructor(private _userService:UserService) { }

  ngOnInit(): void {


    this.getAllUserDetails();

    
  }


  getAllUserDetails()
  {
    this._userService.getAllUser().subscribe(response => {
      this.userList = response;
    },
    error => {
      console.log(error);
    })
  }


  deleteUser(id:number)
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

        this._userService.deleteUser(id).subscribe(response => {

          this.getAllUserDetails();

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
