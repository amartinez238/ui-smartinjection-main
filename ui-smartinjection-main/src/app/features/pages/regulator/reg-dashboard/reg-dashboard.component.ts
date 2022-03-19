import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-reg-dashboard',
  templateUrl: './reg-dashboard.component.html',
  styleUrls: ['./reg-dashboard.component.scss']
})
export class RegDashboardComponent implements OnInit {
  
  tableData!: any;
  passedCol= [
    'projectNameDASH-REG',
    'status',
    'UICProjectNumber'
  ];

  constructor(private defaultService:DefaultService) { }

  ngOnInit(): void {
    this.initProjects();
  }

  initProjects(): void {
    this.defaultService.getProjects().subscribe(value=> {
      // sets the data from the backend to the table data in the front end
      let unapprovedProjects: any = value;
      let unapproved: any = [];

      for(let i = 0; i < unapprovedProjects.length; i++) {
        if(unapprovedProjects[i].state.data.status == "UIC Approved" || 
        unapprovedProjects[i].state.data.status == "Approval Denied" ||
        unapprovedProjects[i].state.data.status == "Pending Approval"){
          unapproved.push(unapprovedProjects[i]);
        }
      }
      
      this.tableData = unapproved;
    })
    
  }

}
