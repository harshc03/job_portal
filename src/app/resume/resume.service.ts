import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
  templateid!: number;
  resumeForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    position: new FormControl(),
    language: new FormControl(),
    email: new FormControl(),
    country: new FormControl(),
    phone: new FormControl(),
    photo: new FormControl(),
    aboutMe: new FormControl(),
    location: new FormControl(),
    linkedin: new FormControl(),
    github: new FormControl(),
    education: new FormArray([
      new FormGroup({
        institution: new FormControl(),
        degree: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
        board: new FormControl(),
        location: new FormControl(),
      }),
    ]),
    skills: new FormArray([
      new FormGroup({
        skillName: new FormControl(),
      }),
    ]),
    workExperience: new FormArray([
      new FormGroup({
        w_type: new FormControl(),
        company: new FormControl(),
        position: new FormControl(),
        description: new FormControl(),
        tenure: new FormControl()
      }),
    ]),
    coCorricular: new FormArray([
      new FormGroup({
        description: new FormControl(''),
      }),
    ]),
  });

  insertResumeData(resumeData: any) {
  }
  printSkillForm(formValue: any) {
    console.log('Skill Form:', formValue);
    // Perform any other actions with the form value here
  }
  printWorkExperienceForm(formValue: any) {
    console.log('Work Experience Form:', formValue);
    // Perform any other actions with the form value here
  }
  printCoCurricularActivityForm(formValue: any) {
    console.log('Co-Curricular Form:', formValue);
    // Perform any other actions with the form value here
  }
  printEducationForm(formValue: any) {
    console.log('Education Form:', formValue);
    // Perform any other actions with the form value here
  }
  printDetailsForm(formValue: any) {
    console.log('Resume Form:', formValue);
    // Perform any other actions with the form value here
  }
}
