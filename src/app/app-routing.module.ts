import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserAppliedJobComponent } from './user-applied-job/user-applied-job.component';
import { UserAuthGuard } from './user-auth.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewJobByLocComponent } from './view-job-by-loc/view-job-by-loc.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [

  {path:'', component: LoginComponent},     // if no path is given redirect to Login Coomponent
  //{path:'add-user', component: AddUserComponent},
  //{path:'job-list', component: ViewJobsComponent},
  //{path:'job-listByLoc', component: ViewJobByLocComponent}, 
  {path:'login', component: LoginComponent},
  //{path:'user-dashboard', component: UserDashboardComponent},
  {path:'register-page', component:AddUserComponent},
  // {path:'home-page', component:HomePageComponent},
  {path:'job-by-cat', component:ViewJobByLocComponent},
  

  {path:'admin', component:AdminDashboardComponent, canActivate:[AdminAuthGuard],
    children:
    [

      {path:'', component: HomePageComponent}, 
      {path:'home-page', component:HomePageComponent},
      {path:'add-job', component:AddJobComponent},
      {path:'user-list', component: ViewUserComponent},
      //{path:'update-user/:userId', component: UpdateUserComponent},
      {path:'update-job/:jobId', component: UpdateJobComponent},
      //{path:'add-user', component: AddUserComponent},     
      {path:'job-list', component: ViewJobsComponent},
      {path:'job-listByLoc', component: ViewJobByLocComponent},
      // {path:'userApplied-job', component: AppliedJobComponent},
      {path:'applied-job', component:AppliedJobComponent},
    ]
},



{path:'user/:userId', component:UserDashboardComponent, canActivate:[UserAuthGuard],
    children:
    [    
      {path:'', component: HomePageComponent}, 
      {path:'job-list', component: ViewJobsComponent},
      {path:'user-applied-job', component: UserAppliedJobComponent},
      {path:'job-listByLoc', component: ViewJobByLocComponent},
      {path:'user-profile', component:UserProfileComponent},
      {path:'applied-job', component:AppliedJobComponent},
      {path:'home-page', component:HomePageComponent},
    ]
},




{path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
