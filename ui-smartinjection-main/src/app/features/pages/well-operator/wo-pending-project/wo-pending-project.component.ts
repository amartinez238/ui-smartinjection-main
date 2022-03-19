import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-pending-project',
  templateUrl: './wo-pending-project.component.html',
  styleUrls: ['./wo-pending-project.component.scss']
})
export class WoPendingProjectComponent implements OnInit {

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
        if(pendingProjects[i].state.data.status == "Pending Approval"){
          pending.push(pendingProjects[i]);
        }
      }
      
      this.tableData = pending;
    })
  }

}
