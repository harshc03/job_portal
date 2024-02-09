import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationForm: FormGroup;
  constructor(private fb: FormBuilder, private resumeService: ResumeService) {
    this.educationForm = this.resumeService.resumeForm;
  }

  get educationArray(): FormArray {
    return this.educationForm.get('education') as FormArray;
  }

  addEducation() {
    this.educationArray.push(this.fb.group({
      institution: [''],
      degree: [''],
      year: [''],
      percentage: [''],
      board: ['']
    }));
  }

  removeEducation(index: number) {
    this.educationArray.removeAt(index);
  }

  onSubmit() {
    this.resumeService.printEducationForm(this.educationForm.value);
  }
  
}
