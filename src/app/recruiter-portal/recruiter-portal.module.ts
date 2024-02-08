import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { AppRoutingModule } from '../app-routing.module';
import { JobListingComponent } from './job-listing/job-listing.component';
import { ApplicantsComponent } from './applicants/applicants.component';



@NgModule({
  declarations: [
    DashboardComponent,
    JobPostingComponent,
    JobListingComponent,
    ApplicantsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    DashboardComponent,
    JobPostingComponent,
    JobListingComponent,
    ApplicantsComponent
  ]
})
export class RecruiterPortalModule { }
