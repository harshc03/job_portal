import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  detailsForm: FormGroup;
  constructor(private fb: FormBuilder, private resumeService: ResumeService,private route : ActivatedRoute) {
    this.detailsForm = this.resumeService.resumeForm;
  }
  onSubmit() {
    this.resumeService.printDetailsForm(this.detailsForm.value);
  }
}
