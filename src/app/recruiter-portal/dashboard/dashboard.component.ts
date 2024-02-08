import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() isExpanded: boolean = false;
  sidebarExpanded = true;
  activeSection: string = 'jobPosting'; // Initialize with default section

  setActiveSection(section: string) {
    this.activeSection = section;
  }
  
}
