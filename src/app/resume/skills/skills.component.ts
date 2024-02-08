import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  newSkill: string = '';
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder, private resumeService: ResumeService) {
    this.skillsForm = this.resumeService.resumeForm;
  }

  get skillsArray(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skillsArray.push(this.fb.group({
      skillName: [this.newSkill, Validators.required]
    }));
    this.newSkill = ''; // Reset the newSkill input
  }

  removeSkill(index: number) {
    this.skillsArray.removeAt(index);
  }

  onSubmit() {
    this.resumeService.printSkillForm(this.skillsForm.value);
  }
}
