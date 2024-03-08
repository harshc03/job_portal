import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from 'src/app/shared/interfaces/admin-company.interface';
import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  companyDetails!: CompanyDetails[];
  pending!: CompanyDetails[];
  registered!: CompanyDetails[];
  rejected!: CompanyDetails[];
  isDisabled:boolean=true;

  constructor(private adminsService: AdminsService) { }

  ngOnInit(): void {
    this.getCompanyDetails();
  }

  getCompanyDetails(): void {
    this.adminsService.getCompanyDetails().subscribe((value) => {
      console.log(value);
      this.companyDetails = value;
      this.pending = this.filterCompany('Pending');
      this.registered = this.filterCompany('Accepted');
      this.rejected = this.filterCompany('Rejected');
      console.log(this.pending)
      console.log(this.registered)
      console.log(this.rejected)
    });
  }

  filterCompany(status: string): CompanyDetails[] {
    return this.companyDetails.filter(company => company.status === status);
  }
  updateStatus(id:number,ans:string):void{
    this.adminsService.updateStatus(id,ans).subscribe({
      next:(data: any) => {
        alert("Updated Succesfully !!")
      },
      error: (error:any) => {
        alert("Some error ocuured !! Please try again later .")
      },}
    );
  }
  onClick(event: MouseEvent) {
    if (this.isDisabled) {
      event.preventDefault();
    }
  }
}
