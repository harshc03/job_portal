import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';



@NgModule({
  declarations: [
    HeroComponent,
    CategoryComponent,
    ContactComponent,
    JobDetailComponent,
    JobListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    CategoryComponent,
    CategoryComponent,
    JobDetailComponent,
    JobListComponent
  ]
})
export class CandidatePortalModule { }
