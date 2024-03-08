import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class RecruiterServiceService {

  constructor(private http : HttpClient) { }

  register(recruiter:any): Observable<any>{
    return this.http.post("http://localhost:8080/api/recruiter/register",recruiter)
  }

  loginRecruiter(recruiter:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/recruiter/login",recruiter)
  }
  uploadFile(file : any) : Observable<any>{
    const formData = new FormData();
    formData.append("file",file);
    return this.http.post("http://localhost:8080/api/recruiter/uploadFile",formData)
  }
}
