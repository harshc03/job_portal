import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recruiter-sidebar',
  templateUrl: './recruiter-sidebar.component.html',
  styleUrls: ['./recruiter-sidebar.component.css']
})
export class RecruiterSidebarComponent {
  @Output() activeItemChanged: EventEmitter<string> = new EventEmitter<string>();

  setActiveItem(active: string) {
    this.activeItemChanged.emit(active);
    console.log(active)
  }
}
