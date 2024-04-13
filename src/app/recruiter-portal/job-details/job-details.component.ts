import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/interfaces/job.interface';
import { RecruiterPortalService } from '../recruiter-portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{
  selectedJob!:Job
  constructor(private recruiterPortalService: RecruiterPortalService,private router: Router){
    

  }
  ngOnInit(): void {
    this.selectedJob=this.recruiterPortalService.selectedJob
  }




}
