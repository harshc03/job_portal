import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-co-corricular',
  templateUrl: './co-corricular.component.html',
  styleUrls: ['./co-corricular.component.css']
})
export class CoCorricularComponent {
  coCurricularActivityForm: FormGroup;

  constructor(private fb: FormBuilder, private resumeService: ResumeService) {
    this.coCurricularActivityForm = this.resumeService.resumeForm;
  }

  get coCurricularActivityArray(): FormArray {
    return this.coCurricularActivityForm.get('coCorricular') as FormArray;
  }

  addCoCurricularActivity() {
    this.coCurricularActivityArray.push(this.fb.group({
      description: ['']
    }));
  }

  removeCoCurricularActivity(index: number) {
    this.coCurricularActivityArray.removeAt(index);
  }

  onSubmit() {
    this.resumeService.printCoCurricularActivityForm(this.coCurricularActivityForm.value);
  }
}
