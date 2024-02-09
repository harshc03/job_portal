import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeModule } from './resume/resume.module';
import { SharedModule } from './shared/shared.module';
import { RecruiterPortalModule } from './recruiter-portal/recruiter-portal.module';
import { CandidatePortalModule } from './candidate-portal/candidate-portal.module';
import { CandidateAuthenticationModule } from './candidate-authentication/candidate-authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    ResumeModule,
    RecruiterPortalModule,
    CandidatePortalModule,
    CandidateAuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
