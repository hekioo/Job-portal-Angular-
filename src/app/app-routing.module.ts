import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewJobByLocComponent } from './view-job-by-loc/view-job-by-loc.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [

  {path:'', component: HomePageComponent},     // if no path is given redirect to view USer Coomponent
  {path:'add-user', component: AddUserComponent},
  {path:'add-job', component:AddJobComponent},
  {path:'user-list', component: ViewUserComponent},
  {path:'job-list', component: ViewJobsComponent},
  {path:'job-listByLoc', component: ViewJobByLocComponent},
  {path:'update-user/:userId', component: UpdateUserComponent},
  {path:'update-job/:jobId', component: UpdateJobComponent},
  {path:'login', component: LoginComponent},
  {path:'user-dashboard', component: UserDashboardComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'register-page', component:AdminDashboardComponent},
  {path:'home-page', component:HomePageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
