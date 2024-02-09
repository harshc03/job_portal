import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-selected-template',
  templateUrl: './selected-template.component.html',
  styleUrls: ['./selected-template.component.css']
})
export class SelectedTemplateComponent {
  data:any;
  downloadClicked:boolean=false;
  resumeData!: FormGroup;
  constructor(private resumeService: ResumeService) {
    this.resumeData = this.resumeService.resumeForm;
   }
   isResumeDataAvailable(): boolean {
    return !!this.resumeData;
  }
  public openPDF(): void {
    this.downloadClicked=true
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
