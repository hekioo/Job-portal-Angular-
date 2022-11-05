import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddJobComponent } from './add-job/add-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { ViewJobByLocComponent } from './view-job-by-loc/view-job-by-loc.component';
import { ViewJobByCatComponent } from './view-job-by-cat/view-job-by-cat.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { UserAppliedJobComponent } from './user-applied-job/user-applied-job.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewJobsComponent,
    ViewUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    AdminNavbarComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    HomePageComponent,
    DefaultNavbarComponent,
    UserNavbarComponent,
    AddJobComponent,
    UpdateJobComponent,
    ViewJobByLocComponent,
    ViewJobByCatComponent,
    PagenotfoundComponent,
    UserProfileComponent,
    AppliedJobComponent,
    UserAppliedJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
