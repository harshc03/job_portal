import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Sector } from 'src/app/shared/interfaces/sector.interface';
import { CandidateServiceService } from '../candidate-service.service';
import { JobLocation } from 'src/app/shared/interfaces/job-location.interface';
import { Job } from 'src/app/shared/interfaces/job.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  category!: Sector[];
  location!: JobLocation[];
  JobData!: Job[];
  constructor(private cookieService : CookieService,private candidateService: CandidateServiceService ) {

  }
  ngOnInit(): void {
    this.getJobs();
    this.getCategories();
    this.getJobLocations();
  }
  images = ['../../../assets/img/carousel-1.jpg','../../../assets/img/carousel-1.jpg','../../../assets/img/carousel-1.jpg']
  activeItem: String = 'home'
  setActiveItem(active : String){
    this.activeItem = active;
  }

  getJobLocations(){
    this.candidateService.getLocation().subscribe({
      next:(data: JobLocation[]) => {
        this.location = data;
        // console.log(this.category)
      },
      error: (error:any) => {
        console.log(error);
      },}
    );
  }

  getCategories(){
    this.candidateService.getCategory().subscribe({
      next:(data: Sector[]) => {
        this.category = data;
        // console.log(this.category)
      },
      error: (error:any) => {
        console.log(error);
      },}
    );
  }

  getJobs(){
    this.candidateService.getJob().subscribe({
      next:(data: Job[]) => {
        this.JobData = data;
        console.log(this.JobData)
      },
      error: (error:any) => {
        console.log(error);
      },}
    );
  }
  applyJob(jobId : number){
    console.log(jobId)
    const candidateId = this.cookieService.get('id');
    this.candidateService.applyJob(parseInt(candidateId),jobId).subscribe({
      next:(data: any) => {
        alert("Job Applied Successfully!");
        console.log(data)
      },
      error: (error:any) => {
        alert("Some Error Occured! Please try again later.");
        console.log(error);
      },}
    );
  }

  filterJobs(){
    
  }
  onSearch(){
    const filteredJobs = this.filterJobs();
    console.log(filteredJobs);
  }
}
