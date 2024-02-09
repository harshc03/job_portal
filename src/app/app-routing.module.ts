import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './resume/profile/profile.component';
import { CoCorricularComponent } from './resume/co-corricular/co-corricular.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { WorkExperienceComponent } from './resume/work-experience/work-experience.component';
import { DashboardComponent } from './recruiter-portal/dashboard/dashboard.component';
import { JobPostingComponent } from './recruiter-portal/job-posting/job-posting.component';
import { HeroComponent } from './candidate-portal/hero/hero.component';
import { SelectedTemplateComponent } from './resume/selected-template/selected-template.component';
import { LoginComponent } from './candidate-authentication/login/login.component';
import { RegisterComponent } from './candidate-authentication/register/register.component';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "work-experience",
    component: WorkExperienceComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "co-curricular",
    component: CoCorricularComponent
  },
  {
    path: "recruiter-portal",
    component: DashboardComponent
  },
  {
    path:'job-posting',
    component: JobPostingComponent,
    outlet: 'recruiter'
  },
  {
    path:'candidate-portal',
    component: HeroComponent
  },
  {
    path: 'selected-template',
    component: SelectedTemplateComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
