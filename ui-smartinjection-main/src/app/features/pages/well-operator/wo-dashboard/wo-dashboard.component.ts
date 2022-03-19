import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-dashboard',
  templateUrl: './wo-dashboard.component.html',
  styleUrls: ['./wo-dashboard.component.scss']
})
export class WoDashboardComponent implements OnInit {

  tableData!: any;
  passedCol = [
    'projectNameDASH-WO',
    'status',
    'UICProjectNumber'
  ];
  

  constructor(private defaultService:DefaultService) { }

  ngOnInit(): void {
    this.initializeProjects();
  }

  initializeProjects(): void {
    this.defaultService.getProjects().subscribe(value => {
      // sets the data from the backend to the table data in the front end
      let unapprovedProjects: any = value;
      let unapproved: any = [];

      for(let i = 0; i < unapprovedProjects.length; i++) {
        if(unapprovedProjects[i].state.data.status == "Unapproved"){
          unapproved.push(unapprovedProjects[i]);
        }
      }
      
      this.tableData = value;
      // console.log("value in dash: ", value);
      // this.tableData = value; 
      
      // console.log("table data");
      // console.log(this.tableData);
    }) 
  }

}

const SAMPLE_DATA: any[] = [
  {projectName: "Hello", status: "Unapproved", UICProjectNumber: "N/A"}
];