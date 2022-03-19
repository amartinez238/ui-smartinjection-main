import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-my-wells',
  templateUrl: './wo-my-wells.component.html',
  styleUrls: ['./wo-my-wells.component.scss']
})
export class WoMyWellsComponent implements OnInit {

  tableData!: any;
  displayedColumns = [
    "wellName",
    "lease",
    "locationType",
    "location",
    "projectNameWell"
  ];

  constructor(private defaultService:DefaultService) { }

  ngOnInit(): void {
    this.initWells();
  }

  initWells(): void {
    this.defaultService.getWells().subscribe(value =>{
      this.tableData = value; 
    })
  }
}
