import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CoCorricularComponent } from './co-corricular/co-corricular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SkillsComponent,
    ProfileComponent,
    EducationComponent,
    WorkExperienceComponent,
    CoCorricularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SkillsComponent,
    ProfileComponent,
    EducationComponent,
    WorkExperienceComponent,
    CoCorricularComponent
  ]
})
export class ResumeModule { }
