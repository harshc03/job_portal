import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../shared/interfaces/sector.interface';
import { JobLocation } from '../shared/interfaces/job-location.interface';
import { Job } from '../shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  constructor(private http: HttpClient) { }
  getCategory(): Observable<Sector[]> {
    return this.http.get<Sector[]>("http://localhost:8080/api/category", { withCredentials: true })
  }
  getLocation(): Observable<JobLocation[]> {
    return this.http.get<JobLocation[]>("http://localhost:8080/api/location", { withCredentials: true })
  }
  getJob(): Observable<Job[]> {
    return this.http.get<Job[]>("http://localhost:8080/api/job", { withCredentials: true })
  }
  applyJob(candidateId:number,jobId: number): Observable<any> {
    return this.http.post("http://localhost:8080/api/applyJob", {candidateId,jobId}, { withCredentials: true })
  }
}
