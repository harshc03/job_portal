import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  constructor(private http:HttpClient) { }
  loginAdmin(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/admin-login',data);
  }
  getCompanyDetails():Observable<any>{
    return this.http.get('http://localhost:8080/api/admin-company');
  }
  updateStatus(data:number,ans:string):Observable<any>{
    return this.http.post('http://localhost:8080/api/update-status',{data,ans});
  }
  
}
