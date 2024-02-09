import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }
  registerUser(user : any,resume:any) : Observable<any>{
    const data = { "user":user, "resume":resume };
    return this.http.post("http://localhost:8080/api/register",data)
  }
  uploadFile(file : any) : Observable<any>{
    const formData = new FormData();
    formData.append("file",file);
    return this.http.post("http://localhost:8080/api/uploadFile",formData)
  }
}
