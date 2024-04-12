import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/interfaces/job.interface';
import { RecruiterPortalService } from '../recruiter-portal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit{

  jobDetails!:Job[]
  p: string|number=1;

  constructor(private recruiterPortalService: RecruiterPortalService,private cookieservice:CookieService){ }

  ngOnInit(): void {
    this.getJobs()
  }
  getJobs(){
    
    this.recruiterPortalService.getJobs(this.cookieservice.get("companyId")).subscribe((data)=>{
      this.jobDetails=data
    })
  }

}
