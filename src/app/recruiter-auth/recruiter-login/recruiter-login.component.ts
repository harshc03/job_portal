import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterServiceService } from '../recruiter-service.service';

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent {
  login!: FormGroup;
  constructor(
    private recruiterServiceService: RecruiterServiceService,
    private router: Router
  ) {
    // Initialize the form group
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  loginRecruiter(){
    this.recruiterServiceService.loginRecruiter(this.login.value).subscribe((data)=>{
      console.log(data)
      if(data.validYN == 1){
        this.router.navigate(['/recruiter-portal']);
      }
      else{
        alert("Invalid Credentials")
      }
    })
  }
  register(){
    this.router.navigate(['/recruiter-register']);
  }
}
