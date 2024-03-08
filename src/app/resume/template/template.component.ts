import { Component, EventEmitter, Output } from '@angular/core';
import { ResumeService } from '../resume.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  @Output() selected: EventEmitter<boolean> = new EventEmitter<boolean>();
  templates: string[] = [
    'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  ];
  id!: number;
  selectedTemplate(id:any):void{
    this.id = id;
    this.selected.emit(id)
    console.log(id)
  }
}
