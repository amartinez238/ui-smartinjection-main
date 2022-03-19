import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-reg-uic-pending-projects',
  templateUrl: './reg-uic-pending-projects.component.html',
  styleUrls: ['./reg-uic-pending-projects.component.scss']
})
export class RegUicPendingProjectsComponent implements OnInit {

  projectCol: any[] = [
    "projectNameDASH-WO",
    "status",
    "UICProjectNumber"
  ];

  tableData!: any;

  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.initProjects();
  }

  initProjects():void {
    this.defaultService.getProjects().subscribe(value =>{
      let pendingProjects: any = value;
      let pending: any = [];

      for(let i = 0; i < pendingProjects.length; i++) {
        if(pendingProjects[i].state.data.status == "Approved"){
          pending.push(pendingProjects[i]);
        }
      }
      
      this.tableData = pending;
    })
  }
}
