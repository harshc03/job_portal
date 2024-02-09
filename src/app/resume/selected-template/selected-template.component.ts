import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-selected-template',
  templateUrl: './selected-template.component.html',
  styleUrls: ['./selected-template.component.css']
})
export class SelectedTemplateComponent {
  resumeData!: FormGroup;
  constructor(private resumeService: ResumeService) {
    this.resumeData = this.resumeService.resumeForm;
   }
   isResumeDataAvailable(): boolean {
    return !!this.resumeData;
  }
}
